import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginSignupPagesLayoutCmp } from "../../components/Layouts";

export default function PasswordChangedPage() {
  const navigate = useNavigate();

  return (
    <LoginSignupPagesLayoutCmp rowGap={0}>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box>
          <img src="/images/password-changed.png" alt="password changed" />
        </Box>
        <Box pt={2} />
        <Typography variant="h4Alt" fontWeight={700}>
          Password Changed
        </Typography>
        <Box pt={1} />
        <Typography color="text.light">Your password has been changed successfully.</Typography>
        <Box pt={4} />
        <Button variant="contained" fullWidth onClick={() => navigate("/login")}>
          Back to Login
        </Button>
      </Box>
    </LoginSignupPagesLayoutCmp>
  );
}
