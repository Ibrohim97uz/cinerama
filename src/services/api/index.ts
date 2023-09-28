import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "secret-token": process.env.NEXT_PUBLIC_SECRET_TOKEN,
  },
});
