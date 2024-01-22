import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UploadIconCmp } from "../../components/Icons";
import { TextFieldWithLabelCmp } from "../../components/Inputs";

export default function AdminPageActivityCmp() {
  return (
    <Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Activity Name" placeholder="Activity Name" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Activity Description" placeholder="Activity Description" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4} mt={3}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Start Date" placeholder="DD/MM/YYYY" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="End Date" placeholder="DD/MM/YYYY" />
        </Box>
      </Box>
      <Box flex={1} mt={3}>
        <Typography fontWeight={500} color="text.light">
          Upload Picture
        </Typography>
        <Box pt={1} />
        <Button
          variant="outlined"
          startIcon={<UploadIconCmp />}
          sx={{ color: "text.light", fontWeight: 500 }}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
}
