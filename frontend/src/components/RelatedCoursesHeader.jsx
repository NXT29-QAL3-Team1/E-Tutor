// MUI Components
import {
    Box,
    Typography,
    Button,
} from "@mui/material";

// MUI Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function RelatedCoursesHeader() {
    return (
        <>
            <Box
                component="header"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    width: "100%",
                    py: 1,
                    bgcolor:"white",
                }}
            >
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1rem", sm: "1.125rem" },
                        color: "text.primary",
                    }}
                >
                    Related Courses
                </Typography>

                <Button
                    variant="contained"
                    size="small"
                    endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
                    sx={{
                        textTransform: "none",
                        bgcolor: "primary.light",
                        color: "primary.main",
                        borderRadius: 1.5,
                        px: 2,
                        py: 0.5,
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        boxShadow: "none",
                        '&:hover': {
                            bgcolor: "primary.main",
                            color: "white",
                            boxShadow: "none",
                        },
                    }}
                >
                    View All
                </Button>
            </Box>
        </>
    );
}
