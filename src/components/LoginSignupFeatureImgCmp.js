import { Box, Typography } from "@mui/material";

export default function LoginSignupFeatureImgCmp() {
  return (
    <Box minHeight="100vh" height="100%" display="flex" flexDirection="column">
      <Box m={1} flex={1} bgcolor="secondary.main" p={4} borderRadius={4} position="relative">
        <Typography variant="h1Alt" fontWeight={700} color="primary">
          Bespoke Retreats,
          <br /> Executed to <br /> Perfection.
        </Typography>
        <Box mt={2} />
        <Typography variant="h4">
          Your team, your <br /> vision—let's plan <br /> an experience that <br /> resonates.
        </Typography>
        <Box position="absolute" bottom={40} right={40} height="70%">
          <img src="/images/login-page-1.png" alt="login feature" style={{ height: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
}
