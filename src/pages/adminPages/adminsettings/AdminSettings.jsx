import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import AccountInformation from "../../../components/adminSettings/AccountInformation";
import ChangePassword from "../../../components/adminSettings/ChangePassword";
import ProfileInfoCard from "../../../components/adminSettings/ProfileInfoCard";
import UserHeader from "../../../components/adminSettings/UserHeader";

export default function AdminSettings() {
  return (
    <Box
      sx={{
        maxWidth: 700,
        mx: "auto",
        mt: 6,
        mb: 6,
        p: 2,
      }}
    >
      {/* User Header */}

      <UserHeader />

      {/* Profile Info */}
      <ProfileInfoCard />

      {/* Change Password */}
      <ChangePassword />

      {/* Account Infoo */}
      <AccountInformation />
    </Box>
  );
}
