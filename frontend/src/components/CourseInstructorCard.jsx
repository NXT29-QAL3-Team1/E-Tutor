// MUI
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Stack,
    Divider,
    Box,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert"; // 3 dots
import StarIcon from '@mui/icons-material/Star';

// React Router Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CourseCard({
    badge = "DEVELOPMENTS",
    price = "$9",
    title = "Selenium WebDriver with Java - Basics to Advanced + Frameworks",
    rating = 4.4,
    students = "154,817",
    image = "https://images.unsplash.com/photo-1731432245325-d820144afe4a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
    id = 1,
}) {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <Card
            sx={{
                width: { xs: 220, sm: 220, md: 230 },
                borderRadius: 3,
                boxShadow: 3,
                overflow: 'hidden',
                cursor: "pointer",
                padding: 0,
            }}
        >
            <Box sx={{ position: "relative" }}>

                {/* 🔥 الـ div الفاضي اتحول لـ menu button بس */}
                <IconButton
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 10,
                        bgcolor: "rgba(255,255,255,0.8)",
                        width: 28,
                        height: 28,
                    }}
                    onClick={(e) => {
                        e.stopPropagation(); // عشان مايفتحش الكورس
                        setAnchorEl(e.currentTarget);
                    }}
                >
                    <MoreVertIcon sx={{ fontSize: 20 }} />
                </IconButton>

                {/* MENU */}
                <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                    <MenuItem>View Details</MenuItem>
                    <MenuItem>Edit Course</MenuItem>
                    <MenuItem sx={{ color: "red" }}>Delete Course</MenuItem>
                </Menu>

                <CardMedia
                    component="img"
                    height="160"
                    image={image}
                    alt={title}
                    sx={{ objectFit: 'cover' }}
                    onClick={() => navigate(`/courses/${id}`)}
                />
            </Box>

            <CardContent sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Chip
                        label={badge}
                        sx={{
                            bgcolor: '#EDE7FF',
                            color: '#5B2EFC',
                            fontWeight: 700,
                            height: 24,
                            fontSize: "12px",
                            borderRadius: 1,
                        }}
                    />

                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FF5A1F' }}>
                        {price}
                    </Typography>
                </Stack>

                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                    Selenium WebDriver with Java
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Basics to Advanced + Frameworks
                </Typography>
                <Divider />
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} mt={2}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <StarIcon sx={{ fontSize: 18, color: '#fbc02d' }} />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{rating}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" color="text.secondary">
                            {students} students
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}
