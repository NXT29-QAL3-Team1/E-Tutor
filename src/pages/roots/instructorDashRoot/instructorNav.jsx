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
        path: "/createCourse",
        icon: <AddCircleOutlineOutlined />
    },
    {
        title: "My Courses",
        path: "/instructorCourses",
        icon: <LayersOutlined />
    },
    {
        title: "Earning",
        path: "/earning",
        icon: <CreditCardOutlined />
    },
    {
        title: "Settings",
        path: "/instructorSettings",
        icon: <SettingsOutlined />
    },
]