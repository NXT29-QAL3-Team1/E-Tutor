import TitlePaper from "../../../../../components/TitlePaper";
import InstructorStackCard from "../../../../../components/InstructorStackCard";
import './stack2.css';
import { Stack, Box, Typography, styled, useTheme, useMediaQuery } from "@mui/material";
import lineData from "./lineData";
import { ResponsiveLine } from "@nivo/line";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const StyledCard = styled(Box)(({ theme }) => ({
    // Ensure the card takes up the full width of its container up to the max width
    width: '100%',
    height: '200px',

    // Design properties
    background: 'linear-gradient(135deg, #6c5ce7 0%, #4F35E8 100%)',
    // @ts-ignore
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(2),
    color: 'white',
    boxShadow: theme.shadows[5],
    position: 'relative',
    overflow: 'hidden',

    // Gradient effect remains
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '0 0 100% 0',
        transform: 'skewX(-20deg)',
        pointerEvents: 'none',
    },
}));

// --- Helper Component for Card Detail Lines ---
const DetailLine = ({ label, value }) => (
    <Box>
        <Typography variant="caption" sx={{ opacity: 0.6, display: 'block' }}>
            {label}
        </Typography>
        <Typography
            // Responsive typography for the main values (Expiration/Name)
            sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' }, // Smaller on extra-small screens
                fontWeight: 'medium'
            }}
        >
            {value}
        </Typography>
    </Box>
);

// --- Styled Component for the Placeholder Box ---
const StyledPlaceholder = styled(Box)(({ theme }) => ({
    // Ensure it takes up the full width of its container up to the max width
    width: '100%',

    // Design properties
    border: `2px dashed ${theme.palette.grey[400]}`,
    // @ts-ignore
    borderRadius: theme.shape.borderRadius * 2,
    // Responsive padding: less vertical padding on smaller screens
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
        backgroundColor: theme.palette.grey[50],
    },
}));

export default function Stack2() {

    const theme = useTheme();
    // Check if we are on a smaller screen to adjust spacing/sizes
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const MyLine = ({ data /* see data tab */ }) => (
        <ResponsiveLine /* or Line for fixed dimensions */
            data={data}
            margin={{ top: 10, right: 0, bottom: 10, left: 30 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            enableGridX={false}
            enableGridY={false}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            enablePoints={false}
            colors={{ scheme: 'accent' }}
            pointBorderColor={{ from: 'seriesColor' }}
            enableArea={true}
            areaOpacity={0.2}
            curve="cardinal"
            useMesh={true}
            legends={[]}
        />
    )

    return (
        <div className="instructorEarnGrid2">
            <InstructorStackCard>
                <TitlePaper title="Statistic" />
                <Stack className="instructorCardContainer">
                    <MyLine data={lineData} />
                </Stack>
            </InstructorStackCard>
            <InstructorStackCard>
                <TitlePaper title="Cards" />
                <Stack className="instructorCardContainer" justifyContent="space-between">
                    <StyledCard>
                        {/* Top Row: VISA Logo and Options */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: "0px" }}>
                            <Typography
                                // Responsive typography for the VISA logo
                                sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, fontWeight: 'bold' }}
                            >
                                VISA
                            </Typography>
                            <MoreHorizIcon sx={{ opacity: 0.8, fontSize: { xs: 20, sm: 24 } }} />
                        </Box>

                        {/* Card Number */}
                        <Box
                            sx={{
                                my: "10px", // Adjust margin vertically
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Typography
                                // Responsive typography for the card number
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.5rem' },
                                    letterSpacing: isSmallScreen ? 2 : 3,
                                    fontWeight: 'regular'
                                }}
                            >
                                4855 **** **** ****
                            </Typography>
                            {/* Simple box representing the 'copy' or 'stack' icon */}
                            <Box
                                sx={{
                                    width: { xs: 12, sm: 16 }, // Smaller icon on small screens
                                    height: { xs: 12, sm: 16 },
                                    borderRadius: 1,
                                    border: '2px solid white',
                                    opacity: 0.8,
                                    ml: 1
                                }}
                            />
                        </Box>

                        {/* Bottom Row: Expiration and Name */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <DetailLine label="EXPIRES" value="04/24" />
                            <DetailLine label="CARD NAME" value="Vako Shvili" />
                        </Box>
                    </StyledCard>
                    <StyledPlaceholder>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#FF7043' /* Orange color */ }}>
                            <RemoveCircleOutlineIcon
                                // Responsive icon size
                                sx={{ fontSize: { xs: 24, sm: 28 }, mr: 1 }}
                            />
                            <Typography variant="subtitle1" fontWeight="medium">
                                Remove card
                            </Typography>
                        </Box>
                    </StyledPlaceholder>
                </Stack>
            </InstructorStackCard>
        </div>
    )
}