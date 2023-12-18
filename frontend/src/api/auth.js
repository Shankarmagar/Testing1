import axios from 'axios'; // Import axios here

const BASE_URL = 'http://localhost:3001/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const signUp = async (userData) => {
  try {
    const response = await axiosInstance.post("/cashcalc/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logIn = async (userData) => {
  try {
    const response = await axiosInstance.post("/cashcalc/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async (navigate) => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}/cashcalc/logout`);
    console.log(response.data); // Output: { message: 'Logged out successfully' }
    navigate('/');
  } catch (error) {
    console.error(error.response.data); // Handle error on the frontend
  }
};
