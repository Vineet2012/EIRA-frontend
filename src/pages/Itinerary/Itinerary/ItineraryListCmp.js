import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "../../../components/Chips";
import {
  ArrowHorizontalIconCmp,
  CalendarIconCmp,
  LocationIconCmp,
  TimeIconCmp,
} from "../../../components/Icons";
import RadioCmp from "../../../components/RadioCmp";
import AboutPlaceDialogCmp from "../../CreateRetreat/AboutPlaceDialogCmp";

export default function ItineraryListCmp() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box>
      <Box display="flex" flexDirection="column" rowGap={3} px={4} py={8}>
        <Box display="flex" alignItems="center" columnGap={2} ml={4}>
          <IconWithTextSimpleChipCmp
            icon={LocationIconCmp}
            label="Stay"
            contained
            color="primary.main"
          />
          <IconWithTextSimpleChipCmp
            icon={TimeIconCmp}
            label="Check in time: 12 PM"
            contained
            color="primary.main"
          />
        </Box>
        <CardCmp
          onClickInfo={() => setOpen(true)}
          image="https://images.letsway.com/live/tr:w-750/https://storage.googleapis.com/kouto-api-media-live/2023/2/416dc1ab2bd4932141e917b3cb63d6eab86200b2a416da7b.png"
        />
        <Box borderBottom="1px solid rgba(33, 33, 33, 0.32)" />
        <Box display="flex" alignItems="center" columnGap={2} ml={4}>
          <IconWithTextSimpleChipCmp
            icon={TimeIconCmp}
            label="Activities & Workshops"
            contained
            color="primary.main"
          />
        </Box>
        <CardActivityCmp
          onClickInfo={() => setOpen(true)}
          selected
          image="https://images.letsway.com/live/tr:w-750/https://storage.googleapis.com/kouto-api-media-live/2023/2/0b919dd63a37052ea28b314f4c3a8f1ffc25759ca520432b"
        />
        <CardActivityCmp
          onClickInfo={() => setOpen(true)}
          image="https://images.letsway.com/live/tr:w-750/https://storage.googleapis.com/kouto-api-media-live/2023/2/8d3ff1d19532e1fd8d3d84a19d79aa514a14a653534e5de8"
        />
        <CardActivityCmp
          onClickInfo={() => setOpen(true)}
          image="https://www.portugalresident.com/wp-content/uploads/2020/01/tourism_tourists_Lisbon_lisboa.jpg"
        />
      </Box>
      <Box
        bgcolor="secondary.main"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pr={0.5}
        pl={2}
        py={0.5}
        m={2}
        columnGap={2}
        borderRadius={4}
      >
        <Typography variant="body2" fontWeight={700} color="primary.main">
          End of the day - Spend your day at leisure or Add an activity
        </Typography>
        <Box bgcolor="#fff" borderRadius={3} flexShrink={0}>
          <Button endIcon={<ArrowHorizontalIconCmp />}>Browse activites</Button>
        </Box>
      </Box>
      <AboutPlaceDialogCmp open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}

function CardCmp({ selected, image, onClickInfo }) {
  return (
    <Box display="flex" alignItems="center" onClick={onClickInfo}>
      <Box display="flex" justifyContent="center" mr={2}>
        <RadioCmp selected={selected} />
      </Box>
      <Box display="flex" alignItems="center" columnGap={2}>
        <Box height={120} borderRadius={4} overflow="hidden">
          <img
            src={image}
            alt="this"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box display="flex" flexDirection="column" rowGap={1}>
          <Box display="flex" alignItems="center" columnGap={2}>
            <Typography variant="h5Alt" fontWeight={500}>
              Hotel Milad Maldives
            </Typography>
            <IconWithTextSimpleChipCmp
              icon={TimeIconCmp}
              label="Pending"
              contained
              color="primary.main"
            />
          </Box>
          <Typography variant="body2">
            Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard
            Huruvalhi, Maldives.
          </Typography>
          <Box display="flex" alignItems="center" columnGap={2}>
            <IconWithTextSimpleChipCmp
              icon={LocationIconCmp}
              label="1.9 km from lake"
              color="primary.main"
            />
            <IconWithTextSimpleChipCmp
              icon={CalendarIconCmp}
              label="Fri, 11 Jan 2024 - Sat, 15 Jan 2024"
              color="primary.main"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function CardActivityCmp({ selected, image, onClickInfo }) {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" justifyContent="center" mr={2}>
        <RadioCmp selected={selected} />
      </Box>
      <Box display="flex" alignItems="center" columnGap={2}>
        <Box height={120} borderRadius={4} overflow="hidden" onClick={onClickInfo}>
          <img
            src={image}
            alt="this"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box display="flex" flexDirection="column" rowGap={1}>
          <Box display="flex" alignItems="center" columnGap={2} onClick={onClickInfo}>
            <Typography variant="h5Alt" fontWeight={500}>
              Hotel Milad Maldives
            </Typography>
            <IconWithTextSimpleChipCmp
              icon={TimeIconCmp}
              label="Pending"
              contained
              color="primary.main"
            />
          </Box>
          <Typography variant="body2" onClick={onClickInfo}>
            Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard
            Huruvalhi, Maldives.
          </Typography>
          <Box display="flex" alignItems="center" columnGap={1.6}>
            <IconWithTextSimpleChipCmp
              icon={LocationIconCmp}
              label="1.9 km from lake"
              color="primary.main"
            />
            <IconWithTextSimpleChipCmp
              icon={CalendarIconCmp}
              label="Fri, 11 Jan 2024 - Sat, 15 Jan 2024"
              color="primary.main"
            />
            <IconWithTextSimpleChipCmp icon={TimeIconCmp} label="1 Hour" color="primary.main" />
            <Button
              sx={{
                backgroundColor: "rgba(196, 223, 182, 1)",
                padding: "4px 10px 4px 10px",
                borderRadius: 100,
                flexShrink: 0,
                "&:hover": { backgroundColor: "rgba(196, 223, 182, 1)" },
              }}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
