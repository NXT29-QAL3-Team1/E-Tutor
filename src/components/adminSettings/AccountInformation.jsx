import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

export default function AccountInformation() {
  return (
    <Card
      sx={{
        mt: 3,
        borderRadius: "16px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 1, fontSize: "20px" }}
        >
          Account Information
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 1, display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary" , fontSize: "12px" }}
          >
            Role
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "12px" }}
          >
            Administrator
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "text.secondary", fontSize: "12px" }}
          >
            Member Since
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "12px" }}
          >
            January 1, 2024
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
