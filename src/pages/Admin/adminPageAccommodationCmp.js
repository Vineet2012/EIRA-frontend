import { Box } from "@mui/material";
import React from "react";
import { DropdownCmp, TextFieldWithLabelCmp } from "../../components/Inputs";
import { useMultipleSelectHook } from "../../hooks/useMultipleSelectHook";

export default function AdminPageAccommodationCmp() {
  const { state: places, handleChange: handleChangePlaces } = useMultipleSelectHook();
  const { state: offering, handleChange: handleChangeOffering } = useMultipleSelectHook();
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Title" placeholder="Title" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Occupancy" placeholder="Occupancy" />
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
          <TextFieldWithLabelCmp label="Description" placeholder="Description" />
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
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Things to expect" placeholder="Things to expect" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Things you love" placeholder="Things you love" />
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
