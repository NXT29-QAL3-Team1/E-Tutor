// Hooks
import { useState } from "react";

// MUI Components
import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";

// MUI Icons
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

export default function Slider() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const [active, setActive] = useState(2);
    const pages = [1, 2, 3, 4, 5];

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: isSmall ? 1 : 2,
                py: isSmall ? 1.5 : 3,
            }}
        >
            {/* Prev Button */}
            <IconButton
                sx={{
                    width: isSmall ? 32 : 40,
                    height: isSmall ? 32 : 40,
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.light,
                        opacity: 0.8,
                    },
                }}
            >
                <ArrowBackIosNew sx={{ fontSize: isSmall ? 14 : 16 }} />
            </IconButton>

            {/* Sliders */}
            {pages.map((page) => (
                <Box
                    key={page}
                    onClick={() => setActive(page)}
                    sx={{
                        width: isSmall ? 32 : 40,
                        height: isSmall ? 32 : 40,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        backgroundColor:
                            active === page
                                ? theme.palette.primary.main
                                : theme.palette.primary.light,
                        color: active === page ? "#fff" : "#000",
                        fontWeight: 600,
                        "&:hover": {
                            backgroundColor:
                                active === page
                                    ? theme.palette.primary.main
                                    : theme.palette.primary.light,
                            opacity: 0.8,
                        },
                        transition: "all 0.3s ease",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ fontSize: isSmall ? "0.8rem" : "1rem" }}
                    >
                        {page.toString().padStart(2, "0")}
                    </Typography>
                </Box>
            ))}

            {/* 'Next' Button */}
            <IconButton
                sx={{
                    width: isSmall ? 32 : 40,
                    height: isSmall ? 32 : 40,
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.light,
                        opacity: 0.8,
                    },
                }}
            >
                <ArrowForwardIos sx={{ fontSize: isSmall ? 14 : 16 }} />
            </IconButton>
        </Box>
    );
}
