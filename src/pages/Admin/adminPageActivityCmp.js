import { Box, Button, TextField, Typography } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import React from "react";
import { useParams } from "react-router-dom";
import { SearchIconCmp, UploadIconCmp } from "../../components/Icons";
import {
  DropdownCmp,
  TextFieldWithDropdownCmp,
  TextFieldWithLabelCmp,
} from "../../components/Inputs";
import { useMultipleSelectHook } from "../../hooks/useMultipleSelectHook";

export default function AdminPageActivityCmp() {
  const { search } = useParams();
  const { state: timeSlot, handleChange: handleChangeTimeSlots } = useMultipleSelectHook();
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light" pb={1.3}>
            Activity Name
          </Typography>
          <TextFieldWithDropdownCmp
            placeholder="Activity Name"
            actionText="See all results for "
            resultsHeading="Suggestions"
            defaultValue={search}
            results={[
              {
                icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
                text: "Horse Riding",
              },
              {
                icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
                text: "Skiing",
              },
              {
                icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
                text: "Spa and sauna",
              },
            ]}
            onClickAction={() => {}}
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Activity Contact Name"
            placeholder="Activity Contact Name"
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Activity Contact Number"
            placeholder="Activity Contact Number"
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Activity Provider Name"
            placeholder="Activity Provider Name"
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Description Long"
            placeholder="Description Long"
            multiline
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Description Short"
            placeholder="Description Short"
            multiline
          />
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
        <Box flex={1}>
          <DropdownCmp
            label="Available Time Slots"
            multiple
            options={timeSlotOptions}
            value={timeSlot}
            onChange={handleChangeTimeSlots}
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Price" placeholder="Price" />
        </Box>
      </Box>
      <Box display="flex" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Activity Type" placeholder="Activity Type" />
        </Box>
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light">
            Activity Image
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

const timeSlotOptions = [
  { id: 0, cmp: "10:00 AM - 12:00 PM" },
  { id: 1, cmp: "12:00 PM - 14:00 PM" },
  { id: 2, cmp: "15:00 PM - 17:00 PM" },
  { id: 3, cmp: "17:00 PM - 19:00 PM" },
  { id: 4, cmp: "19:00 PM - 21:00 PM" },
];
