import * as React from 'react';

// MUI Components
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    alpha,
    styled,
    useTheme,
    Badge,
    Button
} from '@mui/material';


// MUI Icons
import { SchoolOutlined, Menu, NotificationsOutlined, FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { badgeClasses } from '@mui/material/Badge';

// Nav Data
import navArr from './navArr';

// React Router
import { useLocation, useNavigate } from 'react-router-dom';

// CSS File
import './drawerAppBar.css';

// Reusable Components
import Logo from '../../../../components/Logo';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const drawerWidth = 240;

function DrawerAppBar() {

    // React Router Variables
    const location = useLocation();
    const navigate = useNavigate();

    // Main Theme Object
    const theme = useTheme();

    // Mobile Drawer State
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Toggle Drawer State
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // Drawer Custom Component
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Logo drawer={true} />
            <Stack sx={{
                padding: "20px",
                gap: "10px",
            }}>
                <Button variant="contained"
                    onClick={() => {
                        navigate("/auth/signup");
                    }}
                    sx={{
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                        opacity: 0.9,
                        transition: "0.3s",
                        '&:hover': {
                            opacity: 1,
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                        }
                    }}
                >Create Account</Button>
                <Button variant="contained"
                    onClick={() => {
                        navigate("/auth");
                    }}
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                        opacity: 0.9,
                        transition: "0.3s",
                        '&:hover': {
                            opacity: 1,
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                        }
                    }}>Sign In</Button>
            </Stack>
            <Stack className="mainRootIcons"
                sx={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                }}>
                <IconButton
                    onClick={() => {
                        navigate("/wishlist");
                    }}>
                    <FavoriteBorderOutlined fontSize="medium" />
                </IconButton>
                <IconButton
                    onClick={() => {
                        navigate("/coursesCart");
                    }}>
                    <ShoppingCartOutlined fontSize="medium" />
                    <CartBadge badgeContent={0} color='warning' overlap="circular" sx={{
                    }} />
                </IconButton>
            </Stack>
            <Divider />
            <List>
                {navArr.map((item, idx) => (
                    <ListItem key={idx} disablePadding
                        onClick={() => {
                            navigate(item.path);
                        }}
                        className={`${location.pathname === item.path ? "activeListItem" : ""}`}
                    >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                marginTop: { xs: "0", sm: "46px" },
                backgroundColor: "white",
                boxShadow: "none",
                zIndex: "999",
            }}>
                <Toolbar
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: { xs: "row", sm: "column", md: "row" },
                        marginBottom: { sm: "10px", md: "0px" },
                        gap: "10px",
                    }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>

                    <Stack sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: { xs: "100%", md: "auto" },
                        gap: "10px",
                    }}>
                        <Logo drawer={false} />
                        <Search sx={{
                            border: "1px solid lightgray",
                            margin: { sm: "10px 0" },
                            maxWidth: { xs: "100%", sm: "225px" },

                        }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Start learning"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Stack>
                    <Stack
                        sx={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "25px",
                            justifyContent: "space-between",
                            width: { xs: "100%", md: "auto" },
                            display: { xs: "none", sm: "flex" },
                        }}>
                        <Stack className="mainRootIcons"
                            sx={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "5px",
                            }}>
                            <IconButton
                                onClick={() => {
                                    navigate("/wishlist");
                                }}
                            >
                                <FavoriteBorderOutlined fontSize="medium" />
                            </IconButton>
                            <IconButton
                                onClick={() => {
                                    navigate("/coursesCart");
                                }}
                            >
                                <ShoppingCartOutlined fontSize="medium" />
                                <CartBadge badgeContent={0} color='warning' overlap="circular" />
                            </IconButton>
                        </Stack>
                        <Stack className="signInStatus" sx={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                        }}>
                            <Button variant="contained"
                                onClick={() => {
                                    navigate("/auth/signup");
                                }}
                                sx={{
                                    backgroundColor: theme.palette.primary.light,
                                    color: theme.palette.primary.main,
                                    fontWeight: "bold",
                                    opacity: 0.9,
                                    transition: "0.3s",
                                    '&:hover': {
                                        opacity: 1,
                                        backgroundColor: theme.palette.primary.main,
                                        color: "white",
                                    }
                                }}
                            >Create Account</Button>
                            <Button variant="contained"
                                onClick={() => {
                                    navigate("/auth");
                                }}
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    opacity: 0.9,
                                    transition: "0.3s",
                                    '&:hover': {
                                        opacity: 1,
                                        backgroundColor: theme.palette.primary.main,
                                        color: "white",
                                    }
                                }}>Sign In</Button>
                        </Stack>
                    </Stack>

                </Toolbar>
                <div className="divider" />
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default DrawerAppBar;
