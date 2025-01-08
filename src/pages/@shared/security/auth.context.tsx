import React, { createContext, useState, useContext, ReactNode } from "react";
import { IUserSession } from "../../login/login.service.interfaces";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  user: IUserSession | undefined;
  handleSession: (userData: IUserSession) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUserSession | undefined>(
    JSON.parse(
      localStorage.getItem("@AUTH_SESSION") as string
    ) as unknown as IUserSession
  );

  const Nav = useNavigate();

  const handleSession = (userData: IUserSession) => {
    setUser(userData);
    localStorage.setItem("@AUTH_SESSION", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("@AUTH_SESSION");
    Nav("/");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, handleSession, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth precisa do authProvider");
  }
  return context;
};
