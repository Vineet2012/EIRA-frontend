import { Box, Typography } from "@mui/material";
import { MultiChipsCmp } from "../../components/Chips";
import { TextFieldWithLabelCmp } from "../../components/Inputs";

export default function OnboardingFormStep1Cmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box>
        <Typography variant="h5Alt" fontWeight={700}>
          Let's Get to Know You
        </Typography>
        <Box pt={1} />
        <Typography variant="body2Alt" color="text.light">
          By default this will be used to Personalize your dashboard.You can adjust these settings
          now or change them later from your profile.
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" columnGap={3}>
        <TextFieldWithLabelCmp label="First Name" />
        <TextFieldWithLabelCmp label="Last Name" />
      </Box>
      <Box>
        <Typography fontWeight={500} color="text.light">
          What Describes you the best?
        </Typography>
        <Box pt={1} />
        <MultiChipsCmp data={data} height={48} xs={6} spacing={2} typographyVariant="body2" />
      </Box>
    </Box>
  );
}

const data = [
  {
    id: 1,
    text: "CEO or Owner",
  },
  {
    id: 2,
    text: "Communication",
  },
  {
    id: 3,
    text: "Consultant",
  },
  {
    id: 4,
    text: "Designer",
  },
  {
    id: 5,
    text: "Human Resources",
  },
  {
    id: 6,
    text: "Marketer",
  },
  {
    id: 7,
    text: "Operations/Administration",
  },
  {
    id: 8,
    text: "Sales/Account Management",
  },
  {
    id: 9,
    text: "Legal",
  },
  {
    id: 10,
    text: "Other",
  },
];
