import { Stack } from '@mui/material'

export default function InstructorStackCard({ children }) {
    return (
        <Stack gap={1} flex={1}>
            {children}
        </Stack>
    )
}
