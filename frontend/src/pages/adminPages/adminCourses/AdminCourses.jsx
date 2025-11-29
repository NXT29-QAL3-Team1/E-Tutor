import React from 'react';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    InputAdornment,
    Chip,
    IconButton,
    Stack,
    Container,
    Typography,
    useTheme,
} from '@mui/material';
import {
    Search as SearchIcon,
    CheckCircleOutline,
    HighlightOff,
    DeleteOutline,
    EditOutlined,
} from '@mui/icons-material';

const courses = [
    {
        title: 'Advanced React Patterns',
        instructor: 'John Doe',
        students: 234,
        status: 'Pending',
    },
    {
        title: 'Web Design Fundamentals',
        instructor: 'Jane Smith',
        students: 567,
        status: 'Approved',
    },
    {
        title: 'TypeScript Mastery',
        instructor: 'Mike Johnson',
        students: 189,
        status: 'Approved',
    },
    {
        title: 'Backend Development',
        instructor: 'Sarah Brown',
        students: 342,
        status: 'Pending',
    },
    {
        title: 'UI/UX Design Bootcamp',
        instructor: 'Emma Wilson',
        students: 421,
        status: 'Approved',
    },
    {
        title: 'Mobile App Development',
        instructor: 'David Lee',
        students: 156,
        status: 'Rejected',
    },
];

const getStatusColor = (status) => {
    switch (status) {
        case 'Approved':
            return { bg: '#e8f5e8', color: '#2e7d32' };
        case 'Pending':
            return { bg: '#fff8e1', color: '#f9a825' };
        case 'Rejected':
            return { bg: '#ffebee', color: '#c62828' };
        default:
            return { bg: '#f5f5f5', color: '#666' };
    }
};

export default function AdminCourses() {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Search Bar */}
            <Paper elevation={0} sx={{ mb: 4, p: 2, borderRadius: 2, bgcolor: '#fafafa' }}>
                <TextField
                    fullWidth
                    placeholder="Search courses or instructors..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#999' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            bgcolor: 'white',
                            '& fieldset': { borderColor: '#e0e0e0' },
                        },
                    }}
                />
            </Paper>

            {/* Table */}
            <div
                style={{ overflow: 'hidden' }}
            >
                <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, overflow: 'auto' }}>
                    <Table sx={{ maxWidth: "100%" }}>
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                                <TableCell sx={{ fontWeight: 'bold', color: '#424242' }}>Course Title</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#424242' }}>Instructor</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#424242' }}>Students</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#424242' }}>Status</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courses.map((course, index) => {
                                const statusStyle = getStatusColor(course.status);

                                return (
                                    <TableRow
                                        key={index}
                                        hover
                                        sx={{
                                            '&:nth-of-type(odd)': { bgcolor: '#fafafa' },
                                            '&:last-child td, &:last-child th': { border: 0 },
                                        }}
                                    >
                                        <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                                            {course.title}
                                        </TableCell>
                                        <TableCell>{course.instructor}</TableCell>
                                        <TableCell>{course.students.toLocaleString()}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={course.status}
                                                size="small"
                                                sx={{
                                                    bgcolor: statusStyle.bg,
                                                    color: statusStyle.color,
                                                    fontWeight: 'bold',
                                                    fontSize: '0.75rem',
                                                    height: 28,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Stack direction="row" justifyContent="center" spacing={1}>
                                                {course.status === 'Pending' ? (
                                                    <>
                                                        <IconButton size="small" color="success">
                                                            <CheckCircleOutline fontSize="small" />
                                                        </IconButton>
                                                        <IconButton size="small" color="error">
                                                            <HighlightOff fontSize="small" />
                                                        </IconButton>
                                                    </>
                                                ) : course.status === 'Rejected' ? null : (
                                                    <IconButton size="small" color="primary">
                                                        <EditOutlined fontSize="small" />
                                                    </IconButton>
                                                )}
                                                <IconButton size="small" sx={{ color: '#e91e63' }}>
                                                    <DeleteOutline fontSize="small" />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </Container>
    );
}