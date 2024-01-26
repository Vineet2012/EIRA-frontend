import { Box, TextField, Typography } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import React from "react";
import { useParams } from "react-router-dom";
import { SearchIconCmp } from "../../components/Icons";
import {
  DropdownCmp,
  TextFieldWithDropdownCmp,
  TextFieldWithLabelCmp,
} from "../../components/Inputs";
import { useMultipleSelectHook } from "../../hooks/useMultipleSelectHook";

export default function AdminPageAccommodationCmp() {
  const { search } = useParams();
  const { state: places, handleChange: handleChangePlaces } = useMultipleSelectHook();
  const { state: offering, handleChange: handleChangeOffering } = useMultipleSelectHook();
  const { state: policies, handleChange: handleChangePolicies } = useMultipleSelectHook();
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light" pb={1.3}>
            Hotel Name
          </Typography>
          <TextFieldWithDropdownCmp
            placeholder="Hotel Name"
            actionText="See all results for "
            resultsHeading="Suggestions"
            defaultValue={search}
            results={[
              {
                icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
                text: "A Modern Design Hotel above the Ocean",
              },
              {
                icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
                text: "A taste of sea with a touch of land",
              },
              {
                icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
                text: "Wellness Amenities",
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
          <TextFieldWithLabelCmp label="Hospitality Provider" placeholder="Hospitality Provider" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Contact Number" placeholder="Contact Number" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Short Description"
            placeholder="Short Description"
            multiline
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Long Description"
            placeholder="Long Description"
            multiline
          />
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
          <TextFieldWithLabelCmp label="Country Name" placeholder="Country Name" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="City Name" placeholder="City Name" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Geo Location" placeholder="Geo Location" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Max Occupancy (No. of People)"
            placeholder="Max Occupancy (No. of People)"
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Max Occupancy (No. of Rooms)"
            placeholder="Max Occupancy (No. of Rooms)"
          />
        </Box>
      </Box>
      <Box display="flex" width="100%" columnGap={4}>
        <DropdownCmp
          label="What this place offers"
          multiple
          options={whatPlaceOfferOptions}
          value={places}
          onChange={handleChangePlaces}
        />
        <DropdownCmp
          label="Highlights"
          options={HighlightsOptions}
          multiple
          value={offering}
          onChange={handleChangeOffering}
        />
      </Box>
      <Box display="flex" width="100%" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Price" placeholder="Price" />
        </Box>
        <DropdownCmp
          label="Policies"
          options={PoliciesOptions}
          multiple
          value={policies}
          onChange={handleChangePolicies}
        />
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Things to Expect Description"
            placeholder="Things to Expect Description"
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp
            label="Things you Love Description"
            placeholder="Things you Love Description"
          />
        </Box>
      </Box>
    </Box>
  );
}

const whatPlaceOfferOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];

const HighlightsOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];

const PoliciesOptions = [
  { id: 0, cmp: "Pets are not allowed." },
  { id: 1, cmp: "Smoking not allowed." },
  { id: 2, cmp: "Outside food is not allowed." },
  { id: 3, cmp: "Groups with only male guests are not allowed at this property" },
  { id: 4, cmp: "Passport, Driving License, Govt. ID and Aadhar are accepted as ID proof(s)" },
];
