import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { MultiChipsCmp } from "../../components/Chips";
import { ChevronArrowIconCmp } from "../../components/Icons";
// import image from "../images/create-retreat-s4.svg";

export default function CreateRetreatStep4Cmp() {
  return (
    <>
      <Grid container>
        <Grid item xs={5}>
          <Box display="flex" alignItems="flex-end" height="100%" justifyContent="center">
            <img src="/images/create-retreat-3.png" alt="create reatreat" style={{ height: 360 }} />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <FormCmp />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

function FormCmp() {
  return (
    <Box bgcolor="secondary.main" borderRadius={4} p={4} ml={3}>
      <Box>
        <Typography variant="h4Alt" color="primary">
          Let's get planning
        </Typography>
        <Box pt={1} />
        <Typography variant="body2Alt">
          Hop on an exploration call with EIRA expert ot recieve <br />
          tailored recommendtion for your retreat
        </Typography>
        <Box mt={4}>
          <Grid container>
            <Grid item xs={8}>
              <CalendarContainerCmp />
            </Grid>
            <Grid item xs={4}>
              <TimeCmp />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

function CalendarContainerCmp() {
  return (
    <Box mt={4}>
      <Typography variant="body1" fontWeight={500} color="text.light">
        Pick a Date
      </Typography>
      <CalendarCmp />
    </Box>
  );
}

const cellSize = 48;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CalendarCmp() {
  const todaysDate = new Date("Sun Feb 07 2024 04:17:48 GMT+0530");
  const firstDay = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 1).getDay();
  const prevMonthDays = new Date(
    todaysDate.getFullYear(),
    (12 + todaysDate.getMonth() - 1) % 12,
    0
  ).getDate();
  const currMonthDays = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 0).getDate();

  return (
    <Box mx={4} width={cellSize * 7} mt={4}>
      <Box display="flex" alignItems="center" justifyContent="space-between" color="text.main">
        <IconButton>
          <ChevronArrowIconCmp direction="left" />
        </IconButton>
        <Typography variant="body1" fontWeight={700}>
          {months[todaysDate.getMonth()]}
        </Typography>
        <IconButton>
          <ChevronArrowIconCmp direction="right" />
        </IconButton>
      </Box>
      <Box mt={2}>
        <Box display="flex">
          {["S", "M", "T", "W", "T", "F", "S"].map((el, idx) => (
            <DateCmp key={idx} date={el} color="primary.main" />
          ))}
        </Box>
        {[...new Array(5)].map((_, week) => {
          const startDate = week * 7;

          return (
            <Box key={week} display="flex">
              {[...new Array(7)].map((_, day) => {
                if (startDate + day < firstDay)
                  return (
                    <DateCmp
                      key={day}
                      date={prevMonthDays - firstDay + day + 1}
                      color="text.light"
                      fontWeight={400}
                    />
                  );
                else if (startDate + day > currMonthDays)
                  return (
                    <DateCmp
                      key={day}
                      date={startDate + day - currMonthDays}
                      color="text.light"
                      fontWeight={400}
                    />
                  );
                else
                  return (
                    <DateCmp
                      key={day}
                      date={startDate + day + 1 - firstDay}
                      selected={startDate + day + 1 - firstDay === 7}
                    />
                  );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function DateCmp({ date, color, selected, fontWeight = 500 }) {
  return (
    <Box
      height={cellSize - 8}
      width={cellSize - 8}
      m={0.5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={color}
      sx={{
        cursor: "pointer",
        ...(selected && { borderRadius: "50%", backgroundColor: "primary.main", color: "white" }),
      }}
    >
      <Typography variant="body1" color="inherit" fontWeight={fontWeight}>
        {date}
      </Typography>
    </Box>
  );
}

function TimeCmp() {
  return (
    <Box mt={4}>
      <Typography variant="body1" fontWeight={500} color="text.light">
        Pick a Time
      </Typography>
      <Box mt={4}>
        <MultiChipsCmp
          data={[
            { id: 1, text: "1 PM" },
            { id: 2, text: "2 PM" },
            { id: 3, text: "3 PM" },
            { id: 4, text: "4 PM" },
            { id: 5, text: "5 PM" },
            { id: 6, text: "6 PM" },
          ]}
          xs={6}
          spacing={1}
          height={48}
          maxSelectItems={1}
        />
      </Box>
    </Box>
  );
}
