import { Box, Typography } from "@mui/material";
import * as React from "react";
import StandardDialogCmp from "../../../components/StandardDialogCmp";

export default function AboutDetailsDialogCmp({ open, handleClose }) {
  return (
    <StandardDialogCmp open={open} handleClose={handleClose}>
      <Box display="flex" flexDirection="column" rowGap={6}>
        <Box>
          <Typography variant="h5Alt" fontWeight={600}>
            About this space
          </Typography>
          <Box pt={1} />
          <Typography variant="body1" lineHeight={1.5}>
            Immerse yourself in nature and pure luxury at Shangrila Rénao situated on top of Tandi
            hill near Jibhi. Not only can you pour yourself in a hot bubble bath but also enjoy the
            stunning views right from your bathtub. Away from the road or any traffic noise all you
            hear are birds chirping and you might as well catch a sight of flying squirrel or a
            shooting star at night from your all glass cabin. Kick back and relax in this calm,
            stylish space.
            <br />
            Immerse yourself in nature and pure luxury at Shangrila Rénao situated on top of Tandi
            hill near Jibhi.
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight={700} color="primary.main">
            NOTE
          </Typography>
          <Box pt={1} />
          <Typography color="primary.main">
            Duplex A frame cabin has a master bedroom and second bed in attic upstairs. Outdoors,
            you will have lawn for bonfire and dining area.
          </Typography>
        </Box>
      </Box>
    </StandardDialogCmp>
  );
}
