import { Box, Card, CardContent, Typography } from "@mui/material"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"

const visitorsData = [
    { month: "Jan", visitors: 4000 },
    { month: "Feb", visitors: 3000 },
    { month: "Mar", visitors: 2000 },
    { month: "Apr", visitors: 2780 },
    { month: "May", visitors: 1890 },
    { month: "Jun", visitors: 2390 },
]

const revenueData = [
    {
        id: "revenue",
        data: [
            { x: "Jan", y: 24000 },
            { x: "Feb", y: 13000 },
            { x: "Mar", y: 10000 },
            { x: "Apr", y: 30000 },
            { x: "May", y: 40000 },
            { x: "Jun", y: 39000 },
        ],
    },
]

export default function ChartsSection() {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 3 }}>
            {/* Monthly Visitors Chart */}
            <Card sx={{ borderRadius: 3, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                        Monthly Visitors
                    </Typography>
                    <Box sx={{ height: 350 }}>
                        <ResponsiveBar
                            data={visitorsData}
                            keys={["visitors"]}
                            indexBy="month"
                            margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                            padding={0.4}
                            colors={["#FF8C42"]}
                            borderRadius={8}
                            axisBottom={{
                                tickSize: 0,
                                tickPadding: 10,
                            }}
                            axisLeft={{
                                tickSize: 0,
                                tickPadding: 10,
                            }}
                            enableLabel={false}
                            enableGridY={true}
                            gridYValues={5}
                            theme={{
                                grid: {
                                    line: {
                                        stroke: "#f0f0f0",
                                        strokeWidth: 1,
                                    },
                                },
                                axis: {
                                    ticks: {
                                        text: {
                                            fill: "#666",
                                            fontSize: 12,
                                        },
                                    },
                                },
                            }}
                        />
                    </Box>
                </CardContent>
            </Card>

            {/* Monthly Revenue Chart */}
            <Card sx={{ borderRadius: 3, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                        Monthly Revenue
                    </Typography>
                    <Box sx={{ height: 350 }}>
                        <ResponsiveLine
                            data={revenueData}
                            margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                            xScale={{ type: "point" }}
                            yScale={{ type: "linear", min: 0, max: "auto" }}
                            colors={["#FF8C42"]}
                            lineWidth={3}
                            pointSize={10}
                            pointColor="#FF8C42"
                            pointBorderWidth={2}
                            pointBorderColor="#fff"
                            enableArea={false}
                            enableGridX={false}
                            enableGridY={true}
                            gridYValues={5}
                            axisBottom={{
                                tickSize: 0,
                                tickPadding: 10,
                            }}
                            axisLeft={{
                                tickSize: 0,
                                tickPadding: 10,
                            }}
                            theme={{
                                grid: {
                                    line: {
                                        stroke: "#f0f0f0",
                                        strokeWidth: 1,
                                    },
                                },
                                axis: {
                                    ticks: {
                                        text: {
                                            fill: "#666",
                                            fontSize: 12,
                                        },
                                    },
                                },
                            }}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
