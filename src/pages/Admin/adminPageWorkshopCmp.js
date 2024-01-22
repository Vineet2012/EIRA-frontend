import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UploadIconCmp } from "../../components/Icons";
import { TextFieldWithLabelCmp } from "../../components/Inputs";

export default function AdminPageWorkshopCmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Workshop Name" placeholder="Workshop Name" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Workshop Description" placeholder="Workshop Description" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Location" placeholder="Location" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Duration" placeholder="Duration" />
        </Box>
      </Box>
      <Box display="flex" columnGap={4}>
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light">
            Workshop Image
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
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Workshop Type" placeholder="Workshop Type" />
        </Box>
      </Box>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider> */}
    </Box>
  );
}
