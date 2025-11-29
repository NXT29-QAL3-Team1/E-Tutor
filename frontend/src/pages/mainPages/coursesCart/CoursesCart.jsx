import React from 'react';
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const CartItem = ({ title, instructor, rating, reviews, image }) => {
    return (
        <Stack sx={{ flex: 3 }} direction="row" alignItems="center" gap={3} py={1} px={3}>
            {/* Remove Icon */}
            <IconButton
                size="small"
                sx={{
                    width: 28,
                    height: 28,
                    bgcolor: '#e0e0e0',
                    '&:hover': { bgcolor: '#d5d5d5' },
                }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>

            {/* Image */}
            <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                    width: 80,
                    height: 60,
                    objectFit: 'cover',
                    borderRadius: 1,
                    boxShadow: 1,
                }}
            />

            {/* Course Text */}
            <Box>
                <Typography variant="subtitle1" fontWeight="bold" lineHeight={1.3}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Course by: {instructor}
                </Typography>
                <Stack flexWrap={"wrap"} direction="row" alignItems="center" spacing={0.5} mt={0.5}>
                    <Typography variant="body2" fontWeight="bold" color="#ffb400">
                        {rating}
                    </Typography>
                    {[...Array(5)].map((_, i) =>
                        i < Math.floor(rating) ? (
                            <StarIcon key={i} sx={{ fontSize: 14, color: '#ffb400' }} />
                        ) : (
                            <StarBorderIcon key={i} sx={{ fontSize: 14, color: '#ffb400' }} />
                        )
                    )}
                    <Typography variant="caption" color="text.secondary">
                        ({reviews.toLocaleString()})
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    );
};


export default function CoursesCart() {
    const cartItems = [
        {
            title: "The Python Mega Course: Build 10 Real World Applications",
            instructor: "Leslie Alexander • Guy Hawkins",
            rating: 4.7,
            reviews: 451444,
            oldPrice: "649.00",
            price: "37.99",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
        },
        {
            title: "Machine Learning A-Z: Hands-On Python & R In Data Science",
            instructor: "Bessie Cooper",
            rating: 4.3,
            reviews: 451444,
            price: "9.99",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
        },
        {
            title: "Learn Ethical Hacking From Scratch",
            instructor: "Marvin McKinney",
            rating: 4.7,
            reviews: 451444,
            price: "13.99",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>

            <Typography variant="h4" fontWeight="bold" mb={4}>
                Shopping Cart ({cartItems.length})
            </Typography>

            <Stack sx={{ flexDirection: { lg: "row" } }} gap={4} alignItems="center" justifyContent="center">
                {/* Cart Items */}
                <Paper elevation={1} sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    width: "100%",
                    height: "100%",
                }}>
                    {/* Header */}
                    <Box bgcolor="#f8f9fa" px={3} py={2}>
                        <Typography fontWeight="bold" mb={1}>Courses Cart </Typography>
                    </Box>
                    {/* Items */}
                    {cartItems.map((item, index) => (
                        <Box key={index} flex={1}>
                            <Stack sx={{ flexDirection: { md: "row" } }} alignItems="flex-start" justifyContent="space-between" spacing={2} py={1}>
                                {/* Course Info */}
                                <CartItem
                                    title={item.title}
                                    instructor={item.instructor}
                                    rating={item.rating}
                                    reviews={item.reviews}
                                    image={item.image}
                                />

                                <Stack sx={{ px: 4, width: { xs: "100%", md: "auto" }, flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: "2" }}>
                                    {/* Price */}
                                    <Box sx={{ flex: { xs: 0, md: 1 } }} textAlign={{ xs: 'center' }} >
                                        <Typography variant="h6" fontWeight="bold" color="#e91e63">
                                            ${item.price}
                                        </Typography>
                                    </Box>

                                    {/* Action */}
                                    <Box textAlign={{ xs: 'left', md: 'right' }} mt={1}>
                                        <Button
                                            variant="text"
                                            sx={{
                                                color: '#f57c00',
                                                fontWeight: 500,
                                                textTransform: 'none',
                                                fontSize: '0.95rem',
                                                '&:hover': { bgcolor: '#fff3e0' },
                                            }}
                                        >
                                            Move to Wishlist
                                        </Button>
                                    </Box>
                                </Stack>
                            </Stack>

                            <Divider />
                        </Box>
                    ))}
                </Paper>

                {/* Order Summary */}
                <Paper elevation={1} sx={{ minWidth: { xs: "100%", lg: "300px" }, p: 3, borderRadius: 2, position: 'sticky', top: 20 }}>
                    <Stack gap={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Subtotal</Typography>
                            <Typography fontWeight="bold">$61.97 USD</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Coupon Discount</Typography>
                            <Typography color="success.main" fontWeight="bold">8%</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Tax</Typography>
                            <Typography>$17.99 USD</Typography>
                        </Box>
                        <Divider />
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6">Total:</Typography>
                            <Typography variant="h5" fontWeight="bold" color="#e91e63">
                                $75.00 USD
                            </Typography>
                        </Box>

                        <Button fullWidth variant="contained" sx={{ color: "white", mt: 2, bgcolor: '#ff5722', fontWeight: 'bold' }}>
                            Proceed To Checkout →
                        </Button>
                    </Stack>
                </Paper>
            </Stack>
        </Container>
    );
}