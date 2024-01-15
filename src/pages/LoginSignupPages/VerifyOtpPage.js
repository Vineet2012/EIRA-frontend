import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TextWithLinkCmp } from "../../components/Chips";
import { TextFieldWithLabelCmp } from "../../components/Inputs";
import { LoginSignupPagesLayoutCmp } from "../../components/Layouts";

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const email = React.useMemo(() => searchParams.get("email"), [searchParams]);

  return (
    <LoginSignupPagesLayoutCmp backBtn rowGap={4}>
      <Typography variant="h4Alt" fontWeight={700}>
        OTP Verification
      </Typography>
      <Box bgcolor="secondary.light" p={2} borderRadius={4}>
        <Typography variant="body2" component="span" color="text.light">
          Enter the 6-digit OTP we have sent to your registered email address{" "}
          <Typography variant="body2" component="span" fontWeight={700} color="primary">
            {email}
          </Typography>
        </Typography>
      </Box>
      <TextFieldWithLabelCmp label="Enter Otp" letterSpacing={10} />
      <Box>
        <Button variant="contained" fullWidth onClick={() => navigate("/new-password")}>
          Confirm
        </Button>
      </Box>
      <TextWithLinkCmp label="Didn’t received the OTP?" linkText="Wait for 20s" />

      <Box flex={1} />
      <Box textAlign="center" mb={2}>
        <Typography color="text.light">Having trouble loggin in?</Typography>
        <TextWithLinkCmp label="Get support at" linkText="customer@eira.com" />
      </Box>
    </LoginSignupPagesLayoutCmp>
  );
}
