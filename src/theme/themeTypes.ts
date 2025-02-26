import { neutral, brand, primary } from "./theme"

export interface CustomTheme {
    colors: {
        neutral: typeof neutral;
        brand: typeof brand;
        defaults: {
            status: {
                alert: string;
                warning: string;
                success: string;
                info: string;
                offline: string;
                unknown: string;
                offlineBackdrop: string;
            };
            font: {
                primary: string;
                secondary: string;
                alert: string;
                disabled: string;
                dark: string;
                focus: string;
                link: string;
            };
            border: {
                filled: string;
                hover: string;
                error: string;
                focus: string;
                default: string;
                disabled: string;
            };
            surfaces: {
                backdrop: string;
                focus: string;
                hover: string;
                midground: string;
                fore: string;
            };
            icon: {
                primary: string;
                secondary: string;
                disabled: string;
            };
        };
        primary: typeof primary;
        chartColors: {
            core: {
                blue: string;
                cyan: string;
                teal: string;
                green: string;
                lime: string;
                yellow: string;
                orange: string;
                red: string;
                magenta: string;
                purple: string;
            };
            light: {
                blue: string;
                cyan: string;
                teal: string;
                green: string;
                lime: string;
                yellow: string;
                orange: string;
                red: string;
                magenta: string;
                purple: string;
            };
            dark: {
                blue: string;
                cyan: string;
                teal: string;
                green: string;
                lime: string;
                yellow: string;
                orange: string;
                red: string;
                magenta: string;
                purple: string;
            };
        };
    };
}

declare module "@mui/material/styles" {
    interface Theme extends CustomTheme { }
    interface ThemeOptions extends Partial<CustomTheme> { }
    interface Palette {
        tertiary: Palette["primary"];
        destructive: Palette["primary"];
    }

    interface PaletteOptions {
        tertiary?: PaletteOptions["primary"];
        destructive?: PaletteOptions["primary"];
    }
}

