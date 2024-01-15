import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TextWithLinkCmp } from "../../components/Chips";
import { TextFieldWithLabelCmp } from "../../components/Inputs";
import { LoginSignupPagesLayoutCmp } from "../../components/Layouts";

export default function NewPasswordPage() {
  const navigate = useNavigate();

  return (
    <LoginSignupPagesLayoutCmp rowGap={4}>
      <Typography variant="h4Alt" fontWeight={700}>
        New Password
      </Typography>
      <TextFieldWithLabelCmp label="New Password" />
      <TextFieldWithLabelCmp label="Confirm Password" />
      <Box>
        <Button variant="contained" fullWidth onClick={() => navigate("/password-changed")}>
          confirm
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
