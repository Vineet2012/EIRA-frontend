import { Box, Button, Rating, Typography } from "@mui/material";
import * as React from "react";
import { TextFieldWithLabelCmp } from "../../components/Inputs";
import StandardDialogCmp from "../../components/StandardDialogCmp";

export default function ReviewDialog({ open, handleClose }) {
  return (
    <StandardDialogCmp open={open} handleClose={handleClose} title="Add your review" fullWidth>
      <Box mt={2}>
        <TextFieldWithLabelCmp
          label="Describe your experience*"
          sideLabel="upto 250 characters"
          placeholder="Tell Us All About It! Describe Your Retreat Experience with a Dash of Your Personal Sparkle."
          multiline
          rows={4}
        />
        <Box display="flex" flexWrap="wrap" columnGap={8} rowGap={2} mt={4}>
          <RatingCmp label="Cleanliness" />
          <RatingCmp label="Communication" />
          <RatingCmp label="Checkin" />
          <RatingCmp label="Location" />
          <RatingCmp label="Value" />
        </Box>
        <Box mt={8}>
          <Button variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </StandardDialogCmp>
  );
}

function RatingCmp({ label }) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="body1" fontWeight={500} color="text.light">
        {label}
      </Typography>
      <Rating />
    </Box>
  );
}
