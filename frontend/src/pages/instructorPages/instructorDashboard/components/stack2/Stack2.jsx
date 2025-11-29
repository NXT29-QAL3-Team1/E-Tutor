// mui
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import './stack2.css';

// nivo
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

import transactionCards from './transactionCards';

import lineData from './lineData';
import barData from './barData';

// Reusable Components
import TitlePaper from "../../../../../components/TitlePaper";
import InstructorStackCard from "../../../../../components/InstructorStackCard";

export default function Stack2() {
    const theme = useTheme();
    const transactionCardsUI = transactionCards.map((transaction) => (
        <Paper
            key={transaction.id}
            sx={{
                p: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <Stack gap={1}>
                <Typography variant="body1" color="inherit">{transaction.title}</Typography>
                <Typography variant="body1" color="inherit">{transaction.subTitle}</Typography>
            </Stack>
            <Box>
                <Typography variant="body1" color="inherit">{transaction.details}</Typography>
            </Box>
            <Box sx={{ background: theme.palette.primary.main, p: 1, borderRadius: "5px" }}>
                <Typography variant="body1" color="white">${transaction.price}</Typography>
            </Box>
        </Paper>
    ))

    const MyLine = ({ data /* see data tab */ }) => (
        <ResponsiveLine /* or Line for fixed dimensions */
            data={data}
            margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisBottom={{ legend: "", legendOffset: 36, tickRotation: -90 }}
            axisLeft={{ legend: 'count', legendOffset: -40 }}
            enableGridX={false}
            enableGridY={false}
            colors={{ scheme: 'pink_yellowGreen' }}
            enablePoints={false}
            lineWidth={1}
            pointColor={{ theme: 'background' }}
            pointBorderColor={{ from: 'seriesColor' }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.2}
            curve="cardinal"
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 75,
                    itemHeight: 22,
                    symbolShape: 'circle'
                }
            ]}
        />
    )


    const MyBar = ({ data /* see data tab */ }) => (
        <ResponsiveBar /* or Bar for fixed dimensions */
            data={data}
            keys={["donut"]}
            indexBy="country"
            colors={{ scheme: 'accent' }}
            enableGridX={false}
            enableGridY={false}
            axisBottom={{ tickRotation: -90 }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            groupMode="grouped"
            enableLabel={false}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 120,
                    itemsSpacing: 3,
                    itemWidth: 100,
                    itemHeight: 16
                }
            ]}
            margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
        />
    )

    return (
        <div className="instructorDashGrid2">
            <InstructorStackCard>
                <TitlePaper title="Resent Transactions" />
                <Stack gap={1} sx={{ maxHeight: "330px", overflow: "auto" }}>
                    {transactionCardsUI}
                </Stack>
            </InstructorStackCard>

            <InstructorStackCard>
                <TitlePaper title="Revenue" />
                <Stack className="instructorCardContainer">
                    <MyLine data={lineData} />
                </Stack>
            </InstructorStackCard>

            <InstructorStackCard>
                <TitlePaper title="Profile View" />
                <Stack className="instructorCardContainer">
                    <MyBar data={barData} />
                </Stack>
            </InstructorStackCard>
        </div>
    )
}