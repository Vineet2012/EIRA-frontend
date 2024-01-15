import { Box, Button, Grid, Typography } from "@mui/material";
import { MultiChipsCmp } from "../../components/Chips";
import {
  AchievementsIconCmp,
  EllipsisIconCmp,
  EmployeeEngagementIconSvg,
  TeamBuildingIconSvg,
  TrainingIconCmp,
  UploadIconCmp,
  WellBeingIconCmp,
} from "../../components/Icons";
import { DropdownCmp, TextFieldWithLabelCmp } from "../../components/Inputs";

export default function OrganisationSettingsCmp() {
  return (
    <Box>
      <Grid container columnSpacing={8} rowSpacing={4}>
        <Grid item xs={6}>
          <TextFieldWithLabelCmp label="Company Name" />
        </Grid>
        <Grid item xs={6}>
          <DropdownCmp label="Company Size" value={2} options={companySizeOptions} />
        </Grid>
        <Grid item xs={6}>
          <TextFieldWithLabelCmp label="Workspace URL" disabled defaultValue="email@example.com" />
        </Grid>
        <Grid item xs={6}>
          <DropdownCmp label="Company Location" value={1} options={companyLocationOptions} />
        </Grid>
        <Grid item xs={6}>
          <Typography fontWeight={500} color="text.light">
            Pick one that describes your business
          </Typography>
          <Box pt={1} />
          <MultiChipsCmp
            data={businessDescData}
            xs={4}
            spacing={2}
            typographyVariant="body2"
            maxSelectItems={1}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography fontWeight={500} color="text.light">
            Company Domain
          </Typography>
          <Box pt={1} />
          <MultiChipsCmp
            data={companyDomainData}
            height={48}
            xs={6}
            spacing={2}
            typographyVariant="body2"
            maxSelectItems={1}
          />
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" justifyContent="space-between" columnGap={4}>
            <Box flex={1}>
              <Typography fontWeight={500} color="text.light">
                Planned a retreat before?
              </Typography>
              <Box pt={1} />
              <MultiChipsCmp
                data={[
                  { id: 0, text: "Yes" },
                  { id: 1, text: "No" },
                ]}
                spacing={2}
                maxSelectItems={1}
                height={40}
                xs={4}
              />
            </Box>
            <Box flex={1}>
              <Typography fontWeight={500} color="text.light">
                Upload logo (if any)
              </Typography>
              <Box pt={1} />
              <Button
                variant="outlined"
                startIcon={<UploadIconCmp />}
                fullWidth
                sx={{ color: "text.light", fontWeight: 500 }}
              >
                Upload
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box flex={1}>
            <Typography fontWeight={500} color="text.light">
              Upload culture deck (if any)
            </Typography>
            <Box pt={1} />
            <Button
              variant="outlined"
              startIcon={<UploadIconCmp />}
              sx={{ color: "text.light", fontWeight: 500 }}
            >
              Upload
            </Button>
          </Box>
        </Grid>
      </Grid>
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

const companyDomainData = [
  { id: 0, text: "E-Commerce" },
  { id: 1, text: "Fintech" },
  { id: 2, text: "Consultancy" },
  { id: 3, text: "E-Commerce" },
  { id: 4, text: "E-Commerce" },
  { id: 5, text: "E-Commerce" },
];

const businessDescData = [
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
  {
    id: 5,
    text: (
      <>
        Morale &
        <br />
        Wellbeing
      </>
    ),
    icon: WellBeingIconCmp,
  },
  {
    id: 6,
    text: <>Other</>,
    icon: EllipsisIconCmp,
  },
];
