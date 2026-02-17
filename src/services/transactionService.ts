import api from './api';
import type { ApiResponse, TransactionDTO } from './types';

export const transactionService = {
    // Listar todas
    getAll: async (params?: { startDate?: string; endDate?: string; accountId?: number }) => {
        const response = await api.get<ApiResponse<TransactionDTO[]>>('/transactions', { params });
        return response.data;
    },

    // Criar nova
    create: async (data: Omit<TransactionDTO, 'id' | 'createdAt'>) => {
        const response = await api.post<ApiResponse<TransactionDTO>>('/transactions', data);
        return response.data;
    },

    // Atualizar
    update: async (id: number, data: Partial<TransactionDTO>) => {
        const response = await api.put<ApiResponse<TransactionDTO>>(`/transactions/${id}`, data);
        return response.data;
    },

    // Deletar
    delete: async (id: number) => {
        const response = await api.delete<ApiResponse<null>>(`/transactions/${id}`);
        return response.data;
    },

    // Exemplo: buscar por mês
    getByMonth: async (year: number, month: number) => {
        return api.get<ApiResponse<TransactionDTO[]>>(
            `/transactions/month/${year}/${month}`
        ).then(res => res.data);
    },
};