export const API_URL = 'https://simple-product-db.herokuapp.com/';  //'http://localhost:5000/'; use this for local server

export const GET: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
} as const;
