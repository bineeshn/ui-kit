import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    colors: {
        primary: "#125b56",
        secondary: "#192a30",
        tertiary: "transparent",
        destructive: "#890606",
        contrastText: "#fff",
        disabledText: "#7d7f80",
        disabledBackground: "#192a30",
        disabledBorder: "#545859",
        hoverSecondary: "#333b3e",
        hoverDestructive: "#aa0b0b",
        hoverPrimary: "#02897f",
    },
    sizes: {
        small: {
            borderRadius: "0.25rem",
            fontSize: "0.875rem",
            gap: "0.25rem",
            height: "24px",
            lineHeight: "1rem",
            padding: "6px 0.5rem",
        },
        default: {
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            gap: "0.5rem",
            height: "2rem",
            lineHeight: "1rem",
            padding: "0.5rem",
        },
        large: {
            borderRadius: "0.25rem",
            fontSize: "1rem",
            gap: "0.5rem",
            height: "2.5rem",
            lineHeight: "1.25rem",
            padding: "12px 1rem",
        },
    },
};

export default theme;
