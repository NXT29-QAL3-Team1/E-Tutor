import { Box } from '@mui/material'
import courseInfo from '../pages/mainPages/courseDetails/courseInfo';

export default function VideoPlayer() {
  return (
    <Box
      component="video"
      src={courseInfo.course.videoURL}
      controls
      muted
      sx={{
        width: "100%",
        borderRadius: 2,
        mt: 3,
        boxShadow: 2,
        objectFit: "cover",
      }}
    />
  )
}
