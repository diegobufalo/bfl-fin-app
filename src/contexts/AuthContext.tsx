import { useState, type ReactNode } from "react";
import type { User } from "../types";
import { AuthContext } from "./types";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    // Credenciais fake (pode mudar)
    if (email === "diego@fin.com" && password === "123123") {
      setUser({ name: "Diego", email });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
