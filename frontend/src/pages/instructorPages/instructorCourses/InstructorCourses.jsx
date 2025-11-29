import { useState } from "react";
import {
    Grid,
    Box,
    Menu,
    MenuItem,
    TextField,
    FormControl,
    Select,
    InputLabel,
} from "@mui/material";

import CourseInstructorCard from "../../../components/CourseInstructorCard";
import Pagination from "../../../components/Pagination";

export default function CourseSection() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const courses = [
        {
            title: "Premiere Pro CC ",
            category: "DEVELOPMENTS",
            image: "/mnt/data/Untitled.png",
            rating: 4.9,
            students: 982941,
            price: 24.0,
        },
        {
            title: "Learn Python Programming Masterclass",
            category: "DEVELOPMENTS",
            image: "/mnt/data/Untitled.png",
            rating: 4.0,
            students: 511123,
            price: 49,
        },
        {
            title: "Data Structures & Algorithms Essentials (2021)",
            category: "DEVELOPMENTS",
            image: "/mnt/data/Untitled.png",
            rating: 5.0,
            students: 197637,
            price: 23,
            oldPrice: 35.6,
        },
        {
            title: "Learning A–Z™: Hands-On Data Science",
            category: "DEVELOPMENTS",
            image: "/mnt/data/Untitled.png",
            rating: 4.9,
            students: 211434,
            price: 89,
        },
    ];

    // ---------- FILTER ----------
    let filteredCourses = courses.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase())
    );

    // ---------- SORT ----------
    if (sort === "price-low-high") {
        filteredCourses = [...filteredCourses].sort((a, b) => a.price - b.price);
    }
    if (sort === "price-high-low") {
        filteredCourses = [...filteredCourses].sort((a, b) => b.price - a.price);
    }
    if (sort === "rating-high-low") {
        filteredCourses = [...filteredCourses].sort((a, b) => b.rating - a.rating);
    }
    if (sort === "students-most") {
        filteredCourses = [...filteredCourses].sort((a, b) => b.students - a.students);
    }

    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>

            {/* -------- SEARCH + SORT BAR -------- */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 3,
                    gap: 2,
                }}
            >
                <TextField
                    label="Search course..."
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ width: { xs: "100%", sm: "350px" } }}
                />

                <FormControl sx={{ width: { xs: "100%", sm: "300px" } }}>
                    <InputLabel>Sort by</InputLabel>
                    <Select value={sort} label="Sort by" onChange={(e) => setSort(e.target.value)}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="price-low-high">Price: Low → High</MenuItem>
                        <MenuItem value="price-high-low">Price: High → Low</MenuItem>
                        <MenuItem value="rating-high-low">Rating: High → Low</MenuItem>
                        <MenuItem value="students-most">Most Students</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* -------- GRID OF COURSES -------- */}
            <Grid container spacing={3} justifyContent={"center"}>
                <CourseInstructorCard />
                <CourseInstructorCard />
                <CourseInstructorCard />
                <CourseInstructorCard />
            </Grid>

            <Pagination/>
            
        </Box>
    );
}
