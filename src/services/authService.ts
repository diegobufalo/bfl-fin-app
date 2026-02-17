import api from './api';
import type { ApiResponse } from './types';

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    access_token: string;
    user: { id: number; name: string; email: string };
}


export const authService = {
    login: async (credentials: LoginPayload) => {
        const response = await api.post<ApiResponse<LoginResponse>>('/auth/login', credentials);
        if (response.data.success && response.data.data) {
            localStorage.setItem('access_token', response.data.data.access_token);
        }
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('access_token');
    },

    refresh: async () => {
    },
};
