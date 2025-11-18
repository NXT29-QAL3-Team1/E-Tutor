import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function ProfileInfoCard() {
  const [profile, setProfile] = useState({
    fullName: "Admin User",
    email: "admin@edulearn.com",
    bio: "Platform administrator and founder",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile Saved!");
  };

  return (
    <Card
      sx={{
        borderRadius: "16px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        mt: 3,
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 3, fontSize: "20px" }}
        >
          Profile Information
        </Typography>

        {/* Full Name */}
        <Typography
          variant="body2"
          sx={{ mb: 1, fontWeight: 500, fontSize: "16px" }}
        >
          Full Name
        </Typography>
        <TextField
          fullWidth
          name="fullName"
          value={profile.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          variant="outlined"
          size="medium"
          sx={{
            mb: 2,
            fontSize: "14px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              fontSize: "14px",
            },
          }}
        />

        {/* Email */}
        <Typography
          variant="body2"
          sx={{ mb: 1, fontWeight: 500, fontSize: "16px" }}
        >
          Email Address
        </Typography>
        <TextField
          fullWidth
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email Address"
          variant="outlined"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "#888" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              fontSize: "14px",
            },
          }}
        />

        {/* Bio */}
        <Typography
          variant="body2"
          sx={{ mb: 1, fontWeight: 500, fontSize: "16px" }}
        >
          Bio
        </Typography>
        <TextField
          fullWidth
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          multiline
          minRows={3}
          placeholder="Bio"
          variant="outlined"
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": {
              fontSize: "14px",
            },
          }}
        />

        {/* Save Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSave}
          startIcon={<EmailIcon />}
          sx={{
            bgcolor: "#FF6636",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "10px",
            py: 1.2,
            fontSize: "15px",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#e55a2f",
            },
          }}
        >
          Save Profile
        </Button>
      </CardContent>
    </Card>
  );
}
