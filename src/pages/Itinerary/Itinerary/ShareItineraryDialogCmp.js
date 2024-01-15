import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { IconWithTextSimpleChipCmp } from "../../../components/Chips";
import { AddCircleIconCmp, CrossIconCmp } from "../../../components/Icons";
import StandardDialogCmp from "../../../components/StandardDialogCmp";

export default function ShareItineraryDialogCmp({ open, handleClose }) {
  return (
    <StandardDialogCmp
      open={open}
      handleClose={handleClose}
      title="Share Itinerary"
      maxWidth="xs"
      fullWidth
    >
      <Typography fontWeight={500} color="text.light" mt={4}>
        Share itinerary via email
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
        <TextField placeholder="Planner’s email" />
        <TextField placeholder="Planner’s email" />
      </Box>
      <Box sx={{ cursor: "pointer" }} mt={2}>
        <IconWithTextSimpleChipCmp
          icon={AddCircleIconCmp}
          label="Invite more people"
          fontWeight={700}
        />
      </Box>
      <Box mt={8}>
        <Button variant="contained" fullWidth>
          Submit
        </Button>
      </Box>
    </StandardDialogCmp>
  );
}
