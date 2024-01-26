import { Box, Typography } from "@mui/material";
import { SearchIconCmp } from "../../components/Icons";
import { TextFieldWithDropdownCmp } from "../../components/Inputs";

export default function LeftCmp() {
  return (
    <Box display="flex" flexDirection="column" bgcolor="secondary.main" p={3} borderRadius={3}>
      <TextFieldWithDropdownCmp
        placeholder="Create or Search Retreat"
        actionText="Create new retreat"
        resultsHeading="Your Retreats"
        border="none"
        results={[
          {
            icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
            text: "ABCDED",
          },
          {
            icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
            text: "ABCDED",
          },
        ]}
      />
      <Box pt={2} />
      <Typography variant="h4" color="primary" fontWeight={700}>
        ABC
      </Typography>
      <Typography variant="body1">To get started, fill out new information</Typography>
      <Box pt={2} />
      <Box p={2}>
        <img src="/images/create-retreat-2.png" alt="create reatreat" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
}
