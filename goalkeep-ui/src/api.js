import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // Points to local backend server

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const getGoals = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/goals`);
    return response.data;
  } catch (error) {
    console.error("Error fetching goals:", error);
    return [];
  }
};

export const getUserById = async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error.response ? error.response.data : error.message);
      return null;
    }
  };

  export const createGoal = async (goal) => {
    console.log(goal.data)
    try {
      const response = await axios.post(`${API_BASE_URL}/goals`, goal);
      return response.data;
    } catch (error) {
      console.error("Error creating goal:", error.response ? error.response.data : error.message);
      return null;
    }
  };
  
  