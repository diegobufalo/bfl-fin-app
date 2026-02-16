import { createContext, useContext, useState, type ReactNode } from "react";
import type { Transaction } from "../types";

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (newTrans: Omit<Transaction, "id">) => void;
}

const TransactionContext = createContext<TransactionContextType | null>(null);

const initialTransactions: Transaction[] = [
  {
    id: 1,
    description: "Padaria Bella Vista",
    category: "Restaurantes",
    categoryColor: "#A855F7",
    account: "platinum",
    date: "04/01/2026",
    value: 35.0,
  },
  {
    id: 2,
    description: "Conta de Luz - CEMIG",
    category: "Energia elétrica",
    categoryColor: "#22C55E",
    account: "Nubank Conta",
    date: "04/01/2026",
    value: 180.0,
  },
  {
    id: 3,
    description: "Shell - Combustível",
    category: "Postos de combustível",
    categoryColor: "#F97316",
    account: "platinum",
    date: "04/01/2026",
    value: 150.0,
  },
  {
    id: 4,
    description: "Uber Eats",
    category: "Delivery",
    categoryColor: "#A855F7",
    account: "platinum",
    date: "03/01/2026",
    value: 42.0,
  },
  {
    id: 5,
    description: "Supermercado Extra",
    category: "Supermercado",
    categoryColor: "#A855F7",
    account: "Nubank Conta",
    date: "03/01/2026",
    value: 387.45,
  },
  {
    id: 6,
    description: "Internet Vivo Fibra",
    category: "Internet",
    categoryColor: "#22C55E",
    account: "Nubank Conta",
    date: "03/01/2026",
    value: 149.9,
  },
  {
    id: 7,
    description: "Restaurante Madero",
    category: "Restaurantes",
    categoryColor: "#A855F7",
    account: "platinum",
    date: "03/01/2026",
    value: 145.0,
  },
  {
    id: 8,
    description: "iFood - Jantar",
    category: "Delivery",
    categoryColor: "#A855F7",
    account: "platinum",
    date: "02/01/2026",
    value: 58.9,
  },
  {
    id: 9,
    description: "Farmácia Drogasil",
    category: "Saúde",
    categoryColor: "#EF4444",
    account: "platinum",
    date: "02/01/2026",
    value: 89.0,
  },
  {
    id: 10,
    description: "Aluguel Apartamento",
    category: "Moradia",
    categoryColor: "#F97316",
    account: "Nubank Conta",
    date: "02/01/2026",
    value: 1500.0,
  },
];

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addTransaction = (newTrans: Omit<Transaction, "id">) => {
    const transaction: Transaction = {
      ...newTrans,
      id: Date.now(),
    };
    setTransactions((prev) => [transaction, ...prev]);
  };

  return <TransactionContext.Provider value={{ transactions, addTransaction }}>{children}</TransactionContext.Provider>;
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) throw new Error("useTransactions deve ser usado dentro de TransactionProvider");
  return context;
};
