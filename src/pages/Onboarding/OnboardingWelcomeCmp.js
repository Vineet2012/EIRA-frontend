import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowHorizontalIconCmp } from "../../components/Icons";

export default function OnboardingWelcomeCmp() {
  const navigate = useNavigate();

  return (
    <Box width="40%" margin="0 auto">
      <Box textAlign="center">
        <Typography variant="h3Alt" fontWeight={700}>
          Welcome to EIRA
        </Typography>
      </Box>
      <Box
        borderRadius={4}
        display="flex"
        alignItems="center"
        columnGap={2}
        bgcolor="#fff"
        p={4}
        mt={2}
        mb={2}
      >
        <Box>
          <Typography variant="h4">
            Let’s get you shaping your first retreat as quickly as possible!
          </Typography>
          <br />
          <Typography color="text.light">
            This setup guide will quickly get the basics of your organization. It’ll take about 90
            seconds if you have all the information in your hand.
          </Typography>
        </Box>
        <Box height={180}>
          <img src="/images/onboarding-welcome.png" alt="welcome" style={{ height: "100%" }} />
        </Box>
      </Box>
      <Button
        endIcon={<ArrowHorizontalIconCmp />}
        variant="contained"
        fullWidth
        onClick={() => navigate("form")}
      >
        Continue
      </Button>
    </Box>
  );
}
