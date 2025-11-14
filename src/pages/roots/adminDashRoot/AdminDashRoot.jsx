import * as React from 'react';

// MUI Theme
import { styled, useTheme } from '@mui/material/styles';

// MUI Components
import {
    Box,
    Drawer,
    CssBaseline,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Stack,
    Avatar,
    InputBase,
    Badge,
    useMediaQuery,
} from '@mui/material';

// Appbar MUI Component
import MuiAppBar from '@mui/material/AppBar';

// MUI Icons
import {
    Menu,
    ChevronLeft,
    Search,
    NotificationsNone,
} from '@mui/icons-material';

// Reusable Components
import Logo from '../../../components/Logo';
import InstructorFooter from '../../../components/instructorFooter/InstructorFooter';

// Nav Data
import { AdminNav } from './AdminNav';

// React Router
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(4),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        variants: [
            {
                // @ts-ignore
                props: ({ open }) => open,
                style: {
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    marginLeft: 0,
                },
            },
        ],
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            // @ts-ignore
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function InstructorDashRoot() {

    const navigate = useNavigate();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const isSmall = useMediaQuery("(max-width:767px)");
    const isverySmall = useMediaQuery("(max-width:400px)");

    const location = useLocation();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: "#E9EAF0" }}>
            <CssBaseline />
            <AppBar position="fixed"
                // @ts-ignore
                open={open}
                sx={{
                    backgroundColor: "white",
                    padding: "10px",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <Menu />
                    </IconButton>
                    <Stack direction={isSmall ? "column" : "row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        flex={"1"}
                        gap={2}
                    >
                        <Stack>

                            <Typography variant="body2" noWrap component="div">
                                Good Morning
                            </Typography>
                            <Typography variant="h6" noWrap component="div" sx={{
                                fontWeight: "bold",
                            }}>
                                Dashboard
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems="center" spacing={2}>
                            {/* Search box */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    bgcolor: "grey.50",
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 2,
                                    width: isverySmall ? 120 : 200,
                                }}
                            >
                                <Search sx={{ color: "text.secondary", mr: 1 }} />
                                <InputBase
                                    placeholder="Search"
                                    sx={{
                                        flex: 1,
                                        fontSize: 14,
                                        color: "text.secondary",
                                    }}
                                />
                            </Box>

                            {/* Notification icon */}
                            <IconButton sx={{ bgcolor: "grey.50", borderRadius: 2 }}>
                                <Badge
                                    variant="dot"
                                    color="error"
                                    overlap="circular"
                                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                >
                                    <NotificationsNone
                                        sx={{ color: "text.primary" }} />
                                </Badge>
                            </IconButton>

                            {/* User avatar */}
                            <Avatar
                                alt="User"
                                src=""
                                sx={{ width: 40, height: 40 }}
                            />
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: "#1D2026",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Box sx={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Logo drawer={true} color={"white"} />
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft sx={{
                            color: "white"
                        }} />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {AdminNav.map((item, index) => {
                        return (
                            <ListItem key={index} disablePadding
                                sx={{ backgroundColor: item.path === location.pathname ? theme.palette.primary.main : "" }}
                            >
                                <ListItemButton
                                    onClick={() => {
                                        navigate(item.path);
                                        setOpen(false);
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        color: item.path === location.pathname ? "white " : "#8C94A3",
                                        justifyContent: "center"
                                    }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} sx={{ color: item.path === location.pathname ? "white " : "#8C94A3" }} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
            <Main
                // @ts-ignore
                open={open}>
                <DrawerHeader />
                <Box sx={{ marginTop: { xs: "56px", sm: "75px", md: "35px" } }}>
                    <Outlet />
                </Box>
                <InstructorFooter />
            </Main>
        </Box >
    );
}
