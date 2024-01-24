import { Box, Button, TextField, Typography } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import React from "react";
import { UploadIconCmp } from "../../components/Icons";
import { DropdownCmp, TextFieldWithLabelCmp } from "../../components/Inputs";
import { useMultipleSelectHook } from "../../hooks/useMultipleSelectHook";

export default function AdminpageProposalCmp() {
  const { state: purpose, handleChange: handleChangePurpose } = useMultipleSelectHook();
  const { state: typeOfAudience, handleChange: handleChangeAudience } = useMultipleSelectHook();
  const { state: highlightingActivities, handleChange: handleChangeHighlightingActivities } =
    useMultipleSelectHook();
  const { state: highlightingWorkshops, handleChange: handleChangeHighlightingWorkshops } =
    useMultipleSelectHook();
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Adding Accommodation" placeholder="Adding Accommodation" />
        </Box>
        <Box flex={1}>
          <DropdownCmp
            label="purpose"
            multiple
            options={purposeOptions}
            value={purpose}
            onChange={handleChangePurpose}
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Short Description" placeholder="Short Description" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Long Description" placeholder="Long Description" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <DropdownCmp
            label="Type of Audience"
            multiple
            options={typeOfAudienceOptions}
            value={typeOfAudience}
            onChange={handleChangeAudience}
          />
        </Box>
        <Box flex={1}>
          <DropdownCmp
            label="Highlighting Activities"
            multiple
            options={highlightingActivitiesOptions}
            value={highlightingActivities}
            onChange={handleChangeHighlightingActivities}
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <DropdownCmp
            label="Highlighting Workshops"
            multiple
            options={highlightingWorkshopsOptions}
            value={highlightingWorkshops}
            onChange={handleChangeHighlightingWorkshops}
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Price" placeholder="Price" />
        </Box>
      </Box>
      <Box display="flex" columnGap={4} width="100%">
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light">
            Availability
          </Typography>
          <Box pt={1} />
          <DateRangePicker
            disablePast
            label="Start Date"
            sx={{ width: "100%" }}
            // value={value}
            // maxDate={getWeeksAfter(value[0], 4)}
            // onChange={(newValue) => {
            //   setValue(newValue);
            // }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box>
          <Typography fontWeight={500} color="text.light">
            Image Upload
          </Typography>
          <Box pt={1} />
          <Button
            variant="outlined"
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

const purposeOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];

const typeOfAudienceOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];

const highlightingActivitiesOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];

const highlightingWorkshopsOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];
