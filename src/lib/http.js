import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://quiz-app-api.onrender.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
