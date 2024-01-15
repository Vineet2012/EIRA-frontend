import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function OnboardingPage() {
  return (
    <Box
      minHeight="100vh"
      position="relative"
      bgcolor="background.main"
      display="flex"
      flexDirection
      alignItems="center"
      justifyContent="center"
    >
      <Box width="40%" py={8}>
        <Outlet />
      </Box>
    </Box>
  );
}
