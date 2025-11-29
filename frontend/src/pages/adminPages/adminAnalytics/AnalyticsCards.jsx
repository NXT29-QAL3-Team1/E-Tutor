import { Box, Card, CardContent, Typography, Avatar } from "@mui/material"
import PeopleIcon from "@mui/icons-material/People"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import BoltIcon from "@mui/icons-material/Bolt"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"

const statsData = [
    {
        title: "Total Visitors",
        value: "24,582",
        change: "+12.5%",
        icon: PeopleIcon,
        color: "#7C3AED",
    },
    {
        title: "Revenue",
        value: "$45,231",
        change: "+8.2%",
        icon: AttachMoneyIcon,
        color: "#0891B2",
    },
    {
        title: "Credit Balance",
        value: "1,250",
        change: "+2.1%",
        icon: BoltIcon,
        color: "#16A34A",
    },
    {
        title: "Active Courses",
        value: "87",
        change: "+5.3%",
        icon: TrendingUpIcon,
        color: "#7C3AED",
    },
]

export default function StatsCards() {
    return (
        <Box
            sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 3, mb: 4 }}
        >
            {statsData.map((stat, index) => (
                <Card key={index} sx={{ borderRadius: 3, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Box>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {stat.title}
                                </Typography>
                                <Typography variant="h4" fontWeight="bold">
                                    {stat.value}
                                </Typography>
                                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                                    {stat.change}
                                </Typography>
                            </Box>
                            <Avatar sx={{ bgcolor: stat.color, width: 48, height: 48 }}>
                                <stat.icon />
                            </Avatar>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}
