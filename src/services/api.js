import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://nodejs-express-portfolio.onrender.com';

export const fetchSkills = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/skills/api`);
    console.log('API Skills Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/projects/api`);
    console.log('API Projects Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

