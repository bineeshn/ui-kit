import { createTheme } from "@mui/material/styles";
import { CustomTheme } from "./themeTypes";
import { neutral, brand, primary } from "../variables/colors";

export const colors = {
  neutral: { ...neutral },
  brand: { ...brand },
  background: {
    primary: {
      default: brand.dark,
      hover: brand.main,
      disabled: neutral[800],
    },
    secondary: {
      default: neutral[800],
      hover: neutral[700],
      disabled: "transparent",
    },
    tertiary: {
      default: "transparent",
      hover: neutral[700],
      disabled: "transparent",
    },
    destructive: {
      default: primary.red[700],
      hover: primary.red[600],
      disabled: primary.red[900],
    },
  },
  text: {
    primary: {
      default: neutral.white,
      disabled: neutral[500],
    },
    secondary: {
      default: neutral.white,
      disabled: neutral[500],
    },
    tertiary: {
      default: neutral.white,
      disabled: neutral[500],
    },
    destructive: {
      default: neutral.white,
      disabled: neutral[500],
    },
  },
  border: {
    primary: {
      default: brand.main,
      hover: neutral[100],
      disabled: neutral[600],
    },
    secondary: {
      default: neutral[500],
      hover: neutral[100],
      disabled: neutral[600],
    },
    destructive: {
      default: primary.red[600],
      hover: neutral[100],
      disabled: neutral[600],
    },
  },
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
    surface: {
      backdrop: neutral[1000],
      focus: "#162A29",
      focusHover: "#1A423F",
      hover: neutral[700],
      midground: neutral[900],
      fore: neutral[800],
      bulkActionBar: "#1A3C39"
    },
    icon: {
      primary: neutral.white,
      secondary: neutral[500],
      disabled: neutral[700],
    },
    badgeBorder: {
        success: '#308D55',
        error: '#890606',
        caution: '#FF8B00',
        warning: '#FFE843',
        info: '#1F60C0',
        default: '#545859',
    },
    badgeBg: {
        success: '#308d554d',
        error: '#89060680',
        caution: '#FF8B0080',
        warning: '#ffe8434d',
        info: '#1F60C033',
        default: '#66666680',
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
  colors,
} as CustomTheme);

export default theme;
