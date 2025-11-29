import { Box } from "@mui/material";
import ProfileInfoCard from "../../../components/ProfileInfoCard";
import ChangePassword from "../../../components/ChangePassword";
import AccountInformation from "../../../components/AccountInformation";
import UserHeader from "../../../components/UserHeader";

export default function AccountSettings() {
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

            {/* Account Info */}
            <AccountInformation />

        </Box>
    );
}