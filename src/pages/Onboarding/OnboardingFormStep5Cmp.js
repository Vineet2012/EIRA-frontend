import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import { AddCircleIconCmp, CrossIconCmp } from "../../components/Icons";

export default function OnboardingFormStep5Cmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
      <Box>
        <Typography variant="h5Alt" fontWeight={700}>
          Congratulations! you are just one step away.
        </Typography>
        <Box pt={1} />
        <Typography variant="body2Alt" color="text.light">
          Your choice here won’t limit what you can do in EIRA.You can adjust these settings now or
          change them later from your profile.
        </Typography>
      </Box>
      <Box>
        <Typography fontWeight={500} color="text.light" mt={4}>
          Invite your team via mail
        </Typography>
        <Box display="flex" flexDirection="column" mt={2} rowGap={2}>
          <TextField
            defaultValue="krishna@gmail.com"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small">
                    <CrossIconCmp />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            defaultValue="krishna2@gmail.com"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small">
                    <CrossIconCmp />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField placeholder="Enter Email" />
        </Box>
        <Box sx={{ cursor: "pointer" }} mt={2}>
          <IconWithTextSimpleChipCmp
            icon={AddCircleIconCmp}
            label="Invite more people"
            fontWeight={700}
          />
        </Box>
        <Box mt={4} />
      </Box>
    </Box>
  );
}
