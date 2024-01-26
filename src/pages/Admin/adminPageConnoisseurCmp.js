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

export default function AdminPageConnoisseurCmp() {
  const { search } = useParams();
  const { state: city, handleChange: handleChangeCity } = useMultipleSelectHook();
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light" pb={1.3}>
            Name
          </Typography>
          <TextFieldWithDropdownCmp
            placeholder="Name"
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
            ]}
            onClickAction={() => {}}
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Eira Title" placeholder="Eira Title" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Description" placeholder="Description" multiline />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Contact Number" placeholder="Contact Number" />
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
          <TextFieldWithLabelCmp label="Country" placeholder="Country" />
        </Box>
        <DropdownCmp
          label="What this place offers"
          multiple
          options={cityOptions}
          value={city}
          onChange={handleChangeCity}
        />
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Price" placeholder="Price" />
        </Box>
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light">
            Image
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

const cityOptions = [
  { id: 0, cmp: "Paris" },
  { id: 1, cmp: "Shanghai" },
  { id: 2, cmp: "London" },
  { id: 3, cmp: "Seoul" },
  { id: 4, cmp: "Tokyo" },
];
