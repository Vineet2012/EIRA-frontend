import { Box, Typography } from "@mui/material";
import { MultiChipsCmp } from "../../components/Chips";
import { DropdownCmp, TextFieldWithLabelCmp } from "../../components/Inputs";

export default function OnboardingFormStep2Cmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box>
        <Typography variant="h5Alt" fontWeight={700}>
          Tell Us About Your Company
        </Typography>
        <Box pt={1} />
        <Typography variant="body2Alt" color="text.light">
          By default this will be used to Personalize your dashboard.You can adjust these settings
          now or change them later from your profile.
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" columnGap={3}>
        <TextFieldWithLabelCmp label="Company Name" />
        <DropdownCmp label="Company Size" value={2} options={companySizeOptions} />
      </Box>
      <Box display="flex" alignItems="center" columnGap={3}>
        <TextFieldWithLabelCmp label="Workspace Url" />
        <DropdownCmp label="Company Location" value={1} options={companyLocationOptions} />
      </Box>
      <Box>
        <Typography fontWeight={500} color="text.light">
          Type of company
        </Typography>
        <Box pt={1} />
        <MultiChipsCmp
          data={typeOfCompanyOptions}
          height={48}
          xs={6}
          spacing={2}
          typographyVariant="body2"
        />
      </Box>
    </Box>
  );
}

const companyLocationOptions = [
  { id: 0, cmp: "Portugal" },
  { id: 1, cmp: "Lisbon, Portugal" },
  { id: 2, cmp: "Madrid, Spain" },
  { id: 3, cmp: "Gibralter" },
  { id: 4, cmp: "Other" },
];

const companySizeOptions = [
  { id: 0, cmp: "1-10" },
  { id: 1, cmp: "11-50" },
  { id: 2, cmp: "51-100" },
  { id: 3, cmp: "101-200" },
  { id: 4, cmp: "More than 200" },
];

const typeOfCompanyOptions = [
  {
    id: 1,
    text: "E-commerce",
  },
  {
    id: 2,
    text: "Buisness",
  },
  {
    id: 3,
    text: "Marketing Agency",
  },
  {
    id: 4,
    text: "Shopping",
  },
  {
    id: 5,
    text: "Designer",
  },
  {
    id: 6,
    text: "other",
  },
];
