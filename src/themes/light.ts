import { createTheme } from "@mui/material/styles";


export const lightAppTheme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#FFECD1",
        },
        secondary: {
            main: "#001524",
        },
    },
});