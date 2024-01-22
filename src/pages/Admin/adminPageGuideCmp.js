import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UploadIconCmp } from "../../components/Icons";
import { TextFieldWithLabelCmp } from "../../components/Inputs";

export default function AdminPageGuideCmp() {
  return (
    <Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Guide Name" placeholder="Guide Name" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Guide Description" placeholder="Guide Description" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4} mt={3}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Location" placeholder="Location" />
        </Box>
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light">
            Upload Picture
          </Typography>
          <Box pt={1} />
          <Button
            variant="outlined"
            fullWidth
            startIcon={<UploadIconCmp />}
            sx={{ color: "text.light", fontWeight: 500, padding: 1.8 }}
          >
            Upload
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
