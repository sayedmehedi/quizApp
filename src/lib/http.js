import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://quiz-api.olpo.tk/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
