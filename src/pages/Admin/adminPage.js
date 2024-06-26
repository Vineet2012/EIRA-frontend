import { Box, Button, Tab, Tabs } from "@mui/material";
import {
  ActivityIconCmp,
  CheckIconCmp,
  SettingsGearIconCmp,
  WorkshopIconCmp,
} from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";
import { usePageStepHook } from "../../hooks/usePageStepHook";
import AdminPageAccommodationCmp from "./adminPageAccommodationCmp";
import AdminPageActivityCmp from "./adminPageActivityCmp";
import AdminPageConnoisseurCmp from "./adminPageConnoisseurCmp";
import AdminPageFinalRetreatCmp from "./adminPageFinalRetreatCmp";
import AdminpageProposalCmp from "./adminPageProposalCmp";
import AdminPageWorkshopCmp from "./adminPageWorkshopCmp";

export default function AdminPage() {
  const { stepNo, handleJump } = usePageStepHook();

  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="Admin" footer={<Footer />}>
        <TabsCmp value={stepNo} handleChange={(_, newVal) => handleJump(newVal)} />
        <Box mt={4}>
          {
            [
              <AdminPageActivityCmp />,
              <AdminPageWorkshopCmp />,
              <AdminPageAccommodationCmp />,
              <AdminPageConnoisseurCmp />,
              <AdminpageProposalCmp />,
              <AdminPageFinalRetreatCmp />,
            ][stepNo]
          }
        </Box>
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}

function TabsCmp({ value, handleChange }) {
  return (
    <Box borderBottom="0.5px solid rgba(33, 33, 33, 0.32)" sx={{ maxWidth: { md: "84vw" } }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab icon={<ActivityIconCmp />} iconPosition="start" label="Activity" />
        <Tab icon={<WorkshopIconCmp />} iconPosition="start" label="Workshop" />
        <Tab icon={<SettingsGearIconCmp />} iconPosition="start" label="Accommodation" />
        <Tab icon={<SettingsGearIconCmp />} iconPosition="start" label="Connoisseur" />
        <Tab icon={<SettingsGearIconCmp />} iconPosition="start" label="Proposal" />
        <Tab icon={<SettingsGearIconCmp />} iconPosition="start" label="Final Retreat" />
      </Tabs>
    </Box>
  );
}

function Footer() {
  return (
    <Button variant="contained" startIcon={<CheckIconCmp />} onClick={() => alert("to implement")}>
      Create
    </Button>
  );
}
