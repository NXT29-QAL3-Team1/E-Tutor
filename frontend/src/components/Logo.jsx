// MUI Components
import { Box, Typography, useTheme } from '@mui/material'

// MUI Icons
import { SchoolOutlined } from '@mui/icons-material'

// React Router Hooks
import { useNavigate } from 'react-router-dom';

const Logo = ({ drawer, color = "black",onClick }) => {

    const theme = useTheme();

    const navigate = useNavigate();

    return (
        <Box onClick={() => {
            navigate("/");
            onClick();
        }}>
            <Typography variant="h6" sx={{
                my: 2,
                display: drawer ? "flex" : { xs: 'none', sm: 'flex' },
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                color: color,
            }}>
                <SchoolOutlined sx={{
                    color: theme.palette.primary.main,
                    fontSize: "40px",
                }} />
                E-tutor
            </Typography>
        </Box>
    )
}

export default Logo