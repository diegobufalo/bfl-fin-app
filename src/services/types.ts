export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}


export interface TransactionDTO {
    id: number;
    description: string;
    value: number;
    date: string; // ISO ou DD/MM/YYYY
    categoryId: number;
    accountId: number;
    type: 'income' | 'expense';
    createdAt: string;
}

export interface CategoryDTO {
    id: number;
    name: string;
    color: string;
    icon?: string;
}

export interface AccountDTO {
    id: number;
    name: string;
    type: 'checking' | 'credit_card' | 'investment';
    balance: number;
    // ...
}