import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    colors: {
        primary: '#6366F1',
        purple: '#A855F7',
        green: '#22C55E',
        red: '#EF4444',
        orange: '#F97316',
        bg: '#F8FAFC',
        sidebar: '#FFFFFF',
        card: '#FFFFFF',
        text: '#1E2937',
        textLight: '#64748B',
        border: '#E2E8F0',
    },
} as const;

export const darkTheme: DefaultTheme = {
    colors: {
        primary: '#6366F1',
        purple: '#A855F7',
        green: '#22C55E',
        red: '#EF4444',
        orange: '#F97316',
        bg: '#0F172A',
        sidebar: '#1E2937',
        card: '#1E2937',
        text: '#F1F5F9',
        textLight: '#94A3B8',
        border: '#334155',
    },
} as const;
