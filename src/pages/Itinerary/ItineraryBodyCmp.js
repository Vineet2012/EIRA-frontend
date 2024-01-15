import { Box, Tab, Tabs } from "@mui/material";
import {
  MembersIconCmp,
  PathJoinIconCmp,
  PoliciesIconCmp,
  SettingsGearIconCmp,
} from "../../components/Icons";
import { usePageStepHook } from "../../hooks/usePageStepHook";
import ItineraryTabItineraryCmp from "./Itinerary/ItineraryTabItineraryCmp";
import ItineraryTabParticipantsCmp from "./ItineraryTabParticipantsCmp.js";
import ItineraryTabPolicyCmp from "./ItineraryTabPolicyCmp.js";
import ItineraryTabOverviewCmp from "./Overview/ItineraryTabOverviewCmp";

export default function ItineraryBodyCmp() {
  const { stepNo, handleJump } = usePageStepHook("tab");

  return (
    <Box>
      <TabsCmp value={stepNo} handleChange={(_, newVal) => handleJump(newVal)} />
      <Box mt={8} />
      {
        [
          <ItineraryTabOverviewCmp />,
          <ItineraryTabItineraryCmp />,
          <ItineraryTabPolicyCmp />,
          <ItineraryTabParticipantsCmp />,
        ][stepNo]
      }
    </Box>
  );
}

function TabsCmp({ value, handleChange }) {
  return (
    <Box borderBottom="0.5px solid rgba(33, 33, 33, 0.32)">
      <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example">
        <Tab icon={<SettingsGearIconCmp />} iconPosition="start" label="Overview" />
        <Tab icon={<PathJoinIconCmp />} iconPosition="start" label="itinerary" />
        <Tab icon={<PoliciesIconCmp />} iconPosition="start" label="Policies" />
        <Tab icon={<MembersIconCmp />} iconPosition="start" label="Participants" />
      </Tabs>
    </Box>
  );
}
