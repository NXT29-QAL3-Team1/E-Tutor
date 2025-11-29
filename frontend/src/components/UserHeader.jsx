import { Avatar, Card, Typography } from '@mui/material';
import  { useState } from 'react'

export default function UserHeader() {

  const [profile, setProfile] = useState({
    fullName: "Admin User",
    email: "admin@admin.com",
    bio: "Platform administrator and founder",
  });

 

  return (
    <Card
      sx={{
        textAlign: "center",
        p: 3,
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "#FF6636",
          width: 80,
          height: 80,
          mx: "auto",
          mb: 2,
          fontSize: 36,
        }}
      >
        A
      </Avatar>
      <Typography variant="h6" sx={{ fontSize: "20px", fontWeight: "600" }}>
        {profile.fullName}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "14px" }}
        color="text.secondary"
      >
        Administrator
      </Typography>
    </Card>
  );
}
