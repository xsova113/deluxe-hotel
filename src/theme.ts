export const tokens = {
  primary: {
    100: "#d6d6d6",
    200: "#adadad",
    300: "#858585",
    400: "#5c5c5c",
    500: "#333333",
    600: "#292929",
    700: "#1f1f1f",
    800: "#141414",
    900: "#0a0a0a",
  },
  secondary: {
    100: "#d2e7fa",
    200: "#a5cff5",
    300: "#78b8ef",
    400: "#4ba0ea",
    500: "#1e88e5",
    600: "#186db7",
    700: "#125289",
    800: "#0c365c",
    900: "#061b2e",
  },
};

export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[200],
      dark: tokens.primary[900],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[800],
      light: tokens.secondary[700],
      dark: tokens.secondary[900],
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontSize: 14,
    },
    h5: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontSize: 12,
    },
    h6: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontSize: 10,
    },
  },
};
