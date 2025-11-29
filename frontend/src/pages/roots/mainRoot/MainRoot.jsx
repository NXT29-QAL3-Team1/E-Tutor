// React Router
import { Outlet } from "react-router-dom";

// Components
import NavBtns from "./components/NavBtns";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "../../../components/Footer";

// MUI components
import { Box } from "@mui/material";
import ScrollProgressBar from "../../../components/ScrollProgressBar";

export default function MainRoot() {
    return (
        <>
            <NavBtns />
            <DrawerAppBar />
            <ScrollProgressBar />
            <Box sx={{ marginTop: { xs: "56px", sm: "165px", md: "115px" } }}>
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}
