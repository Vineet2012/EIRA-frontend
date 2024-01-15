import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconWithTextSimpleChipCmp, TextWithLinkCmp } from "../../components/Chips";
import { GoogleIconCmp } from "../../components/Icons";
import { TextFieldWithLabelCmp } from "../../components/Inputs";
import { LoginSignupPagesLayoutCmp } from "../../components/Layouts";

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <LoginSignupPagesLayoutCmp>
      <Typography variant="h4Alt" fontWeight={700}>
        Join the Eira Experience
      </Typography>
      <Box
        bgcolor="secondary.main"
        p={2}
        borderRadius={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <IconWithTextSimpleChipCmp
          icon={GoogleIconCmp}
          label="Sign up with Google"
          large
          fontWeight={700}
          columnGap={1}
        />
      </Box>
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        width="100%"
        borderBottom="1px solid rgba(230, 230, 230, 1)"
      >
        <Box position="absolute" top={-12} bgcolor="#fff" px={1}>
          <Typography fontWeight={600} color="text.light">
            OR
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" rowGap={2}>
        <TextFieldWithLabelCmp label="Email Address" />
        <TextFieldWithLabelCmp label="Password" type="password" />
        <TextFieldWithLabelCmp label="Confirm Password" type="password" />
      </Box>
      <Box>
        <Button variant="contained" fullWidth onClick={() => navigate("/onboarding")}>
          Sign Up
        </Button>
      </Box>
      <TextWithLinkCmp
        label="Already have an account?"
        linkText="Login"
        onClick={() => navigate("/login")}
      />
      <Typography variant="caption" color="text.light" component="span">
        Your account creation signals agreement with our{" "}
        <Box component="span" sx={{ textDecoration: "underline", cursor: "pointer" }}>
          Terms & Privacy
        </Box>
      </Typography>
      <Box mb={0.5} />
    </LoginSignupPagesLayoutCmp>
  );
}
