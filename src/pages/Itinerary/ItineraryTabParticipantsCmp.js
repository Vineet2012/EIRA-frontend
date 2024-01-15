import { Avatar, Box, Divider, Typography } from "@mui/material";
import ItineraryBodyRightCmp from "./ItineraryBodyRightCmp";

export default function ItineraryTabParticipantsCmp() {
  return (
    <Box display="flex" columnGap={8}>
      <Box flex={3}>
        <LeftCmp />
      </Box>
      <Box flex={1.3}>
        <ItineraryBodyRightCmp />
      </Box>
    </Box>
  );
}

function LeftCmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
      <Box display="flex">
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light">
            Name
          </Typography>
          <Box display="flex" alignItems="center"></Box>
        </Box>
        <Box flex={1}>
          <Typography fontWeight={500} color="text.light">
            Email
          </Typography>
        </Box>
      </Box>
      <Divider />
      <RowCmp />
      <RowCmp />
      <RowCmp />
      <RowCmp />
    </Box>
  );
}

function RowCmp() {
  return (
    <>
      <Box display="flex">
        <Box flex={1} display="flex" alignItems="center" columnGap={2}>
          <Avatar
            src="https://img.freepik.com/premium-vector/avatar-profile-colorful-illustration-2_549209-82.jpg"
            alt="profile"
          />
          <Typography>Mani S.</Typography>
        </Box>
        <Box flex={1} display="flex" alignItems="center">
          <Typography>mani1234.gmail.com</Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
