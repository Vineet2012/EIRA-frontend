import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { BackButtonCmp } from "../../components/Buttons";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  AddIconCmp,
  CalendarIconCmp,
  LocationIconCmp,
  MembersIconCmp,
  TeamBuildingIconSvg,
} from "../../components/Icons";
import AboutPlaceDialogCmp from "./AboutPlaceDialogCmp";
import { CreateRetreatContext } from "./CreateRetreatContext";
import LeftCmp from "./LeftCmp";
// import { LabelWithIconCmp } from "../components/texts";
// import AboutPlaceDialogCmp from "./aboutPlaceDialog";

export default function CreateRetreatStep3Cmp() {
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <LeftCmp />
        </Grid>
        <Grid item xs={8}>
          <Box>
            <FormCmp />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

const chipsData = [
  {
    label: "24/12/2023 - 30/12/2023",
    icon: CalendarIconCmp,
  },
  { label: "15 People", icon: MembersIconCmp },
  { label: "Team Building", icon: TeamBuildingIconSvg },
  { label: "Shared Room", icon: CalendarIconCmp },
  { label: "Portugal", icon: LocationIconCmp },
  { label: "Leadership Team", icon: MembersIconCmp },
];

function FormCmp() {
  const [open, setOpen] = React.useState(false);
  const { handlePrev } = React.useContext(CreateRetreatContext);

  return (
    <Box pl={8} pr={2} pt={2}>
      <Box display="flex" flexDirection="column" rowGap={4}>
        <BackButtonCmp />
        <Box display="flex" alignItems="center" flexWrap="wrap" rowGap={2} columnGap={2}>
          {chipsData.map((el, idx) => (
            <IconWithTextSimpleChipCmp key={idx} icon={el.icon} label={el.label} contained />
          ))}
        </Box>
        <Box>
          <Typography variant="h5">Where you've been</Typography>
          <Box display="flex" flexDirection="column" rowGap={3} mt={2}>
            {[...new Array(3)].map((_, idx) => (
              <CardCmp key={idx} onClickInfo={() => setOpen(true)} />
            ))}
          </Box>
        </Box>
      </Box>
      <AboutPlaceDialogCmp open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}

function CardCmp({ onClickInfo }) {
  return (
    <Box display="flex" alignItems="center">
      <Box
        height={100}
        width={100}
        borderRadius={4}
        overflow="hidden"
        flexShrink={0}
        onClick={onClickInfo}
      >
        <img
          src="https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/08/25183234/298975449_382499477332261_6469935543158544615_n.jpeg?tr=w-1200,h-900"
          alt="hey"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box display="flex" flexDirection="column" mx={3} onClick={onClickInfo}>
        <Typography variant="h5Alt" fontWeight={500}>
          Hotel Milad Maldives
        </Typography>
        <Box py={0.4} />
        <Typography variant="body2">
          Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard
          Huruvalhi, Maldives.
        </Typography>
        <Box py={0.4} />
        <IconWithTextSimpleChipCmp icon={LocationIconCmp} label={"1.9 Km from Lake"} />
      </Box>
      <Box>
        <IconButton variant="rounded">
          <AddIconCmp />
        </IconButton>
      </Box>
    </Box>
  );
}
