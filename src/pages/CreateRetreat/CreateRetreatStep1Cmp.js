import { Box, Typography } from "@mui/material";
import React from "react";
import { SearchIconCmp } from "../../components/Icons";
import { TextFieldWithDropdownCmp } from "../../components/Inputs";
import { CreateRetreatContext } from "./CreateRetreatContext";

export default function CreateRetreatStep1Cmp() {
  const { handleNext } = React.useContext(CreateRetreatContext);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" columnGap={12} p={10}>
      <Box flex={1}>
        <img style={{ height: 300 }} src="/images/create-retreat-1.png" />
      </Box>
      <Box flex={1} bgcolor="secondary.main" px={3} py={6} borderRadius={4} textAlign="center">
        <Typography variant="h4Alt" color="primary" fontWeight={700}>
          Lets plan the retreat of a lifetime!
        </Typography>
        <Box pt={0.5} />
        <Typography variant="body1Alt">To get started, give your retreat a name</Typography>
        <Box pt={2} />
        <TextFieldWithDropdownCmp
          autoFocus
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
          onClickAction={handleNext}
        />
      </Box>
    </Box>
  );
}
