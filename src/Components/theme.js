import { createTheme } from "@mui/material";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: colors.purple[900],
      main: colors.purple[500],
      light: colors.purple[100],
      bg: colors.purple[50],
    },
    secondary: {
      dark: colors.pink[900],
      main: colors.pink[500],
      light: colors.pink[100],
      bg: colors.pink[50],
    },
  },
  typography: {
    fontFamily: "Prosto One, cursive",
  },
});

export default theme;
