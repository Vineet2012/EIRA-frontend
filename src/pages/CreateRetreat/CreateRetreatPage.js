import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { CheckIconCmp, SaveIconSvg } from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";
import CreateRetreatContextProvider, { CreateRetreatContext } from "./CreateRetreatContext";
import CreateRetreatStep1Cmp from "./CreateRetreatStep1Cmp";
import CreateRetreatStep2Cmp from "./CreateRetreatStep2Cmp";
import CreateRetreatStep3Cmp from "./CreateRetreatStep3Cmp";
import CreateRetreatStep4Cmp from "./CreateRetreatStep4Cmp";
import FinalStepCmp from "./FinalStepCmp";

export default function CreateRetreatPage() {
  return (
    <CreateRetreatContextProvider>
      <CreateRetreatPageMain />
    </CreateRetreatContextProvider>
  );
}

function CreateRetreatPageMain() {
  const { stepNo } = React.useContext(CreateRetreatContext);

  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp
        title="Create New Retreat"
        footer={stepNo !== 0 && stepNo !== 4 && <FooterCmp />}
      >
        {
          [
            <CreateRetreatStep1Cmp />,
            <CreateRetreatStep2Cmp />,
            <CreateRetreatStep3Cmp />,
            <CreateRetreatStep4Cmp />,
            <FinalStepCmp />,
          ][stepNo]
        }
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}

function FooterCmp() {
  const { stepNo, handleNext } = React.useContext(CreateRetreatContext);

  if (stepNo === 3)
    return (
      <>
        <Typography variant="body1" color="text.light">
          Don't worry - you are not commiting to anything else yet. Please click "submit" to booking
          a meeting with us.
        </Typography>
        <Box flex={1} />
        <Button variant="contained" onClick={handleNext}>
          <CheckIconCmp /> <Box ml={1.5}>Submit</Box>
        </Button>
      </>
    );
  return (
    <Button variant="contained" onClick={handleNext}>
      <SaveIconSvg /> <Box ml={1.5}>Save</Box>
    </Button>
  );
}
