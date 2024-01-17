import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import { ArrowHorizontalIconCmp, CalendarIconCmp } from "../../components/Icons";

export default function UpcomingRetreatsCmp() {
  return (
    <Box>
      <Typography variant="h5">Upcoming Retreats</Typography>
      <Box display="flex" flexDirection="column" rowGap={2} mt={2}>
        <CardCmp
          image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira_interior_lobby_DSC0080-2_PIONweb_1200x1800-768x1024.jpg"
          title="The Location: A Modern Design Hotel above the Ocean"
        />
        <CardCmp
          image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira_ONDA_DSC0017-4_PIONweb_2000x1200-1024x683.jpg"
          title="Culinary Delights: A taste of sea with a touch of land"
        />
        <CardCmp
          image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira_rooms_garden-terrace-room_DSC0011-2-HDR_PIONweb_2000x1200-1-1024x683.jpg"
          title="Wellness Amenities: Wellbeing for all senses"
        />
      </Box>
    </Box>
  );
}

function CardCmp({ image, title }) {
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
            src={image}
            alt="hey"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box display="flex" flexDirection="column" mx={3}>
          <Typography variant="h5Alt" fontWeight={500}>
            {title}
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
