import { Box, Typography } from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "../../../components/Chips";
import {
  CalendarIconCmp,
  FireIconCmp,
  HeartIconCmp,
  ListIconCmp,
  ShareIconCmp,
} from "../../../components/Icons";
import { itineraryViewEnum } from "../../../utils/enums";
import { ItineraryPageContext } from "../ItineraryPageContext";
import ItineraryListCmp from "./ItineraryListCmp";
import ShareItineraryDialogCmp from "./ShareItineraryDialogCmp";

export default function ItineraryTabItineraryCmp() {
  const { viewType } = React.useContext(ItineraryPageContext);

  return (
    <Box>
      <Box display="flex" columnGap={4}>
        <CardCmp
          icon={<FireIconCmp />}
          label="Things to expect"
          content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard Huruvalhi, Maldives."
        />
        <CardCmp
          icon={<HeartIconCmp />}
          label="Things you’ll love"
          content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard Huruvalhi, Maldives."
        />
      </Box>
      <Box display="flex" mt={4} columnGap={4}>
        {viewType === itineraryViewEnum.list && (
          <Box flex={0.8}>
            <LeftCmp />
          </Box>
        )}
        <Box flex={2}>
          <RightCmp />
        </Box>
      </Box>
    </Box>
  );
}

function CardCmp({ icon, label, content }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={1}
      p={2}
      borderRadius={4}
      border="1px solid rgba(33, 33, 33, 0.3)"
    >
      <Box
        width={32}
        height={32}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#fff"
        bgcolor="primary.main"
        borderRadius={20}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="body1" color="primary" fontWeight={700}>
          {label}
        </Typography>
        <Typography variant="body2" color="text.light">
          {content}
        </Typography>
      </Box>
    </Box>
  );
}

function LeftCmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={1}>
      <Typography variant="h5Alt" fontWeight={700}>
        Day Plan
      </Typography>
      <RetreatListItemCmp />
      <RetreatListItemCmp selected />
      <RetreatListItemCmp />
    </Box>
  );
}

function RetreatListItemCmp({ selected }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={selected && "#f6f6f6"}
      px={3}
      py={2}
      // borderRadius={4}
      borderRadius="32px 100px 100px 32px"
      columnGap={3}
    >
      <Box textAlign="center">
        <Typography variant="body2" color={selected ? "primary" : "text.light"}>
          Jan
        </Typography>
        <Typography variant="h2Alt" fontWeight={700} color={selected && "primary"}>
          10
        </Typography>
      </Box>
      <Box bgcolor="text.light" width="1px" height={40} borderRadius={2} />
      <Box>
        <Typography variant="body2">Arrival in Portugal</Typography>
        <Typography variant="body2" color="text.light">
          Thursday
        </Typography>
      </Box>
    </Box>
  );
}

function RightCmp() {
  const [openDialog, setOpenDialog] = React.useState(false);
  const { viewType, setViewType } = React.useContext(ItineraryPageContext);

  const selectedProps = {};
  const unSelectedProps = {};

  return (
    <Box border="1px solid rgba(196, 223, 182, 1)" borderRadius={4} overflow="hidden">
      <Box
        bgcolor="secondary.main"
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" columnGap={2}>
          <Box>
            <IconWithTextSimpleChipCmp
              icon={ListIconCmp}
              label="List"
              contained
              bgcolor="primary.main"
              color="#fff"
              onClick={() => setViewType(itineraryViewEnum.list)}
            />
          </Box>
          <IconWithTextSimpleChipCmp
            icon={CalendarIconCmp}
            label="Calendar"
            onClick={() => setViewType(itineraryViewEnum.calendar)}
            border="1px solid rgba(106, 133, 92, 1)"
            borderRadius={20}
            py={1}
            px={2}
          />
        </Box>
        <IconWithTextSimpleChipCmp
          icon={ShareIconCmp}
          label="Share Itinerary"
          onClick={() => setOpenDialog(true)}
          py={1}
          px={2}
        />
      </Box>
      <ItineraryListCmp />
      <ShareItineraryDialogCmp open={openDialog} handleClose={() => setOpenDialog(false)} />
    </Box>
  );
}
