import courseInfo from '../../pages/mainPages/courseDetails/courseInfo';

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    MenuItem,
    Rating,
    Select,
    Stack,
    Typography
} from "@mui/material";

export default function Reviews() {
    return (
        <>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent="space-between"
                sx={{ my: 2 }}
                rowGap={1}
            >
                <Typography variant="h5" fontWeight={700}>
                    Students Feedback
                </Typography>

                <Select size="small" defaultValue="5 Star Rating">
                    <MenuItem value="5 Star Rating">5 Star Rating</MenuItem>
                    <MenuItem value="4 Star Rating">4 Star Rating</MenuItem>
                    <MenuItem value="3 Star Rating">3 Star Rating</MenuItem>
                </Select>
            </Stack>

            <Stack spacing={3}>
                {courseInfo.feedbacks.map((f, i) => (
                    <Card key={i} variant="outlined">
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                                <Avatar src={f.avatar} />
                                <Box>
                                    <Typography fontWeight={600}>{f.name}</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {f.time}
                                    </Typography>
                                </Box>
                            </Stack>

                            <Rating
                                name="feedback-rating"
                                value={f.rating}
                                readOnly
                                size="small"
                            />
                            <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.6 }}>
                                {f.comment}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <Box textAlign="center" sx={{ mt: 3 }}>
                <Button variant="outlined" color="warning">
                    Load More
                </Button>
            </Box>
        </>
    )
}
