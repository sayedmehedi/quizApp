import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://192.168.0.108/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
