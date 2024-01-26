import { Avatar, Box, Grid, Typography } from "@mui/material";
import { MultiChipsCmp } from "../../components/Chips";
import {
  AchievementsIconCmp,
  EllipsisIconCmp,
  EmployeeEngagementIconSvg,
  TeamBuildingIconSvg,
  TrainingIconCmp,
  WellBeingIconCmp,
} from "../../components/Icons";
import {
  DropdownCmp,
  TextFieldWithDropdownCmp,
  TextFieldWithLabelCmp,
} from "../../components/Inputs";
import LeftCmp from "./LeftCmp";

export default function CreateRetreatStep2Cmp() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <LeftCmp />
      </Grid>
      <Grid item xs={8}>
        <FormCmp />
      </Grid>
    </Grid>
  );
}

function FormCmp() {
  return (
    <Box pl={8} pt={2}>
      <Box width="100%" display="flex" flexDirection="column" rowGap={6}>
        <Box>
          <Box display="flex" alignItems="center" columnGap={4}>
            <Box flex={1}>
              <TextFieldWithLabelCmp
                label="Start Date"
                placeholder="DD/MM/YYYY"
                defaultValue="26/10/20023"
              />
            </Box>
            <Box flex={1}>
              <TextFieldWithLabelCmp label="End Date" placeholder="DD/MM/YYYY" />
            </Box>
          </Box>
          <Box display="flex" alignItems="center" columnGap={4} mt={2}>
            <Box flex={1}>
              <TextFieldWithLabelCmp label="How many will attend" defaultValue="20" />
            </Box>
            <DropdownCmp label="Room Type" />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <HeadingsCmp
            heading="What is the purpose of this retreat? *"
            subHeading="Choose as many as you like"
          />
          <MultiChipsCmp data={purposeData} />
        </Box>
        <Box display="flex" flexDirection="column">
          <HeadingsCmp
            heading="Where would you like to go?"
            subHeading={`If you are open to your retreat destination, can’t decide which option sounds best, or
          wish to go somewhere entirely different, please choose “Anywhere”`}
          />
          <TextFieldWithDropdownCmp
            bgcolor="background.dark"
            placeholder="Create or Search Retreat"
            resultsHeading="Suggestions"
            border="none"
            results={[
              {
                icon: (
                  <Avatar
                    src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQT77RmwEbTbJYC3vwuUsFwQ6L7vR9whAE8bUpWc7Em21_WorxQ-PCsF5NYLu_ucTnsidnoIzkq8-nIkN1CUzy4M_5pcbOew6A8nQcTyMw"
                    alt="place"
                    sx={{ borderRadius: 3 }}
                  />
                ),
                text: "Lisbon, Portugal",
              },
              {
                icon: (
                  <Avatar
                    src="https://lh5.googleusercontent.com/p/AF1QipNttfURC-hArjD_nCFD7JDAA-J8mxlmoR8QRnIy=w729-h421-n-k-no"
                    alt="place"
                    sx={{ borderRadius: 3 }}
                  />
                ),
                text: "Delhi, India",
              },
            ]}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <HeadingsCmp
            heading="Who are you planning to take on EIRA retreat? *"
            subHeading="Choose as many as you like"
          />
          <MultiChipsCmp data={participantsData} xs={6} height={60} spacing={2} />
        </Box>
      </Box>
    </Box>
  );
}

function HeadingsCmp({ heading, subHeading }) {
  return (
    <Box mb={3} display="flex" flexDirection="column" rowGap={1}>
      <Typography variant="h5Alt" fontWeight={700}>
        {heading}
      </Typography>
      <Typography variant="body2Alt">{subHeading}</Typography>
    </Box>
  );
}

const purposeData = [
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

const participantsData = [
  {
    id: 1,
    text: "Department or Team",
  },
  {
    id: 2,
    text: "Leadership Team",
  },
  {
    id: 3,
    text: "Top Performers benefit",
  },
  {
    id: 4,
    text: "Entire Company",
  },
];
