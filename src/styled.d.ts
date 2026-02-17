import 'styled-components';
import type { DefaultTheme as DefaultStyledTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends DefaultStyledTheme {
        colors: {
            primary: string;
            purple: string;
            green: string;
            red: string;
            orange: string;
            bg: string;
            sidebar: string;
            card: string;
            text: string;
            textLight: string;
            border: string;
        }
    }
}