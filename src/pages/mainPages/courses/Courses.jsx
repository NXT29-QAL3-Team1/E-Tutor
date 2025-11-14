// Components
import FilterSidebar from "../../../components/FilterSidebar";
import FilterHeader from "../../../components/FilterHeader";
import CourseDetailsCard from "../../../components/CourseDetailsCard";
import Pagination from '../../../components/Pagination';

// MUI Components
import { Box } from "@mui/material";

export default function Courses() {

    const arr = ["", "", "", "", "", "", "", "", ""];

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
                            arr.map((_, idx) => (
                                <CourseDetailsCard key={idx} />
                            ))
                        }
                    </Box>
                    <Pagination />
                </Box>
            </Box>
        </div>
    )
}