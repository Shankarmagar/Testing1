
## CashCalc

Group Members; Josh, Sabeet, Shankar, Rezwan 

### Summary
CashCalc provides users with a personal finance tracker. It consists of a dashboard page with summarizes user data, the get started page allows a user to track their budget, income, and expenses. In addition their is a budget planning page where users can assign need to expenses and expenses will be displayed on a table based on that need. The last page is a profile page where the user can view and update their information.

### Who worked on what
1. Rezwan - Get Started + RTK Query/Redux + Frontend for Home/SignIn/SignUp 
2. Josh - Dashboard + Database Set Up
3. Sabeet - Budget Planning  + Helped with Get Started 
4. Shankar - Profile Page + Authentication + Nav Bar + RTK Query/Redux 

### Completed Features

1. Get Started Page
a.                      Users can input budget, monthly income, and monthly expenses information. 
b. Monthly income includes: Source, Category, Date, and incomeAmount
c. Monthly expenses includes: Recipient, Category, Date, and expenseAmount
d. Arrays for monthly income and monthly expenses are dynamically displayed and updated in the database as entries are submitted by the user
e. Total income and total expenses are calculated and updated in the database as entries are submitted by the user

2. Budget Planning Page
a. consists of 2 components BudgetPlanning.js and BPcard.js
b. for a new user the budget planning page will be a table with 3 empty columns initially. The user has to add expenses through the Get Started page first
c. for a new user who has added expenses to their account, that user would have to press the add item button, select an expense, assign a need, and then confirm their choices.
d. after assigning needs to their expenses, expenses will show on the budget planning page in their respective need columns (necessary, medium, and unnecessary)

4. Dashboard
a. Displays a summary of important user data in different forms consisting of one component
b. 3 separate graphs, along with a display of total income, total expenses, profit margin and a list of expenses inputted by the user
c. Dashboard recieves fetch calls from database and dynamically generates graphical represenation on every subsequent entry
d. users are then free to use the data displayed as they need in order to see the improvements to be made

6. Profile Page 
a. allows user to view and update your profile


### Uncompleted Features
Remember me
* Ran out of time due to prioritizing functionality of more important parts of the site

Reset email
* Able to send the reset link Containing id to gmail but unable to create a form without logging in and change the password

Budget Planning
* Due to having too much trouble trying to correctly implement the add item button in BPCard, i moved the logic over to BudgetPlanning, and made 1 uniform button rather than 3 made for each column(see figma for the design differences)
* The next problem I ran into was displaying the expenses within each column based on need. I wasn’t able to display it on the budgetplanning component and the only way I could was on the BPCard component 
* Due to this need is added on one component while being displayed through another component, and I couldnt figure out how to keep everything up to date with database changes  and by this point we had no more time so left the page as is. However logging out, refreshing the page, and logging back in shows the need correctly based on changes on the database during testing.

Dashboard
* The Linechart Income and the Piechart Spent divs dynamically render on every subsequent entry to update the graphs itself. However, the **Linechart Expenses** **does not** do this, and as well it does not update on a new login. It is unclear to me and my peers what the issue is and it's something I most likley will never understand
* Piechart id displayed incorrectly on tooltip where in the linecharts they use strings on the tooltip, piechart instead defaults to using the id assigned to the objects in the array and unsure how to resolve this issue
* There was not enough time to render the savings graph, as we had to devote more time to fixing bugs we encountered during development of our own components and trying to get redux to work properly in the frontend
* There could have been a more customized tooltip if more time to learn and understand
* when it came to the display of the x-axis, strings exceeding a certain length would get cut off/overlap and altering the padding on X-axis did not solve the issue

Get Started

* Editing and removing entries in GetStarted page, which would then update the database and state accordingly
* A lot of time was spent on fixing other errors on the page,  which reduced the time that was designated to implement this feature 
* Errors that were dealt with:
  * Database not updating after state was updated
  * Initially displayed entries not displaying database data and only displaying new entries 
  * Displayed entries not updating after new entries were submitted to the database
  * Total income and total expenses being undefined (was calculating before asynchronous fetching of data was complete)

### Start Guide

#### Requirement
- Node.js need to be installed 
- Any IDE can be used preferred VisualCode Studio

#### Installation
- Clone the code [click me to copy the link to clone](https://github.com/Rezwan192/CashCalc.git)
- In terminal 
```
cd <path-to-where-you-want-to-clone> 
git clone <link>

```

### Quick-Start
- Navigate to the project
- copy the following command and paste in terminal
```
cd <Path to project>
npm install
npm start
cd frontend
npm install
npm start

```
- Or use this to run both frontend and backend concurrently
``` 
npm run build
```


### Tools we used
Redux
Express
Mongoose/MongoDB
RTK Query
React
Recharts

### Contribution
We welcome all students and software developer to contribute in our project by adding features that elevates our project functionality  all you have to do is pull request and here is the link to fork it [click me to fork](https://github.com/Rezwan192/CashCalc/fork)


### References

Multer package for uploading image: https://www.npmjs.com/package/multer
Rechart package for displaying line chart: link https://recharts.org/en-US/
Nodemailer to send reset password link using w3schools: https://www.w3schools.com/nodejs/nodejs_email.asp
Redux Tutorial: https://youtu.be/iBUJVy8phqw?si=-yzt-HCIzE0sxaWf
RTK Query for fetching data from the backend: https://redux-toolkit.js.org/rtk-query/overview 
Mern Auth Tutorial: https://www.youtube.com/watch?v=R4AhvYORZRY
MongoDB Documentation: https://www.mongodb.com/docs/
Updating nested data tutorial(used for updating need functionality): https://www.youtube.com/watch?v=aA_y3ewrnpI 
