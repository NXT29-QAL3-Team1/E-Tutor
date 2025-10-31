import TitlePaper from "../../../../../../components/TitlePaper";
import InstructorStackCard from "../../../../../../components/InstructorStackCard";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Typography, Paper, useMediaQuery, Button, Stack } from '@mui/material';

export default function VisaStackCard() {

    const isSmallScreen = useMediaQuery("(max-width:1189px)");

    return (
        <InstructorStackCard>
            <TitlePaper title="Withdraw your money" />
            <Stack className="instructorCardContainer" sx={{
                justifyContent:"center"
            }}>
                <Box
                    sx={{
                        width: '100%',
                        p: { xs: 2, sm: 3 },
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <Typography variant="subtitle1" color="text.secondary" mb={2}>
                        Payment method:
                    </Typography>
                    <Paper
                        sx={{
                            p: 2,
                            mb: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderRadius: 2,
                            border: '1px solid #4CAF50',
                            transition: 'border-color 0.3s, box-shadow 0.3s',
                        }}
                    >

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexGrow: 1,
                            flexDirection: isSmallScreen ? "column" : "row",
                            gap: 2,
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1,
                                flexDirection: isSmallScreen ? "column" : "row",
                                gap: "5px",
                            }}>

                                <Typography variant="body1" sx={{ fontWeight: 'medium', }}>
                                    VISA
                                </Typography>

                                <Typography variant="body1" sx={{ fontWeight: 'medium', }}>
                                    4855 **** **** ****
                                </Typography>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1,
                                flexDirection: isSmallScreen ? "column" : "row",
                                gap: "5px",
                            }}>

                                <Typography variant="body1" sx={{ color: 'text.secondary', }}>
                                    04/24
                                </Typography>
                                <Typography variant="body1" sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}>
                                    Vako Shvili
                                    <CheckCircleIcon sx={{ color: '#4CAF50', ml: 1, fontSize: 24 }} />
                                </Typography>
                            </div>
                        </Box>

                    </Paper>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 4,
                        flexDirection: isSmallScreen ? "column" : "row",
                        gap: 2
                    }}>
                        <Box textAlign="center">
                            <Typography variant="h5" fontWeight="bold">
                                $16,593.00
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Current Balance
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#FF7043', // Orange color from your image
                                '&:hover': {
                                    bgcolor: '#e65100', // Darker orange on hover
                                },
                                color: 'white',
                                py: 1.5, // Padding top/bottom
                                px: 3, // Padding left/right
                                fontSize: '1rem',
                                textTransform: 'none', // Prevent uppercase
                            }}
                        >
                            Withdraw Money
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </InstructorStackCard>
    )
}