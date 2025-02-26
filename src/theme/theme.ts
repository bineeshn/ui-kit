import { createTheme } from "@mui/material/styles";
import { CustomTheme } from "./themeTypes";

export const neutral = {
    50: "#f5f5f0",
    100: "#c9caca",
    400: "#acadad",
    500: "#7d7f80",
    600: "#545859",
    700: "#333b3e",
    800: "#192a30",
    900: "#0b1d23",
    1000: "#01141a",
    white: "#ffffff",
    black: "#000000",
};

export const brand = {
    main: "#02897f",
    dark: "#125b56",
    light: "#ff00ff",
    medium: "#ff00ff",
};

export const primary = {
    green: {
        300: "#78b590",
        700: "#1f7a43",
        800: "#126432",
        900: "#0e342b",
        500: "#308d55",
    },
    blue: {
        200: "#a1b7d9",
        600: "#0c3a7d",
        800: "#04285d",
        900: "#122645",
        500: "#1f60c0",
    },
    red: {
        100: "#ffa8a8",
        200: "#ff8080",
        300: "#ff5c5c",
        600: "#aa0b0b",
        700: "#890606",
        900: "#361419",
        500: "#da0d0d",
    },
    yellow: {
        200: "#e2d383",
        400: "#ceb531",
        600: "#847215",
        700: "#70600a",
        800: "#494903",
        900: "#2f321d",
        500: "#a49027",
    },
};


const theme = createTheme({
    palette: {
        primary: {
            main: brand.main,
            dark: brand.dark,
            light: brand.light,
        },
        secondary: {
            main: brand.medium,
        },
        tertiary: {
            main: brand.main,
        },
        destructive: {
            main: primary.red[700],
        },
    },
    colors: {
        neutral: { ...neutral },
        brand: { ...brand },
        defaults: {
            status: {
                alert: primary.red[500],
                warning: primary.yellow[500],
                success: primary.green[500],
                info: primary.blue[500],
                offline: neutral[500],
                unknown: primary.red[700],
                offlineBackdrop: neutral[700],
            },
            font: {
                primary: neutral.white,
                secondary: neutral[400],
                alert: primary.red[200],
                disabled: neutral[500],
                dark: neutral[1000],
                focus: brand.main,
                link: primary.blue[200],
            },
            border: {
                filled: neutral[100],
                hover: neutral[100],
                error: primary.red[500],
                focus: brand.main,
                default: neutral[500],
                disabled: neutral[600],
            },
            surfaces: {
                backdrop: neutral[1000],
                focus: brand.dark,
                hover: neutral[700],
                midground: neutral[900],
                fore: neutral[800],
            },
            icon: {
                primary: neutral.white,
                secondary: neutral[500],
                disabled: neutral[700],
            },
        },
        primary: { ...primary },
        chartColors: {
            core: {
                blue: "#01198f",
                cyan: "#00bcf2",
                teal: "#00b294",
                green: "#019e48",
                lime: "#7fba02",
                yellow: "#fff200",
                orange: "#ff8b00",
                red: "#e81023",
                magenta: "#ec008c",
                purple: "#67217a",
            },
            light: {
                blue: "#4668c4",
                cyan: "#6ec2e9",
                teal: "#00d8cd",
                green: "#57d456",
                lime: "#bcd80b",
                yellow: "#fffc9e",
                orange: "#feb902",
                red: "#dd5900",
                magenta: "#f471d0",
                purple: "#9b4f97",
            },
            dark: {
                blue: "#002050",
                cyan: "#0072c6",
                teal: "#008272",
                green: "#007234",
                lime: "#008a00",
                yellow: "#fcd116",
                orange: "#dc3b00",
                red: "#ba121a",
                magenta: "#b4009e",
                purple: "#442358",
            },
        },
    },
} as CustomTheme);

export default theme;
