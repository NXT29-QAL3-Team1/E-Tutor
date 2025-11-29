// Instructor Drawer navigations

import {
    AssessmentOutlined,
    AddCircleOutlineOutlined,
    LayersOutlined,
    CreditCardOutlined,
    SettingsOutlined
} from '@mui/icons-material';

export const instructorNav = [
    {
        title: "Dashboard",
        path: "/instructorDashboard",
        icon: <AssessmentOutlined />
    },
    {
        title: "Create New Course",
        path: "/instructorDashboard/createCourse",
        icon: <AddCircleOutlineOutlined />
    },
    {
        title: "My Courses",
        path: "/instructorDashboard/instructorCourses",
        icon: <LayersOutlined />
    },
    {
        title: "Earning",
        path: "/instructorDashboard/earning",
        icon: <CreditCardOutlined />
    },
    {
        title: "Settings",
        path: "/instructorDashboard/instructorSettings",
        icon: <SettingsOutlined />
    },
]