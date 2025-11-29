// MUI Components
import {
    Box,
    Stack,
    Typography,
    Card,
    CardContent,
    Button,
    Divider,
    Rating,
    Avatar,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    LinearProgress,
    useMediaQuery
} from "@mui/material";

// MUI Icons
import {
    AccessTime,
    Star,
    ExpandMore,
    ArrowRightAlt,
    Folder,
    PlayCircleOutline,
    Group,
    ExpandLess,
    School,
} from "@mui/icons-material";

// Reusable Components
import RelatedCoursesHeader from '../../../components/RelatedCoursesHeader';
import CourseDetailsCard from '../../../components/CourseDetailsCard';
import Reviews from "../../../components/reviews/Reviews";
import VideoPlayer from '../../../components/VideoPlayer';
import RatingPaper from '../../../components/RatingPaper';

// Hooks
import { useState, useEffect } from "react";

// api
import axios from "axios";

// React Router
import { useNavigate, useParams } from "react-router-dom";

export default function CourseDetails() {
    const [courseAPIInfo, setCourseAPIInfo] = useState(null);
    const [coursesAPIInfo, setCoursesAPIInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isSmall = useMediaQuery("(max-width:992px)");
    const { id } = useParams();
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
                console.log(res);
                setCourseAPIInfo(res.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch course data.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/api/courses`);
                console.log(res);
                setCoursesAPIInfo(res.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch course data.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, []);

    const [readMore, setReadMore] = useState(false);

    const navigate = useNavigate();

    const sliced = coursesAPIInfo ? coursesAPIInfo.slice(-6) : [];

    if (loading) return <p>Loading course...</p>;
    if (error) return <p>{error}</p>;

    const courseInfo = {
        course: {
            courseFor: courseAPIInfo.for || "This course is for those who want to launch a Freelance Web Design career.",
            req: courseAPIInfo.requirement || "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
            title:
                courseAPIInfo.title
                ||
                "Complete Website Responsive Design: from Figma to Webflow to Website Design",
            subtitle:
                courseAPIInfo.subtitle
                ||
                "3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.",
            creators: [
                { name: "Vako Shvili", img: "https://i.pravatar.cc/150?img=12" },
            ],
            rating: 4.8,
            totalRatings: "451,444",
            price: courseAPIInfo.price || 14,
            oldPrice: 26,
            discount: "56% OFF",
            duration: "6 Month",
            level: "Beginner and Intermediate",
            enrolled: "69,416,618",
            language: "Mandarin",
            subtitleLang: "English",
            desc: courseAPIInfo.details || `It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I’m done working on something. When I lean back in my chair, the final result with a smile, and there lies this “spark joy” moment. It’s especially satisfying when I know I just made $5,000.

For example, this is a Design course but I won't teach you Photoshop. Because Photoshop is incredibly complicated for Web Design. But people still teach it to web designers. I don’t. I teach Figma – a simpler tool that’s made specifically for Web Design. You will be designing a complete website within a week while others are still learning how to create basic layouts in Photoshop.`,
            videoURL: courseAPIInfo.trailer || "/vids/course.mp4",
        },
        instructor: {
            name: "Vako Shvili",
            title: "Web Designer & Best-Selling Instructor",
            rating: 4.9,
            students: "236,568",
            courses: 9,
            bio: `One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup. He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed. This decision changed his life completely, and now he helps others achieve the same.`,
            image: "https://i.pravatar.cc/150?img=12",
        },
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
        ratings: [
            { stars: 5, percent: 75 },
            { stars: 4, percent: 21 },
            { stars: 3, percent: 3 },
            { stars: 2, percent: 1 },
            { stars: 1, percent: 0.5 },
        ]
    }
    return (
        <Box className="container" sx={{ py: 4, bgcolor: "background.default" }}>
            {/* === Existing Course Details Section === */}
            <Stack
                direction={isSmall ? "column" : "row"}
                spacing={4}
                alignItems="flex-start"
            >
                <Box flex={1}>
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        sx={{ mt: 1, lineHeight: 1.4 }}
                    >
                        {courseAPIInfo.title}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                    >
                        {courseAPIInfo.subtitle}
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{ mt: 2 }}
                        flexWrap="wrap"
                        rowGap={1}
                    >
                        {courseInfo.course.creators.map((c, i) => (
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                key={i}
                                sx={{
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    navigate(`/instructorInfo/${id}`)
                                }}
                            >
                                <Avatar
                                    src={c.img}
                                    alt={c.name}
                                    sx={{ width: 28, height: 28 }}
                                />
                                <Typography variant="body2" fontWeight={500}>
                                    {c.name}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mt: 1 }}
                    >
                        <Rating
                            name="read-only"
                            value={courseInfo.course.rating}
                            precision={0.1}
                            readOnly
                            size="small"
                        />
                        <Typography variant="body2" fontWeight={600}>
                            {courseInfo.course.rating}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ({courseInfo.course.totalRatings} Ratings)
                        </Typography>
                    </Stack>

                    <VideoPlayer id={id} />

                    <Box sx={{ mt: 4 }}>
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            gutterBottom
                        >
                            Description
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                whiteSpace: "pre-line",
                                lineHeight: 1.8,
                            }}
                        >
                            {courseInfo.course.desc}
                        </Typography>
                    </Box>
                    {/* === New Section (Who this course is for) === */}
                    <Box sx={{ my: 6 }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Who this course is for:
                        </Typography>

                        <Stack spacing={1.5}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <ArrowRightAlt color="primary" />
                                <Typography variant="body1">
                                    {courseAPIInfo.for}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>

                    {/* === Course Requirements === */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Course requirements
                        </Typography>

                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRightAlt color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={courseAPIInfo.requirement} />
                            </ListItem>
                        </List>
                    </Box>

                    {/* === Curriculum === */}
                    <Box sx={{ mb: 6 }}>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            alignItems={{ xs: "flex-start", sm: "center" }}
                            justifyContent="space-between"
                            sx={{ mb: 2 }}
                            flexWrap="wrap"
                            rowGap={1}
                        >
                            <Typography variant="h5" fontWeight={700}>
                                Curriculum
                            </Typography>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Stack direction="row" spacing={0.5} alignItems="center">
                                    <Folder fontSize="small" color="primary" />
                                    <Typography variant="body2">6 Sections</Typography>
                                </Stack>
                                <Stack direction="row" spacing={0.5} alignItems="center">
                                    <PlayCircleOutline fontSize="small" color="primary" />
                                    <Typography variant="body2">202 lectures</Typography>
                                </Stack>
                                <Stack direction="row" spacing={0.5} alignItems="center">
                                    <AccessTime fontSize="small" color="primary" />
                                    <Typography variant="body2">19h 37m</Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography fontWeight={600}>Getting Started</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PlayCircleOutline color="primary" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="What's Webflow?"
                                            secondary="07:31"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PlayCircleOutline color="primary" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Sign up in Webflow"
                                            secondary="07:31"
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography fontWeight={600}>Materials</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="text.secondary">
                                    Course materials and resources will appear here.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box sx={{ pb: 6 }}>
                        {/* ========== Instructor Section ========== */}
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Course Instructor (02)
                        </Typography>

                        <Card sx={{ p: 3, mb: 5 }}>
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                spacing={3}
                                alignItems={"center"}
                            >
                                <Avatar
                                    onClick={() => {
                                        navigate(`/instructorInfo/${id}`)
                                    }}

                                    src={courseInfo.instructor.image}
                                    sx={{ cursor: "pointer", width: 90, height: 90, borderRadius: "50%" }}
                                />

                                <Box>
                                    <Typography

                                        onClick={() => {
                                            navigate(`/instructorInfo/${id}`)
                                        }} variant="h6" fontWeight={700}
                                        sx={{
                                            cursor: "pointer", textAlign: { xs: "center", md: "left" }
                                        }}
                                    >
                                        {courseInfo.instructor.name}
                                    </Typography>
                                    <Typography

                                        onClick={() => {
                                            navigate(`/instructorInfo/${id}`)
                                        }} variant="body2" color="text.secondary"
                                        sx={{
                                            cursor: "pointer", textAlign: { xs: "center", md: "left" },
                                            mb: 2
                                        }}
                                    >
                                        {courseAPIInfo.title}
                                    </Typography>

                                    <Stack
                                        direction={{ xs: "column", sm: "row" }}
                                        spacing={2}
                                        alignItems="center"
                                        sx={{ mt: 1 }}
                                    >
                                        <Stack direction="row" alignItems="center" spacing={0.5}>
                                            <Star color="warning" fontSize="small" />
                                            <Typography variant="body2">
                                                {courseInfo.instructor.rating} Course rating
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" spacing={0.5}>
                                            <Group color="primary" fontSize="small" />
                                            <Typography variant="body2">
                                                {courseInfo.instructor.students} Students
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" spacing={0.5}>
                                            <School color="secondary" fontSize="small" />
                                            <Typography variant="body2">
                                                {courseInfo.instructor.courses} Courses
                                            </Typography>
                                        </Stack>
                                    </Stack>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mt: 2, lineHeight: 1.7 }}
                                    >
                                        {readMore
                                            ? courseInfo.instructor.bio
                                            : courseInfo.instructor.bio.slice(0, 170) + "..."}
                                    </Typography>

                                    <Button
                                        size="small"
                                        onClick={() => setReadMore(!readMore)}
                                        sx={{ mt: 1, textTransform: "none" }}
                                        endIcon={readMore ? <ExpandLess /> : <ExpandMore />}
                                    >
                                        {readMore ? "Read Less" : "Read More"}
                                    </Button>
                                </Box>
                            </Stack>
                        </Card>

                        {/* ========== Course Rating ========== */}
                        <Typography variant="h5" fontWeight={700} textAlign={"center"} sx={{
                            marginBottom: "20px",
                        }}>
                            Course Rating
                        </Typography>

                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={5}
                            alignItems={"center"}
                            justifyContent="space-between"
                            sx={{ mb: 5 }}
                        >
                            <RatingPaper />

                            <Box sx={{ flex: 1, width: "100%" }}>
                                {courseInfo.ratings.map((r) => (
                                    <Stack
                                        key={r.stars}
                                        direction="row"
                                        alignItems="center"
                                        spacing={2}
                                        sx={{ mb: 1 }}
                                    >
                                        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: 120 }}>
                                            <Typography variant="body2">{r.stars} Star Rating</Typography>
                                        </Stack>
                                        <LinearProgress
                                            variant="determinate"
                                            value={r.percent}
                                            sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{ width: 40, textAlign: "right" }}
                                        >
                                            {r.percent}%
                                        </Typography>
                                    </Stack>
                                ))}
                            </Box>
                        </Stack>

                        {/* ========== Student Feedback ========== */}
                        <Reviews />
                    </Box>
                    <RelatedCoursesHeader />
                    <Stack mt={2} direction={"row"} flexWrap={"wrap"} gap={3} justifyContent={"center"} alignItems={"center"}>
                        {
                            sliced.map((course, idx) => (
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
                    </Stack>
                </Box>

                <Card
                    sx={{
                        position: isSmall ? "relative" : "sticky",
                        top: isSmall ? "unset" : 24,
                        width: isSmall ? "100%" : 320,
                        alignSelf: isSmall ? "stretch" : "flex-start",
                        boxShadow: 3,
                    }}
                >
                    <CardContent>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography
                                variant="h5"
                                color="primary.main"
                                fontWeight={700}
                            >
                                ${courseInfo.course.price}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ textDecoration: "line-through" }}
                            >
                                ${courseInfo.course.oldPrice}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="error.main"
                                fontWeight={600}
                            >
                                {courseInfo.course.discount}
                            </Typography>
                        </Stack>

                        <Typography variant="caption" color="text.secondary">
                            2 days left at this price!
                        </Typography>

                        <Stack spacing={1.5} sx={{ mt: 2 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ color: "white" }}
                                fullWidth
                            >
                                Add To Cart
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                fullWidth
                                onClick={() => {
                                    navigate("content");
                                }}
                            >
                                Overview
                            </Button>
                            <Button variant="outlined" fullWidth>
                                Add to Wishlist
                            </Button>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <Stack spacing={1}>
                            <Typography variant="body2">
                                <strong>Course Duration:</strong>{" "}
                                {courseInfo.course.duration}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Course Level:</strong> {courseInfo.course.level}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Students Enrolled:</strong>{" "}
                                {courseInfo.course.enrolled}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Language:</strong> {courseInfo.course.language}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Subtitle Language:</strong>{" "}
                                {courseInfo.course.subtitleLang}
                            </Typography>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="body2" color="text.secondary">
                            This course includes:
                        </Typography>

                        <Stack spacing={0.5} sx={{ mt: 1 }}>
                            <Typography variant="body2">
                                • Lifetime access
                            </Typography>
                            <Typography variant="body2">
                                • Free exercises & downloadable resources
                            </Typography>
                            <Typography variant="body2">
                                • Shareable certificate of completion
                            </Typography>
                            <Typography variant="body2">
                                • Access on mobile, tablet, and TV
                            </Typography>
                            <Typography variant="body2">
                                • English subtitles
                            </Typography>
                            <Typography variant="body2">
                                • 100% online course
                            </Typography>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <Button variant="outlined" fullWidth>
                            Share this course
                        </Button>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}