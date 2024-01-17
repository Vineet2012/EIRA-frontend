import { Box, Typography } from "@mui/material";
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
      <Box position="fixed" top={40} left={40}>
        <Typography variant="h3">EIRA</Typography>
      </Box>
      <Box py={8} width="100%">
        <Outlet />
      </Box>
    </Box>
  );
}
