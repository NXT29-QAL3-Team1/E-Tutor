import { Rating, Stack, Typography } from "@mui/material";

export default function RatingPaper({ background = "" }) {
    return (
        <Stack alignItems="center" justifyContent="center" sx={{
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: { background },
        }}>
            <Typography variant="h3" fontWeight={700}>
                4.8
            </Typography>
            <Rating value={4.8} precision={0.1} readOnly />
            <Typography variant="body2" color="text.secondary">
                Course Rating
            </Typography>
        </Stack>
    )
}
