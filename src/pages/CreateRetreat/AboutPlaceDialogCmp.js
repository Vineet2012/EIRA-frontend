import { Box, Typography } from "@mui/material";
import * as React from "react";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import { FireIconCmp, SpaIconCmp, TrekIconCmp, WavesIconCmp } from "../../components/Icons";
import OfferingGridCmp from "../../components/OfferingCmp";
import StandardDialogCmp from "../../components/StandardDialogCmp";

export default function AboutPlaceDialogCmp({ open, handleClose }) {
  return (
    <StandardDialogCmp open={open} handleClose={handleClose}>
      <Box display="flex" flexDirection="column" rowGap={4}>
        <Box>
          <Typography variant="h5Alt" fontWeight={600}>
            About this space
          </Typography>
          <Box pt={1} />
          <Typography variant="body1" lineHeight={1.5}>
            Immerse yourself in nature and pure luxury of Shangrila Ranao situated on top of Tandi
            Hill near Jibhi. Not only yu can pour yourself a hot bubbl bath, but also enjoy stunning
            views right from your bthtub. Immerse yourself in nature and pure luxury of Shangrila
            Ranao situated on top of Tandi Hill near Jibhi. Not only yu can pour yourself a hot
            bubbl bath, but also enjoy stunning views right from your bthtub.
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" columnGap={2} rowGap={2}>
          <IconWithTextSimpleChipCmp icon={SpaIconCmp} label="Fabulous spa" contained />
          <IconWithTextSimpleChipCmp
            icon={WavesIconCmp}
            label="Amazing surf experience"
            contained
          />
          <IconWithTextSimpleChipCmp icon={TrekIconCmp} label="Thrilling Trek" contained />
        </Box>
        <Box>
          <Typography variant="h5Alt" fontWeight={600}>
            What this place offers
          </Typography>
          <Box>
            <OfferingGridCmp
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
              ]}
            />
          </Box>
          {/* <Box display="flex" flexWrap="wrap" rowGap={4} justifyContent="space-between" mt={1}>
            <OfferingCmp
              icon={<LocalFireDepartment sx={{ color: "primary.main" }} />}
              label="Dedicated Workspace"
              content="A room with wifi that's well suited for working"
            />
            <OfferingCmp
              icon={<LocalFireDepartment sx={{ color: "primary.main" }} />}
              label="Great Location"
              content="A room with wifi that's well suited for working"
            />
            <OfferingCmp
              icon={<LocalFireDepartment sx={{ color: "primary.main" }} />}
              label="Dedicated Workspace"
              content="A room with wifi that's well suited for working"
            />
          </Box> */}
        </Box>
      </Box>
    </StandardDialogCmp>
  );
}
