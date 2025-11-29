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

    const courseInfo = {
        feedbacks: [
            {
                name: "Guy Hawkins",
                avatar: "https://i.pravatar.cc/100?img=15",
                rating: 5,
                time: "1 week ago",
                comment:
                    "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
            },
            {
                name: "Bessie Cooper",
                avatar: "https://i.pravatar.cc/100?img=23",
                rating: 5,
                time: "6 hours ago",
                comment:
                    "Webflow course was good, it covers design secrets, and to build responsive web pages, blog, and more some tricks and tips about webflow. I enjoyed the course and it helped me to add web development skills related to webflow in my toolbox. Thank you Vako.",
            },
        ],
    }

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
