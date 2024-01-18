import { Remove } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "../../../components/Chips";
import { CalendarIconCmp, LaunchIconCmp } from "../../../components/Icons";

const cellHeight = 48;
const popupWidth = 320;

const startTime = 10;
const endTime = 24;
const timePerDay = endTime - startTime;
const cellsPerDate = timePerDay;
const maxDates = 9;

const startDate = new Date().getDate();
const startDay = new Date().getDay();

export default function ItineraryCalendarCmp() {
  return (
    <Box bgcolor="rgba(245, 251, 245, 1)">
      <Grid container>
        {[...new Array(maxDates)].map((_, idx) => (
          <DateHeadingCmp key={idx} date={(startDate + idx) % 31 ?? 1} day={(startDay + idx) % 7} />
        ))}

        {[...new Array(1000)].map((_, idx) => {
          if (idx >= cellsPerDate * maxDates) return null;

          const currDate = startDate + Math.floor(idx % maxDates);
          const currTime = startTime + Math.floor(idx / maxDates);

          const match = events.find((el) => el.date === currDate && el.time === currTime);
          if (match?.blank) return null;

          return (
            <CellCmp
              key={idx}
              temp={idx === 15}
              data={match?.data}
              span={match?.span}
              mt={currTime === startTime}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

const events = [
  {
    date: new Date().getDate(),
    time: 12,
    span: 2,
    data: {
      name: "Retreat with Design team",
    },
  },
  {
    date: new Date().getDate() + 1,
    time: 12,
    blank: true,
  },
  {
    date: new Date().getDate(),
    time: 14,
    span: 2,
    data: {
      name: "Retreat with Design team",
    },
  },
  {
    date: new Date().getDate() + 1,
    time: 15,
    blank: true,
  },
  {
    date: new Date().getDate(),
    time: 15,
    span: 2,
    data: {
      name: "Retreat with Design team",
    },
  },
  {
    date: new Date().getDate() + 1,
    time: 14,
    blank: true,
  },
  {
    date: new Date().getDate() + 3,
    time: 16,
    span: 2,
    data: {
      name: "Retreat with Design team",
    },
  },
  {
    date: new Date().getDate() + 4,
    time: 16,
    blank: true,
  },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function DateHeadingCmp({ date, day }) {
  return (
    <Grid item xs={12 / maxDates}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="rgba(239, 239, 239, 1)"
        py={1}
        bgcolor="#fff"
      >
        <Typography variant="h6Alt" fontWeight={500}>
          {date}
        </Typography>
        <Typography variant="body2" color="text.light">
          {days[day]}
        </Typography>
      </Box>
    </Grid>
  );
}

function CellCmp({ span = 1, data, mt }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();

  return (
    <Grid item xs={(12 / maxDates) * span}>
      <Box
        border="1px solid"
        borderColor="rgba(239, 239, 239, 1)"
        height={cellHeight}
        p="1px"
        mt={mt && 2}
        bgcolor="#fff"
      >
        {data && (
          <Box position="relative" height="100%">
            <Box
              bgcolor="secondary.main"
              height="100%"
              borderRadius={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              py={0.5}
              px={1}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setOpen((val) => !val);
                setTimeout(() => ref.current?.focus(), 500);
              }}
            >
              <Typography variant="caption" fontWeight={700} color="primary" lineHeight={1}>
                {data.name}
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" columnGap={0.5}>
                  <CalendarIconCmp color="primary" sx={{ width: 13, height: 13 }} />
                  <Typography variant="caption" color="primary" lineHeight={1}>
                    11:00 AM - 06:00 PM
                  </Typography>
                </Box>
                <LaunchIconCmp color="primary" sx={{ width: 18, height: 18 }} direction="down" />
              </Box>
            </Box>

            {open && (
              <Box
                ref={ref}
                component={"div"}
                position="absolute"
                top={cellHeight - 16}
                right={-popupWidth + 16}
                p={2}
                borderRadius={4}
                boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.2)"
                bgcolor="#fff"
                zIndex={10}
                width={popupWidth}
                display="flex"
                flexDirection="column"
                rowGap={2}
                tabIndex="0"
                onBlur={() => setOpen(false)}
                sx={{ outline: "none" }}
              >
                <Box height={160} borderRadius={4} overflow="hidden">
                  <img
                    src="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira_interior_lobby_DSC0080-2_PIONweb_1200x1800-768x1024.jpg"
                    alt="hero"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Typography variant="h5Alt" fontWeight={500}>
                  Speed boating from Velana International Airport
                </Typography>
                <Typography variant="body2">
                  Relish a unique blend of relaxation and luxury on this exotic vacation at the
                  Standard Huruvalhi, Maldives.{" "}
                </Typography>
                <Box>
                  <IconWithTextSimpleChipCmp
                    icon={CalendarIconCmp}
                    label="Fri, 11 Jan 2024 - Sat, 15 Jan 2024"
                    color="primary.main"
                  />
                  <IconButton size="small" sx={{ float: "right" }} onClick={() => setOpen(false)}>
                    <Remove />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Grid>
  );
}