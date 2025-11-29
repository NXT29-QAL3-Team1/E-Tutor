// Components
import FilterSidebar from "../../../components/FilterSidebar";
import FilterHeader from "../../../components/FilterHeader";
import CourseDetailsCard from "../../../components/CourseDetailsCard";
import Pagination from '../../../components/Pagination';

// MUI Components
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/courses");
                setCourses(res.data);
            } catch (err) {
                console.log("Error loading courses:", err);
            }
        };

        fetchCourses();
    }, []);


    return (
        <div className="container">
            <FilterHeader />
            <Box sx={{
                padding: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "center", md: "flex-start" },
                flexDirection: { xs: "column", md: "row" },
                gap: "24px"
            }}>
                <FilterSidebar />
                <Box>
                    <Box sx={{
                        flex: "1",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                    }}>
                        {
                            courses.map((course, idx) => (
                                <CourseDetailsCard
                                    key={course._id}
                                    id={course._id}
                                    badge={course.category}
                                    title={course.title}
                                    subtitle={course.subtitle}
                                    price={course.price}
                                    image={course.thumbnail}
                                />
                            ))
                        }
                    </Box>
                    <Pagination />
                </Box>
            </Box>
        </div>
    )
}