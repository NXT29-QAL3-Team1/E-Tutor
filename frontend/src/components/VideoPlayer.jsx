import { Box } from '@mui/material'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function VideoPlayer({ id }) {
  const [courseAPIInfo, setCourseAPIInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourseAPIInfo(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch course data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p>Loading course...</p>;
  if (error) return <p>{error}</p>;
  if (!courseAPIInfo) return null;

  return (
    <Box
      component="video"
      src={courseAPIInfo.trailer}
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
