import { Paper, Typography } from '@mui/material'

export default function TitlePaper({title}) {
    return (
        <Paper sx={{ p: 1 }}>
            <Typography variant="h6">{title}</Typography>
        </Paper>
    )
}
