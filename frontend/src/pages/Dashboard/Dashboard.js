import { useEffect, React } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { fetchExpenses } from "../redux/expensesSlice";
import { fetchIncome } from "../redux/incomeSlice";
import { fetchTotalExpenses } from "../redux/totalExpensesSlice";
import { fetchTotalIncome } from "../redux/totalIncomeSlice";
import { selectId } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
//
function Dashboard() {
  //initilize states from slices
  const { monthly_expenses } = useSelector((state) => state.expensesData);
  const { monthly_income } = useSelector((state) => state.incomeData);
  const { total_expenses } = useSelector((state) => state.totalExpensesData);
  const { total_income } = useSelector((state) => state.totalIncomeData);

  const Id = useSelector((state) => selectId(state));
  const stringId = Id.toString();

  const dispatch = useDispatch();
  //renders on every new dispatch, dependent on dispatch
  useEffect(() => {
    dispatch(fetchIncome(stringId));
    dispatch(fetchExpenses(stringId));
    dispatch(fetchTotalIncome(stringId));
    dispatch(fetchTotalExpenses(stringId));
  }, [dispatch, stringId]);

  let profit = total_income - total_expenses;

  let incArray = [];
  let expArray = [];
  //copies monthly_income to incArray
  incArray = incArray.concat(monthly_income);
  //copies monthly_expenses to expArray
  expArray = expArray.concat(monthly_expenses);
  //array of hexadecimal color codes to use in pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  //map function to format Date field to remove clock
  let modifiedIncomeArr = incArray?.map(function (e) {
    return {
      ...e,
      date: new Date(e.date).toISOString().split("T")[0],
    };
  });
  let modifiedExpenseArr = expArray?.map(function (e) {
    return {
      ...e,
      date: new Date(e.date).toISOString().split("T")[0],
    };
  });
  //sorts Date in array from earliest date in x month to most current date in x month
  modifiedIncomeArr?.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  modifiedExpenseArr?.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  //takes modifiedIncomeArr and renders with recharts
  const renderIncomeGraph = (
    <LineChart width={350} height={300} data={modifiedIncomeArr}>
      <Line
        type="monotone"
        dataKey="incomeAmount"
        stroke="#00FF00"
        strokeWidth={2}
      />
      <XAxis dataKey="date" offset={0} />
      <Tooltip />
    </LineChart>
  );
  //takes modifiedExpenseArr and renders with recharts
  const renderExpenseGraph = (
    <LineChart width={350} height={300} data={modifiedExpenseArr}>
      <Line
        type="monotone"
        dataKey="expenseAmount"
        stroke="#FF0000"
        strokeWidth={2}
      />
      <XAxis dataKey="date" />
      <Tooltip />
    </LineChart>
  );
  //takes expArray and renders with recharts
  const renderSpent = (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="expenseAmount"
        data={expArray}
        cx={200} //positioning on x-axis
        cy={200} //positioning on y-axis
        innerRadius={60} //affects inner circle in pie
        outerRadius={90} //affects pie itself
        paddingAngle={0} //distance between segmented bars
        fill="FF0000" //determines color in pie
      >
        {expArray?.map((entry, index) => (
          //maps each entry and assins color to fill
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );

  return (
    <>
      <h1 className="centerText">Dashboard</h1>

      <div className="displayIncome">
        Income
        <renderGraph>{renderIncomeGraph}</renderGraph>
      </div>
      <div className="displayExpense">
        Expenses
        <renderExpenseGraph>{renderExpenseGraph}</renderExpenseGraph>
      </div>

      <div className="totalIncome">
        <section className="colorGreen">
          Income
          <br />{" "}
        </section>
        $ {total_income}
      </div>
      <div className="totalExpense">
        <section className="colorRed">
          Expense
          <br />{" "}
        </section>
        $ {total_expenses}
      </div>
      <div className="profit">
        <section className="colorGrey">
          Profit
          <br />{" "}
        </section>
        $ {profit}
      </div>
      <div className="spent">
        Spent <br />
        <renderSpent>{renderSpent}</renderSpent>
      </div>

      <div className="expensesList">
        <section>---------------------------------------</section>
        <section className="bold">Expenses</section>
        {monthly_expenses.map((expenseEntry, index) => (
          <div key={index}>
            <p>
              {expenseEntry.recipient}: $ {expenseEntry.expenseAmount}
            </p>
          </div>
        ))}
        <section className="bold">
          ---------------------------------------
        </section>
      </div>
    </>
  );
}

export default Dashboard;
