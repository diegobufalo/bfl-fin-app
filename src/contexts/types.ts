import { createContext, useContext } from "react";
import type { Transaction, User } from "../types";
import type { DefaultTheme } from "styled-components";

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
    return context;
};


interface ThemeContextType {
    isDark: boolean;
    theme: DefaultTheme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme deve ser usado dentro de ThemeProvider");
    return context;
};


interface TransactionContextType {
    transactions: Transaction[];
    addTransaction: (newTrans: Omit<Transaction, "id">) => void;
}

export const TransactionContext = createContext<TransactionContextType | null>(null);

export const useTransactions = () => {
    const context = useContext(TransactionContext);
    if (!context) throw new Error("useTransactions deve ser usado dentro de TransactionProvider");
    return context;
};
