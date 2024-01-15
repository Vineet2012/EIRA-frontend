import { Box, Typography } from "@mui/material";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  CalendarIconCmp,
  CheckCircleIconCmp,
  GolfFlagIconCmp,
  LocationIconCmp,
} from "../../components/Icons";

export default function ItineraryBodyRightCmp() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={3}
      bgcolor="rgba(106, 133, 92, 0.04)"
      borderRadius={4}
      p={2}
    >
      <Box borderRadius={3} overflow="hidden" height={160}>
        <img
          src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography variant="h5Alt" fontWeight={700} color="primary">
        Club Quater Hotel in San Fransicso
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        rowGap={1.5}
        p={2}
        bgcolor="secondary.main"
        borderRadius={4}
      >
        <IconWithTextSimpleChipCmp
          columnGap={1}
          icon={LocationIconCmp}
          label="Country in South Asia"
        />
        <IconWithTextSimpleChipCmp columnGap={1} icon={GolfFlagIconCmp} label="Team Building" />
        <IconWithTextSimpleChipCmp columnGap={1} icon={CalendarIconCmp} label="Fri, 11 Jan 2024" />
      </Box>
      <Box>
        <Typography fontWeight={600} color="primary">
          Activites
        </Typography>
        <Box display="flex" flexDirection="column" rowGap={2} mt={2}>
          <IconWithTextSimpleChipCmp
            icon={CheckCircleIconCmp}
            label="Speed boating from Velana Airport"
            fontWeight={500}
            columnGap={1}
            textColor="text.main"
          />
          <IconWithTextSimpleChipCmp
            icon={CheckCircleIconCmp}
            label="Speed boating from Velana Airport"
            fontWeight={500}
            columnGap={1}
            textColor="text.main"
          />
          <IconWithTextSimpleChipCmp
            icon={CheckCircleIconCmp}
            label="Speed boating from Velana Airport"
            fontWeight={500}
            columnGap={1}
            textColor="text.main"
          />
        </Box>
      </Box>
      <Box>
        <Typography fontWeight={600} color="primary">
          Workshops
        </Typography>
        <Box display="flex" flexDirection="column" rowGap={2} mt={2}>
          <IconWithTextSimpleChipCmp
            icon={CheckCircleIconCmp}
            label="Speed boating from Velana Airport"
            fontWeight={500}
            columnGap={1}
            textColor="text.main"
          />{" "}
          <IconWithTextSimpleChipCmp
            icon={CheckCircleIconCmp}
            label="Speed boating from Velana Airport"
            fontWeight={500}
            columnGap={1}
            textColor="text.main"
          />{" "}
          <IconWithTextSimpleChipCmp
            icon={CheckCircleIconCmp}
            label="Speed boating from Velana Airport"
            fontWeight={500}
            columnGap={1}
            textColor="text.main"
          />
        </Box>
      </Box>
    </Box>
  );
}
