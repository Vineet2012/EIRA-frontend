import { Box, Button, Typography } from "@mui/material";
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

export default function OnboardingFormStep3Cmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Box>
        <Typography variant="h5Alt" fontWeight={700}>
          How Will You Use Our Product?
        </Typography>
        <Box pt={1} />
        <Typography variant="body2Alt" color="text.light">
          Your choice here won’t limit what you can do in EIRA.
        </Typography>
      </Box>
      <Box>
        <Typography fontWeight={500} color="text.light">
          Pick one that describes your business
        </Typography>
        <Box pt={1} />
        <MultiChipsCmp data={data} spacing={2} maxSelectItems={1} />
      </Box>
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
            xs={6}
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
