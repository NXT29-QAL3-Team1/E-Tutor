// React Router
import { useNavigate, useLocation } from 'react-router-dom';

// MUI components
import { Stack } from '@mui/material';

// CSS
import './navBtns.css';

import { useUser } from "../../../../contexts/UserProvider";
import { useEffect } from 'react';

export default function NavBtns() {
    // @ts-ignore
    const { user } = useUser();

    const navArr = [
        { title: "Home", path: "/" },
        { title: "Courses", path: "/courses" },
        { title: "About", path: "/about" },
        { title: "Help", path: "/help" },
        {
            title: "Dashboard", path: user?.role === "student" ?
                "/studentDashboard" : user?.role === "instructor" ?
                    "/instructorDashboard" : "/adminDashboard"
        },
    ];

    console.log("from nav " +user);
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
