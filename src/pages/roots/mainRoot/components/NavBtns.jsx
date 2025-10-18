// React Router
import { useNavigate, useLocation } from 'react-router-dom';

// MUI components
import { Stack } from '@mui/material';

// CSS
import './navBtns.css';

import navArr from './navArr';

export default function NavBtns() {

    const location = useLocation();

    const navigate = useNavigate();

    const navArrUI = navArr.map((item, idx) => {

        const isActive = item.path === "/"
            ? location.pathname === "/"
                ? "active"
                : ""
            : location.pathname.startsWith(item.path)
                ? "active"
                : ""

        return (
            <button key={idx} onClick={() => {
                navigate(item.path);
            }}
                className={`navBtn ${isActive}`}
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                    padding: "11px",
                }}
            >{item.title}</button>
        )
    })

    return (
        <Stack sx={{
            flexDirection: "row",
            backgroundColor: "#1D2026",
            display: { xs: "none", sm: "flex" },
            padding: "0 24px",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: "999",
        }}>
            {navArrUI}
        </Stack>
    )
}
