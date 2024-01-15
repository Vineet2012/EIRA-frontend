import { Box, Typography } from "@mui/material";

export default function FinalStepCmp() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={5}>
      <Box height={200}>
        <img src="/images/create-retreat-4.png" alt="confiremd" height="100%" />
      </Box>
      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5Alt" fontWeight={700}>
          You are scheduled
        </Typography>
        <Typography variant="body1" color="text.light">
          A calendar invitation has been sent to you email
        </Typography>
      </Box>
      <Box mt={2} borderRadius={3} bgcolor="secondary.main" py={2} px={4}>
        <Typography variant="body1" fontWeight={500} color="text.light">
          2 PM, Monday, December 2024
        </Typography>
      </Box>
    </Box>
  );
}
