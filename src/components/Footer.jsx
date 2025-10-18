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

export default function Footer() {
    const theme = useTheme();

    const socialIcons = [
        { icon: <Facebook />, link: "#" },
        { icon: <Instagram />, link: "#" },
        { icon: <LinkedIn />, link: "#" },
        { icon: <Twitter />, link: "#" },
    ];

    const quickLinks = ["About", "Become Instructor", "Contact", "Career"];
    const categories = [
        "Development",
        "Finance & Accounting",
        "Design",
        "Business",
    ];
    const support = ["Help Center", "FAQs", "Terms & Condition", "Privacy Policy"];

    return (
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

                    {/* Categories */}
                    <
                        // @ts-ignore
                        Grid item xs={12} sm={6} md={2.4}>
                        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                            TOP 4 CATEGORY
                        </Typography>
                        {categories.map((text, i) => (
                            <Link
                                key={i}
                                href="#"
                                underline="none"
                                sx={{
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
                                {text}
                            </Link>
                        ))}
                    </Grid>

                    {/* Quick Links */}
                    <
                        // @ts-ignore
                        Grid item xs={12} sm={6} md={2.4}>
                        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                            QUICK LINKS
                        </Typography>
                        {quickLinks.map((text, i) => (
                            <Link
                                key={i}
                                href="#"
                                underline="none"
                                sx={{
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
                                {text}
                            </Link>
                        ))}
                    </Grid>

                    {/* Support + Download */}
                    <
                        // @ts-ignore
                        Grid item xs={12} sm={6} md={2.4}>
                        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                            SUPPORT
                        </Typography>
                        {support.map((text, i) => (
                            <Link
                                key={i}
                                href="#"
                                underline="none"
                                sx={{
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
                                {text}
                            </Link>
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
    );
}
