import axios from "axios";

export const todoApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1MDRiNWJjLTdmY2MtNDkwYy1iMWFiLWM0Mjg2MzM3MTY2YSIsImlhdCI6MTczNjI2MTQ5NH0.TRvHaeoeOaLJZiZmdfTrAFiEi3OrvnFBqZDYq2IEkkk",
  },
});
