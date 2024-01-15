import { Box, Button, Tab, Tabs } from "@mui/material";
import {
  CheckIconCmp,
  ChevronArrowIconCmp,
  OfferingsIconCmp,
  ProfileIconCmp,
  SettingsGearIconCmp,
} from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";
import { usePageStepHook } from "../../hooks/usePageStepHook";
import CollaborationSettingsCmp from "./CollaborationSettingsCmp";
import MyProfileSettingsCmp from "./MyProfileSettingsCmp";
import OrganisationSettingsCmp from "./OrganisationSettingsCmp";
import SubscriptionSettingsCmp from "./SubscriptionSettingsCmp";

export default function SettingsPage() {
  const { stepNo, handleJump } = usePageStepHook();

  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="Settings" footer={<Footer stepNo={stepNo} />}>
        <TabsCmp value={stepNo} handleChange={(_, newVal) => handleJump(newVal)} />
        <Box mt={4}>
          {
            [
              <MyProfileSettingsCmp />,
              <OrganisationSettingsCmp />,
              <SubscriptionSettingsCmp />,
              <CollaborationSettingsCmp />,
            ][stepNo]
          }
        </Box>
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}

function TabsCmp({ value, handleChange }) {
  return (
    <Box borderBottom="0.5px solid rgba(33, 33, 33, 0.32)">
      <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example">
        <Tab icon={<ProfileIconCmp />} iconPosition="start" label="My Profile" />
        <Tab icon={<SettingsGearIconCmp />} iconPosition="start" label="Organisation" />
        <Tab icon={<OfferingsIconCmp />} iconPosition="start" label="Subscription" />
        <Tab icon={<SettingsGearIconCmp />} iconPosition="start" label="Collaboration" />
      </Tabs>
    </Box>
  );
}

function Footer({ stepNo }) {
  if (stepNo === 3)
    return (
      <Button
        variant="contained"
        startIcon={<ChevronArrowIconCmp />}
        onClick={() => alert("to implement")}
      >
        Import
      </Button>
    );

  return (
    <Button variant="contained" startIcon={<CheckIconCmp />} onClick={() => alert("to implement")}>
      Update
    </Button>
  );
}
