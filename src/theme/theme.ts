import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0a192f", // Azul escuro como principal
      light: "#172a45",
      dark: "#020c1b",
    },
    secondary: {
      main: "#64ffda", // Verde água
      light: "#9fffea",
      dark: "#14b89a",
    },
    background: {
      default: "#0a192f", // Azul escuro
      paper: "#112240",
    },
    text: {
      primary: "#e6f1ff", // Branco com leve tom azulado
      secondary: "#8892b0", // Cinza azulado
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: "3rem",
      letterSpacing: "-0.03em",
      "@media (min-width:600px)": {
        fontSize: "4.5rem",
      },
    },
    h2: {
      fontWeight: 300,
      fontSize: "2.25rem",
      letterSpacing: "-0.02em",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontWeight: 300,
      fontSize: "1.75rem",
      letterSpacing: "-0.02em",
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
    },
    h4: {
      fontWeight: 300,
      fontSize: "1.5rem",
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 300,
      fontSize: "1.25rem",
      letterSpacing: "-0.01em",
    },
    h6: {
      fontWeight: 300,
      fontSize: "1rem",
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 400,
          borderRadius: 4,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderWidth: "1px",
          "&:hover": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
          "&:hover": {
            boxShadow: "0 20px 30px -15px rgba(2, 12, 27, 0.7)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#0a192f",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#8892b0",
            borderRadius: "4px",
          },
        },
      },
    },
  },
});

export default theme;
