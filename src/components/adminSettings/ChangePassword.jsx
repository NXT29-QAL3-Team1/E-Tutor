import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleShow = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = () => {
    // TODO: Add password update logic (API call, validation, etc.)
    console.log("Password change request:", formData);
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
          Change Password
        </Typography>

        {/* Current Password */}
        <Typography
          variant="body2"
          sx={{ mb: 1, fontWeight: 500, fontSize: "16px" }}
        >
          Current Password
        </Typography>
        <TextField
          fullWidth
          name="currentPassword"
          type={showPassword.current ? "text" : "password"}
          value={formData.currentPassword}
          onChange={handleChange}
          placeholder="Enter current password"
          variant="outlined"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined sx={{ color: "#888" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleToggleShow("current")}>
                  {showPassword.current ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            "& .MuiInputBase-input": { fontSize: "14px" },
          }}
        />

        {/* New Password */}
        <Typography
          variant="body2"
          sx={{ mb: 1, fontWeight: 500, fontSize: "16px" }}
        >
          New Password
        </Typography>
        <TextField
          fullWidth
          name="newPassword"
          type={showPassword.new ? "text" : "password"}
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="Enter new password"
          variant="outlined"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined sx={{ color: "#888" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleToggleShow("new")}>
                  {showPassword.new ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            "& .MuiInputBase-input": { fontSize: "14px" },
          }}
        />

        {/* Confirm Password */}
        <Typography
          variant="body2"
          sx={{ mb: 1, fontWeight: 500, fontSize: "16px" }}
        >
          Confirm New Password
        </Typography>
        <TextField
          fullWidth
          name="confirmPassword"
          type={showPassword.confirm ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter new password"
          variant="outlined"
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined sx={{ color: "#888" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleToggleShow("confirm")}>
                  {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            "& .MuiInputBase-input": { fontSize: "14px" },
          }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{
            bgcolor: "#FF6636",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "10px",
            py: 1.2,
            fontSize: "15px",
            textTransform: "none",
            "&:hover": { bgcolor: "#e55a2f" },
          }}
        >
          Update Password
        </Button>
      </CardContent>
    </Card>
  );
}
