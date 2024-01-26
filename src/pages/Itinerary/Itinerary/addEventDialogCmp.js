import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { MultiChipsCmp } from "../../../components/Chips";
import { TextFieldWithLabelCmp } from "../../../components/Inputs";
import StandardDialogCmp from "../../../components/StandardDialogCmp";

export default function AddEventDialogCmp({ open, handleClose }) {
  return (
    <StandardDialogCmp
      open={open}
      handleClose={handleClose}
      title="Add a event"
      maxWidth="xs"
      fullWidth
    >
      <Box display="flex" flexDirection="column" mt={2} rowGap={2}>
        <TextFieldWithLabelCmp label="Name of the event" />
        <TextFieldWithLabelCmp label="Description" />
        <TextFieldWithLabelCmp label="Participants" />
        <TimeCmp />
      </Box>
      <Box mt={8}>
        <Button variant="contained" fullWidth>
          Submit
        </Button>
      </Box>
    </StandardDialogCmp>
  );
}

function TimeCmp() {
  return (
    <Box mt={4}>
      <Typography variant="body1" fontWeight={500} color="text.light">
        Time Slot
      </Typography>
      <Box mt={2}>
        <MultiChipsCmp
          data={[
            { id: 1, text: "11 AM" },
            { id: 2, text: "12 PM" },
            { id: 3, text: "1 PM" },
            { id: 4, text: "2 PM" },
            { id: 5, text: "3 PM" },
            { id: 6, text: "4 PM" },
            { id: 7, text: "5 PM" },
          ]}
          xs={3}
          spacing={2}
          height={48}
          maxSelectItems={1}
        />
      </Box>
    </Box>
  );
}
