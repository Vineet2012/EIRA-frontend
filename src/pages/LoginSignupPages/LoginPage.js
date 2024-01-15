import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconWithTextSimpleChipCmp, TextWithLinkCmp } from "../../components/Chips";
import { GoogleIconCmp } from "../../components/Icons";
import { TextFieldWithLabelCmp } from "../../components/Inputs";
import { LoginSignupPagesLayoutCmp } from "../../components/Layouts";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <LoginSignupPagesLayoutCmp>
      <Typography variant="h4Alt" fontWeight={700}>
        Welcome to EIRA
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
          label="Sign in with Google"
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
        <Box display="flex" flexDirection="column">
          <TextFieldWithLabelCmp label="Password" type="password" />
          <Box alignSelf="flex-end" mt={1} sx={{ cursor: "pointer" }}>
            <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/forgot-password")}>
              <Typography color="text.light">Forgot Password?</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Button variant="contained" fullWidth onClick={() => navigate("/home")}>
          Login
        </Button>
      </Box>
      <TextWithLinkCmp
        label="Don’t have an account?"
        linkText="Signup for free."
        onClick={() => navigate("/signup")}
      />
    </LoginSignupPagesLayoutCmp>
  );
}
