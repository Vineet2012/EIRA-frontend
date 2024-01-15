import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MultiChipsCmp } from "../../components/Chips";
import {
  AchievementsIconCmp,
  EmployeeEngagementIconSvg,
  TeamBuildingIconSvg,
  TrainingIconCmp,
} from "../../components/Icons";
import { TextFieldWithDropdownCmp } from "../../components/Inputs";
import QACmp from "../../components/QACmp";

export default function SupportInitialPageCmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={8}>
      <HeaderCmp />
      <ChipsCmp />
      <DetailsCmp />
    </Box>
  );
}

function HeaderCmp() {
  const navigate = useNavigate();

  return (
    <Box
      p={4}
      borderRadius={4}
      bgcolor="secondary.main"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      columnGap={8}
    >
      <Box display="flex" flexDirection="column" rowGap={2}>
        <Typography variant="h2Alt" fontWeight={700} color="primary">
          Hello, how can we help?
        </Typography>
        <TextFieldWithDropdownCmp
          placeholder="Find Something"
          actionText="See all results for "
          resultsHeading="Suggestions"
          results={[]}
          onClickAction={() => navigate("search string")}
        />
        <Box display="flex" alignItems="flex-start" columnGap={2}>
          <Typography fontWeight={500} lineHeight="28px">
            Popular Keywords
          </Typography>
          <Box display="flex" flexWrap="wrap" columnGap={2}>
            <ChipCmp label="Paragliding Experience" />
            <ChipCmp label="Options" />
            <ChipCmp label="Payments" />
          </Box>
        </Box>
      </Box>
      <Box height={300}>
        <img src="/images/support.png" alt="support" style={{ height: "100%" }} />
      </Box>
    </Box>
  );
}

function ChipCmp({ label }) {
  return (
    <Box borderRadius={10} px={2} py={0.5} bgcolor="rgba(255,255,255,0.5)">
      <Typography variant="body2" color="primary">
        {label}
      </Typography>
    </Box>
  );
}

function ChipsCmp() {
  return (
    <Box margin="0 auto" textAlign="center" width="60%" maxWidth={800}>
      <Typography variant="h5" color="text.light">
        or choose a category to find the help you need
      </Typography>
      <Box pt={1} />
      <MultiChipsCmp data={data} spacing={2} maxSelectItems={1} xs={3} />
    </Box>
  );
}

const data = [
  {
    id: 1,
    text: (
      <>
        Team
        <br />
        Building
      </>
    ),
    icon: TeamBuildingIconSvg,
  },
  {
    id: 2,
    text: (
      <>
        Employee
        <br />
        Engagement
      </>
    ),
    icon: EmployeeEngagementIconSvg,
  },
  {
    id: 3,
    text: (
      <>
        Celebrating
        <br />
        Achievements
      </>
    ),
    icon: AchievementsIconCmp,
  },
  {
    id: 4,
    text: (
      <>
        Training &
        <br />
        Development
      </>
    ),
    icon: TrainingIconCmp,
  },
];

function DetailsCmp() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" rowGap={3}>
      <Box textAlign="center">
        <Typography variant="h3Alt" fontWeight={700}>
          Team Building
        </Typography>
        <Box pt={1} />
        <Typography variant="body2Alt" color="text.light">
          We have tried to answer all your doubts.
        </Typography>
      </Box>
      <QACmp
        title="What plans do you offer?"
        content="We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page."
      />
      <Box width="100%">
        <Divider />
      </Box>
      <QACmp
        title="What plans do you offer?"
        content="We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page."
      />
      <Box width="100%">
        <Divider />
      </Box>
      <QACmp
        title="What plans do you offer?"
        content="We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page."
      />
      <Box width="100%">
        <Divider />
      </Box>
    </Box>
  );
}
