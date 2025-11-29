// MUI Components
import {
    Box,
    Container,
    Typography,
    IconButton,
    Link,
    Grid,
    useTheme,
    Stack,
} from "@mui/material";

// MUI Icons
import {
    Facebook,
    Instagram,
    LinkedIn,
    Twitter,
    Apple,
    Android,
} from "@mui/icons-material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const theme = useTheme();

    const navigate = useNavigate();

    const socialIcons = [
        { icon: <Facebook />, link: "https://www.facebook.com/etutor.co" },
        { icon: <Instagram />, link: "https://www.instagram.com/etutor_world_academy/?hl=en" },
        { icon: <LinkedIn />, link: "https://www.linkedin.com/company/digitalmarketer-0123sreekutty/" },
        { icon: <Twitter />, link: "https://x.com/eTutorco" },
    ];

    const quickLinks = [
        { title: "Home", link: "/" },
        { title: "Courses", link: "/courses" },
    ];

    const support = [
        { title: "Contact & FAQs", link: "/help" },
        { title: "About", link: "/about" },
    ];

    const account = [
        { title: "Sign in", link: "/auth" },
        { title: "Sign up", link: "/auth/signup" },
    ];

    return (
        <footer>

            <Box
                sx={{
                    backgroundColor: "#121417",
                    color: "#fff",
                    py: 6,
                    mt: 6,
                }}
            >
                <Container>
                    <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
                        {/* Logo + Description */}
                        <
                            // @ts-ignore
                            Grid item xs={12} sm={6} md={2.4}>
                            <Stack direction="row" alignItems="center" gap={1.5} mb={2}>
                                <SchoolOutlinedIcon
                                    sx={{ color: theme.palette.primary.main, fontSize: 28 }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        color: theme.palette.primary.main,
                                    }}
                                >
                                    E-tutor
                                </Typography>
                            </Stack>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "gray",
                                    mb: 3,
                                    lineHeight: 1.6,
                                    wordBreak: "break-word",
                                    maxWidth: "240px",
                                }}
                            >
                                Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                                Donec mattis odio at.
                            </Typography>

                            <Stack direction="row" gap={1} flexWrap="wrap">
                                {socialIcons.map((item, index) => (
                                    <IconButton
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        sx={{
                                            backgroundColor: "#202327ff",
                                            color: "white",
                                            borderRadius: "8px",
                                            width: 40,
                                            height: 40,
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.main,
                                                boxShadow: `0 0 10px ${theme.palette.primary.main}88`,
                                            },
                                        }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Grid>


                        {/* Quick Links */}
                        <
                            // @ts-ignore
                            Grid item xs={12} sm={6} md={2.4}>
                            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                                QUICK LINKS
                            </Typography>
                            {quickLinks.map((item, i) => (
                                <Box
                                    key={i}
                                    onClick={() => {
                                        navigate(item.link);
                                    }}
                                    sx={{
                                        cursor: "pointer",
                                        display: "block",
                                        mb: 1,
                                        color: "gray",
                                        position: "relative",
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                            "&::after": {
                                                width: "100%",
                                            },
                                        },
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            left: 0,
                                            bottom: 0,
                                            height: "2px",
                                            width: "0%",
                                            backgroundColor: theme.palette.primary.main,
                                            transition: "width 0.3s ease",
                                        },
                                    }}
                                >
                                    {item.title}
                                </Box>
                            ))}
                        </Grid>

                        {/* account */}
                        <
                            // @ts-ignore
                            Grid item xs={12} sm={6} md={2.4}>
                            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                                Account
                            </Typography>
                            {account.map((item, i) => (
                                <Box
                                    key={i}
                                    onClick={() => {
                                        navigate(item.link);
                                    }}
                                    sx={{
                                        display: "block",
                                        mb: 1,
                                        cursor: "pointer",
                                        color: "gray",
                                        position: "relative",
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                            "&::after": {
                                                width: "100%",
                                            },
                                        },
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            left: 0,
                                            bottom: 0,
                                            height: "2px",
                                            width: "0%",
                                            backgroundColor: theme.palette.primary.main,
                                            transition: "width 0.3s ease",
                                        },
                                    }}
                                >
                                    {item.title}
                                </Box>
                            ))}
                        </Grid>


                        {/* Support + Download */}
                        <
                            // @ts-ignore
                            Grid item xs={12} sm={6} md={2.4}>
                            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                                About & Contact
                            </Typography>
                            {support.map((item, i) => (
                                <Box
                                    key={i}
                                    onClick={() => {
                                        navigate(item.link);
                                    }}
                                    sx={{
                                        display: "block",
                                        mb: 1,
                                        cursor: "pointer",
                                        color: "gray",
                                        position: "relative",
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                            "&::after": {
                                                width: "100%",
                                            },
                                        },
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            left: 0,
                                            bottom: 0,
                                            height: "2px",
                                            width: "0%",
                                            backgroundColor: theme.palette.primary.main,
                                            transition: "width 0.3s ease",
                                        },
                                    }}
                                >
                                    {item.title}
                                </Box>
                            ))}
                        </Grid>
                        <
                            // @ts-ignore
                            Grid item xs={12} sm={6} md={2.4}>
                            {/* Download App */}
                            <Typography
                                variant="subtitle1"
                                sx={{ mt: 3, mb: 1.5, fontWeight: 600 }}
                            >
                                DOWNLOAD OUR APP
                            </Typography>
                            <Stack
                                direction={{ xs: "column", sm: "column", md: "column" }}
                                gap={1.2}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        backgroundColor: "#1e2126",
                                        borderRadius: "8px",
                                        px: 1.5,
                                        py: 0.8,
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: `0 0 10px ${theme.palette.primary.main}55`,
                                        },
                                    }}
                                >
                                    <Apple sx={{ color: "#fff" }} />
                                    <Typography sx={{ fontSize: "0.8rem", color: "#fff" }}>
                                        App Store
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        backgroundColor: "#1e2126",
                                        borderRadius: "8px",
                                        px: 1.5,
                                        py: 0.8,
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: `0 0 10px ${theme.palette.primary.main}55`,
                                        },
                                    }}
                                >
                                    <Android sx={{ color: "#fff" }} />
                                    <Typography sx={{ fontSize: "0.8rem", color: "#fff" }}>
                                        Play Store
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* Copyright */}
                    <Box
                        sx={{
                            textAlign: "center",
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            mt: 5,
                            pt: 3,
                            color: "gray",
                            fontSize: "0.9rem",
                        }}
                    >
                        © 2025 - E-tutor. Designed by{" "}
                        <Box component="span" sx={{ color: "#fff", fontWeight: 600 }}>
                            Templatecookie
                        </Box>
                        . All rights reserved.
                    </Box>
                </Container>
            </Box>
        </footer>

    );
}
