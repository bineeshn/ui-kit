import { brand, neutral, primary } from "../variables/colors";

type ColorVariants = {
  default: string;
  hover?: string;
  disabled?: string;
};

type TextVariants = {
  default: string;
  disabled?: string;
};

type BorderVariants = {
  default: string;
  hover?: string;
  disabled?: string;
};

export interface ColorTheme {
  neutral: typeof neutral;
  brand: typeof brand;
  background: {
    primary: ColorVariants;
    secondary: ColorVariants;
    tertiary: ColorVariants;
    destructive: ColorVariants;
  };
  text: {
    primary: TextVariants;
    secondary: TextVariants;
    tertiary: TextVariants;
    destructive: TextVariants;
  };
  border: {
    primary: BorderVariants;
    secondary: BorderVariants;
    destructive: BorderVariants;
  };
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
    surface: {
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
}

export interface CustomTheme {
  colors: ColorTheme;
}

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends Partial<CustomTheme> {}
  interface Palette {
    tertiary: Palette["primary"];
    destructive: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    destructive?: PaletteOptions["primary"];
  }
}
