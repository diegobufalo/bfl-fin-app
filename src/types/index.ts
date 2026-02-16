export interface Transaction {
    id: number;
    description: string;
    category: string;
    categoryColor: string;
    account: string;
    date: string;
    value: number;
    type?: 'income' | 'expense';
}

export interface User {
    name: string;
    email: string;
}

export interface Category {
    id: number;
    name: string;
    icon: string;
    color: string;
    amount: number;
}

export interface Recurring {
    id: number;
    name: string;
    icon: string;
    amount: number;
    dueDate: string;
}


export interface CategoryItem {
    name: string;
    icon: string;
    color: string;
    amount: number;
    percentage: number;
}

export interface RecurringItem {
    name: string;
    icon: string;
    amount: number;
    dueDate: string;
}

export interface CashFlowData {
    month: string;
    income: number;
    expense: number;
    net: number;
}