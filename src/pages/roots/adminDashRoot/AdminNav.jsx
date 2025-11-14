// Instructor Drawer navigations

import {
    AssessmentOutlined,
    AddCircleOutlineOutlined,
    LayersOutlined,
    CreditCardOutlined,
    SettingsOutlined
} from '@mui/icons-material';

export const AdminNav = [
    {
        title: "Analytis",
        path: "/adminDashboard",
        icon: <AssessmentOutlined />
    },
    {
        title: "Courses",
        path: "/adminDashboard/adminCourses",
        icon: <AddCircleOutlineOutlined />
    },
    {
        title: "Users",
        path: "/adminDashboard/adminUsers",
        icon: <LayersOutlined />
    },
    {
        title: "Content",
        path: "/adminDashboard/adminContent",
        icon: <CreditCardOutlined />
    },
    {
        title: "Settings",
        path: "/adminDashboard/adminSettings",
        icon: <SettingsOutlined />
    },
]