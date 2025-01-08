import axios from "axios";
import { isJwtExpired } from "jwt-check-expiration";
import { IUserSession } from "../../pages/login/login.service.interfaces";

export const todoApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

todoApi.interceptors.request.use(
  (config) => {
    try {
      const sessionData = localStorage.getItem("@AUTH_SESSION");

      if (sessionData) {
        const session: IUserSession = JSON.parse(sessionData as string);

        if (session.accessToken) {
          if (isJwtExpired(session.accessToken)) {
            localStorage.removeItem("@AUTH_SESSION");
            throw new axios.Cancel("Sessão expirada. Faça login novamente.");
          }

          config.headers.Authorization = `Bearer ${session.accessToken}`;
        }
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);
