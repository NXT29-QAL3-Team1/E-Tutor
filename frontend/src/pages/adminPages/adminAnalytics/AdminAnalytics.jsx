import AdminCharts from "./AdminCharts"
import AnalyticsCards from "./AnalyticsCards"

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

export default function AdminAnalytics() {
    return (
        <>
        <AnalyticsCards/>
        <AdminCharts/>
        </>
    )
}
