// Hooks
import { useState } from "react";

// MUI Components
import {
    Box,
    Drawer,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Checkbox,
    FormControlLabel,
    Divider,
    Slider,
    TextField,
    Stack,
    Button,
} from "@mui/material";

import { ExpandMore, FilterList, Star } from "@mui/icons-material";

export default function FilterSidebar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const primaryColor = "#FE7134";

    // categories and sub categories
    const categories = {
        Development: [
            "Web Development",
            "Data Science",
            "Mobile Development",
            "Software Testing",
            "Software Engineering",
            "Software Development Tools",
            "No-Code Development",
        ],
        Business: [
            "Entrepreneurship",
            "Communication",
            "Management",
            "Sales",
            "Business Strategy",
        ],
        "Finance & Accounting": [
            "Accounting",
            "Investing",
            "Cryptocurrency",
            "Finance Fundamentals",
        ],
        "IT & Software": [
            "Network & Security",
            "Hardware",
            "Operating Systems",
            "Cloud Computing",
        ],
        Design: [
            "Graphic Design",
            "UX/UI Design",
            "3D & Animation",
            "Design Tools",
        ],
        Marketing: [
            "Digital Marketing",
            "SEO",
            "Content Marketing",
            "Branding",
        ],
        "Photography & Video": [
            "Photography Basics",
            "Video Editing",
            "Filmmaking",
            "Lighting & Sound",
        ],
    };

    // ratings
    const ratings = ["5 Star & up", "4 Star & up", "3 Star & up", "2 Star & up", "1 Star & up"];

    // Drawer handler
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // Sidebar UI
    const sidebarContent = (
        <Box sx={{ width: { xs: "100%", md: 300 }, p: 0 }}>
            {/* CATEGORY */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography sx={{ fontWeight: 600 }}>CATEGORY</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {Object.entries(categories).map(([category, subs], i) => (
                        <Accordion key={i} disableGutters>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography sx={{ fontWeight: 500 }}>{category}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ pl: 2 }}>
                                {subs.map((sub, j) => (
                                    <Stack
                                        key={j}
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <FormControlLabel
                                            control={<Checkbox size="small" />}
                                            label={
                                                <Typography variant="body2" color="text.secondary">
                                                    {sub}
                                                </Typography>
                                            }
                                        />
                                        <Typography variant="caption" color="text.secondary">
                                            {Math.floor(Math.random() * 1500) + 30}
                                        </Typography>
                                    </Stack>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 2 }} />

            {/* RATING */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography sx={{ fontWeight: 600 }}>RATING</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {ratings.map((rate, i) => (
                        <Stack
                            key={i}
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        icon={<Star sx={{ color: "#ccc" }} />}
                                        checkedIcon={<Star sx={{ color: primaryColor }} />}
                                    />
                                }
                                label={
                                    <Typography variant="body2" color="text.secondary">
                                        {rate}
                                    </Typography>
                                }
                            />
                            <Typography variant="caption" color="text.secondary">
                                {Math.floor(Math.random() * 1500) + 100}
                            </Typography>
                        </Stack>
                    ))}
                </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 2 }} />

            {/* PRICE */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography sx={{ fontWeight: 600 }}>PRICE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ px: 1 }}>
                        <Slider
                            value={[20, 80]}
                            onChange={() => { }}
                            valueLabelDisplay="auto"
                            sx={{
                                color: primaryColor,
                                "& .MuiSlider-thumb": {
                                    backgroundColor: primaryColor,
                                },
                            }}
                        />
                        <Stack direction="row" spacing={1} mt={1}>
                            <TextField size="small" placeholder="$ min" fullWidth />
                            <TextField size="small" placeholder="$ max" fullWidth />
                        </Stack>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );

    return (
        <>
            {/* Responsive */}
            <Box sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
                <Button
                    variant="contained"
                    startIcon={<FilterList />}
                    onClick={toggleDrawer(true)}
                    sx={{
                        backgroundColor: primaryColor,
                        textTransform: "none",
                        color: "white",
                        "&:hover": { backgroundColor: primaryColor },
                    }}
                >
                    Filter
                </Button>
            </Box>

            {/* Filter Drawer In Mobile*/}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: { width: "80%", maxWidth: 320 } }}
            >
                {sidebarContent}
            </Drawer>

            {/* Constant Sidebar in large screens */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>{sidebarContent}</Box>
        </>
    );
}
