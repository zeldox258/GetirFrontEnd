export const API_URL = 'http://localhost:5000/';

export const GET: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json', 
  },
} as const;
