import { Box, Button, Typography } from "@mui/material";
import { IconWithTextSimpleChipCmp } from "../../../components/Chips";
import {
  ArrowHorizontalIconCmp,
  CalendarIconCmp,
  LocationIconCmp,
  TimeIconCmp,
} from "../../../components/Icons";

export default function ItineraryListCmp() {
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
        <CardCmp />
        <Box borderBottom="1px solid rgba(33, 33, 33, 0.32)" />
        <Box display="flex" alignItems="center" columnGap={2} ml={4}>
          <IconWithTextSimpleChipCmp
            icon={TimeIconCmp}
            label="Activities & Workshops"
            contained
            color="primary.main"
          />
        </Box>
        <CardCmp selected />
        <CardCmp />
        <CardCmp />
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
        borderRadius={4}
      >
        <Typography variant="body2" fontWeight={700} color="primary.main">
          End of the day - Spend your day at leisure or Add an activity
        </Typography>
        <Box bgcolor="#fff" borderRadius={3}>
          <Button endIcon={<ArrowHorizontalIconCmp />}>Browse activites</Button>
        </Box>
      </Box>
    </Box>
  );
}

function CardCmp({ selected }) {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" justifyContent="center" mr={2}>
        {selected ? (
          <Box
            height={20}
            width={20}
            borderRadius={16}
            bgcolor="primary.main"
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box height={8} width={8} borderRadius={16} bgcolor="secondary.main" flexShrink={0} />
          </Box>
        ) : (
          <Box height={20} width={20} borderRadius={16} bgcolor="secondary.main" flexShrink={0} />
        )}
      </Box>
      <Box display="flex" alignItems="center" columnGap={2}>
        <Box height={120} borderRadius={4} overflow="hidden">
          <img
            src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min.jpg"
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
