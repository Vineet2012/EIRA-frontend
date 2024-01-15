import { Box, Typography } from "@mui/material";
import * as React from "react";
import { FireIconCmp } from "../../../components/Icons";
import OfferingGridCmp from "../../../components/OfferingCmp";
import StandardDialogCmp from "../../../components/StandardDialogCmp";

export default function OfferingsDetailsDialogCmp({ open, handleClose }) {
  return (
    <StandardDialogCmp open={open} handleClose={handleClose}>
      <Box display="flex" flexDirection="column" rowGap={6}>
        <Box>
          <Typography variant="h5Alt" fontWeight={600}>
            What this place offers
          </Typography>
          <Box mt={2}>
            <OfferingGridCmp
              spacing={3}
              data={[
                {
                  icon: FireIconCmp,
                  label: "Dedicated Workspace",
                  content: "A room with wifi that's well suited for working",
                },
                {
                  icon: FireIconCmp,
                  label: "Dedicated Workspace",
                  content: "A room with wifi that's well suited for working",
                },
                {
                  icon: FireIconCmp,
                  label: "Dedicated Workspace",
                  content: "A room with wifi that's well suited for working",
                },
                {
                  icon: FireIconCmp,
                  label: "Dedicated Workspace",
                  content: "A room with wifi that's well suited for working",
                },
                {
                  icon: FireIconCmp,
                  label: "Dedicated Workspace",
                  content: "A room with wifi that's well suited for working",
                },
                {
                  icon: FireIconCmp,
                  label: "Dedicated Workspace",
                  content: "A room with wifi that's well suited for working",
                },
                {
                  icon: FireIconCmp,
                  label: "Dedicated Workspace",
                  content: "A room with wifi that's well suited for working",
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </StandardDialogCmp>
  );
}
