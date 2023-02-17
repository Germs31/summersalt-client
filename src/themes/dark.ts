import { createTheme } from "@mui/material/styles";


export const darkAppTheme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#001524",
    },
    secondary: {
      main: "#FFECD1",
    },
  },
});