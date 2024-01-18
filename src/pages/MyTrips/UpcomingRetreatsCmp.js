import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import { ArrowHorizontalIconCmp, CalendarIconCmp } from "../../components/Icons";
import { myTripsDBTemp } from "../../temp/myTripsDBTemp";

export default function UpcomingRetreatsCmp() {
  return (
    <Box>
      <Typography variant="h5">Upcoming Retreats</Typography>
      <Box display="flex" flexDirection="column" rowGap={2} mt={2}>
        {myTripsDBTemp.map((el, idx) => (
          <CardCmp
            key={idx}
            id={el.id}
            image={el.images[0]}
            title={el.name}
            team={el.team}
            day={el.day}
            month={el.month}
            duration={el.duration}
            dates={el.dates}
          />
        ))}
      </Box>
    </Box>
  );
}

function CardCmp({ image, title, team, duration, month, day, dates, id }) {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" px={3} py={2} columnGap={4}>
      <Box display="flex" alignItems="center" columnGap={2} flexShrink={0} width={240}>
        <Box textAlign="center">
          <Typography variant="body2" color="text.light">
            {month}
          </Typography>
          <Typography variant="h2Alt" fontWeight={700}>
            {day}
          </Typography>
        </Box>
        <Box bgcolor="text.light" width="1px" height={28} borderRadius={2} />
        <Box>
          <Typography variant="body2">Retreat with {team}</Typography>
          <Typography variant="body2" color="text.light">
            {duration}
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
          <IconWithTextSimpleChipCmp icon={CalendarIconCmp} label={dates} />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={3} flexShrink={0}>
        <Button variant="contained">Pay Now</Button>
        <Button
          variant="outlined"
          endIcon={<ArrowHorizontalIconCmp />}
          onClick={() => navigate("itinerary/" + id)}
        >
          itinerary
        </Button>
      </Box>
    </Box>
  );
}
