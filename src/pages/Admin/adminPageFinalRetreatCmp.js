import { Box } from "@mui/material";
import React from "react";
import { DropdownCmp, TextFieldWithLabelCmp } from "../../components/Inputs";
import { useMultipleSelectHook } from "../../hooks/useMultipleSelectHook";

export default function AdminPageFinalRetreatCmp() {
  const { state: activities, handleChange: handleChangeActivities } = useMultipleSelectHook();
  const { state: workshop, handleChange: handleChangeWorkshop } = useMultipleSelectHook();
  const { state: guide, handleChange: handleChangeGuide } = useMultipleSelectHook();
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Client User Name" placeholder="Client User Name" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Client Contact Email" placeholder="Client Contact Email" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Retreat Name" placeholder="Retreat Name" />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Accommodation" placeholder="Accommodation" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <DropdownCmp
            label="Activities"
            multiple
            options={activitiesOptions}
            value={activities}
            onChange={handleChangeActivities}
          />
        </Box>
        <Box flex={1}>
          <DropdownCmp
            label="Workshops"
            multiple
            options={WorkshopOptions}
            value={workshop}
            onChange={handleChangeWorkshop}
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={4}>
        <Box flex={1}>
          <DropdownCmp
            label="Guide"
            multiple
            options={guideOptions}
            value={guide}
            onChange={handleChangeGuide}
          />
        </Box>
        <Box flex={1}>
          <TextFieldWithLabelCmp label="Negotiated Price" placeholder="Negotiated Price" />
        </Box>
      </Box>
    </Box>
  );
}

const activitiesOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];

const WorkshopOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];

const guideOptions = [
  { id: 0, cmp: "Dedicated Workshop" },
  { id: 1, cmp: "Great Location" },
  { id: 2, cmp: "Dedicated Workshop" },
  { id: 3, cmp: "Great Location" },
  { id: 4, cmp: "Dedicated Workshop" },
];
