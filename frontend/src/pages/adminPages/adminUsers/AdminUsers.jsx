import React from "react";
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Avatar,
    Button,
    TextField,
    MenuItem,
    Stack
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const users = [
    { name: "Alice Johnson", role: "Student", email: "alice@example.com", joined: "2024-01-15", courses: 3, color: "#009688" },
    { name: "Bob Smith", role: "Instructor", email: "bob@example.com", joined: "2024-01-10", courses: 2, color: "#7C4DFF" },
    { name: "Carol White", role: "Student", email: "carol@example.com", joined: "2024-02-01", courses: 5, color: "#00BCD4" },
    { name: "David Brown", role: "Instructor", email: "david@example.com", joined: "2024-01-20", courses: 4, color: "#673AB7" },
    { name: "Emma Davis", role: "Student", email: "emma@example.com", joined: "2024-02-14", courses: 2, color: "#0097A7" },
    { name: "Frank Miller", role: "Instructor", email: "frank@example.com", joined: "2024-01-05", courses: 3, color: "#651FFF" },
    { name: "Carol White", role: "Student", email: "carol@example.com", joined: "2024-02-01", courses: 5, color: "#00BCD4" },
    { name: "Frank Miller", role: "Instructor", email: "frank@example.com", joined: "2024-01-05", courses: 3, color: "#651FFF" },
];

export default function AdminUsers() {
    return (
        <Box sx={{ p: 3 }}>

            {/* Search + Role Filter */}
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <TextField
                    fullWidth
                    placeholder="Search by name or email..."
                    size="medium"
                />
                <TextField select size="medium" defaultValue="">
                    <MenuItem value="">All Roles</MenuItem>
                    <MenuItem value="Student">Student</MenuItem>
                    <MenuItem value="Instructor">Instructor</MenuItem>
                </TextField>
            </Stack>

            {/* Cards Grid */}
            <Grid container spacing={3} justifyContent={"center"}>
                {users.map((user, index) => (
                    <
                        // @ts-ignore
                        Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                        <Card
                            sx={{
                                borderRadius: "12px",
                                padding: 2,
                                minHeight: 230,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                boxShadow: "0 1px 6px rgba(0,0,0,0.1)"
                            }}
                        >
                            <CardContent>

                                {/* Avatar + name */}
                                <Stack direction="row" spacing={2} mb={2}>
                                    <Avatar
                                        sx={{
                                            bgcolor: user.color,
                                            width: 56,
                                            height: 56,
                                            fontSize: 22
                                        }}
                                    >
                                        {user.name[0]}
                                    </Avatar>

                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            {user.name}
                                        </Typography>
                                        <Typography sx={{ color: "text.secondary" }}>
                                            {user.role}
                                        </Typography>
                                    </Box>
                                </Stack>

                                {/* Email */}
                                <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
                                    <EmailIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                                    <Typography variant="body2">{user.email}</Typography>
                                </Stack>

                                {/* Joined */}
                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                    Joined: {user.joined}
                                </Typography>

                                {/* Courses */}
                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                    Courses: {user.courses}
                                </Typography>
                            </CardContent>

                            {/* Button */}
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    color: "white",
                                    mt: 2,
                                    bgcolor: "#ff6b2c",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    "&:hover": { bgcolor: "#e85d24" }
                                }}
                            >
                                View Profile
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
