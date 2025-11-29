// MUI Functions
import { createTheme } from "@mui/material/styles";

// General Theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#FE7134",
            light: "#FFEEE8",
        }
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        button: {
            fontFamily: "'Roboto', sans-serif",
            textTransform: "none",
        },
    },
})

export default theme;