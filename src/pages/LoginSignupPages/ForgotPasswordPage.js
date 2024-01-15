import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TextWithLinkCmp } from "../../components/Chips";
import { TextFieldWithLabelCmp } from "../../components/Inputs";
import { LoginSignupPagesLayoutCmp } from "../../components/Layouts";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <LoginSignupPagesLayoutCmp backBtn rowGap={6}>
      <Typography variant="h4Alt" fontWeight={700}>
        Forgot Password
      </Typography>
      <TextFieldWithLabelCmp label="Email Address" />
      <Box>
        <Button
          variant="contained"
          fullWidth
          onClick={() => navigate("/verify-otp?email=email@example.com")}
        >
          Send OTP
        </Button>
      </Box>
      <Box flex={1} />
      <Box textAlign="center" mb={2}>
        <Typography color="text.light">Having trouble loggin in?</Typography>
        <TextWithLinkCmp label="Get support at" linkText="customer@eira.com" />
      </Box>
    </LoginSignupPagesLayoutCmp>
  );
}
