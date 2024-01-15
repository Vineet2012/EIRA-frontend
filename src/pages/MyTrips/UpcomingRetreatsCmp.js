import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import { ArrowHorizontalIconCmp, CalendarIconCmp } from "../../components/Icons";

export default function UpcomingRetreatsCmp() {
  return (
    <Box>
      <Typography variant="h5">Upcoming Retreats</Typography>
      <Box display="flex" flexDirection="column" rowGap={2} mt={2}>
        <CardCmp />
        <CardCmp />
        <CardCmp />
      </Box>
    </Box>
  );
}

function CardCmp() {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" px={3} py={2} columnGap={4}>
      <Box display="flex" alignItems="center" columnGap={2} flexShrink={0}>
        <Box textAlign="center">
          <Typography variant="body2" color="text.light">
            Jan
          </Typography>
          <Typography variant="h2Alt" fontWeight={700}>
            10
          </Typography>
        </Box>
        <Box bgcolor="text.light" width="1px" height={28} borderRadius={2} />
        <Box>
          <Typography variant="body2">Retreat with Design Team</Typography>
          <Typography variant="body2" color="text.light">
            7 Days, 6 Nights
          </Typography>
        </Box>
      </Box>
      <Box bgcolor="text.light" width={3} height={64} borderRadius={2} flexShrink={0} />
      <Box display="flex" alignItems="center">
        <Box height={120} width={120} borderRadius={4} overflow="hidden" flexShrink={0}>
          <img
            src="https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/08/25183234/298975449_382499477332261_6469935543158544615_n.jpeg?tr=w-1200,h-900"
            alt="hey"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box display="flex" flexDirection="column" mx={3}>
          <Typography variant="h5Alt" fontWeight={500}>
            Hotel Milad Maldives
          </Typography>
          <Box py={0.4} />
          <Typography variant="body2">
            Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard
            Huruvalhi, Maldives.
          </Typography>
          <Box py={0.4} />
          <IconWithTextSimpleChipCmp
            icon={CalendarIconCmp}
            label={"Fri, 11 Jan 2024 - Sat, 15 Jan 2024"}
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={3} flexShrink={0}>
        <Button variant="contained">Pay Now</Button>
        <Button
          variant="outlined"
          endIcon={<ArrowHorizontalIconCmp />}
          onClick={() => navigate("itinerary/1")}
        >
          itinerary
        </Button>
      </Box>
    </Box>
  );
}
