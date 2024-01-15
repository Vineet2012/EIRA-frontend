import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  ArrowHorizontalIconCmp,
  CalendarIconCmp,
  ChevronArrowIconCmp,
  GolfFlagIconCmp,
  LocationIconCmp,
  MembersIconCmp,
} from "../../components/Icons";
import { PageSectionLayoutCmp } from "../../components/Layouts";

export default function HomeBodyLeftCmp() {
  return (
    <>
      <HeroSectionCmp />
      <Box pt={4} />
      <RetreatsCmp />
    </>
  );
}

function HeroSectionCmp() {
  return (
    <PageSectionLayoutCmp title="Hey there, Step into Serinity" bgcolor="secondary.main">
      <Box position="relative">
        <Box display="flex" flexDirection="column" rowGap={2}>
          <Typography variant="h4Alt" color="primary">
            Embark on a Journey of <br />
            Connection & Growth with EIRA!
          </Typography>
          <Typography variant="body2Alt">
            Discover. Connect. Thrive. Your Ultimate Retreat <br /> Experience Starts Here!
          </Typography>
          <Box bgcolor="#fff" borderRadius={3} alignSelf="flex-start">
            <Button endIcon={<ArrowHorizontalIconCmp />}>Get Started</Button>
          </Box>
        </Box>
        <Box position="absolute" bottom="-2.5em" right={8} height="16em">
          <img src="/images/home-page-1.png" style={{ height: "100%" }} />
        </Box>
      </Box>
    </PageSectionLayoutCmp>
  );
}

function RetreatsCmp() {
  return (
    <PageSectionLayoutCmp title="Upcoming Retreats">
      <CalendarCmp />
      <Box display="flex" mt={4} columnGap={4}>
        <Box display="flex" flexDirection="column" rowGap={2}>
          {[...new Array(3)].map((_, idx) => {
            return <RetreatListItemCmp key={idx} isSelected={idx === 1} />;
          })}
        </Box>
        <RetreatCardCmp />
      </Box>
    </PageSectionLayoutCmp>
  );
}

function CalendarCmp() {
  return (
    <Box display="flex" color="text.light">
      <Box
        bgcolor="#F6F6F6"
        display="flex"
        alignItems="center"
        p={2}
        borderRadius={3}
        sx={{ cursor: "pointer" }}
      >
        <ChevronArrowIconCmp direction="left" />
      </Box>
      <Box
        display="flex"
        mx={2}
        bgcolor="#F6F6F6"
        width="100%"
        height={56}
        flex={1}
        borderRadius={3}
        textAlign="center"
        justifyContent="center"
        pt={2}
      >
        <Box sx={{ cursor: "pointer" }} display="flex" columnGap={1}>
          <CalendarIconCmp />
          <Typography variant="body1" fontWeight={500} color="inherit">
            2023
          </Typography>
          <ChevronArrowIconCmp />
        </Box>
      </Box>
      <Box
        bgcolor="#F6F6F6"
        display="flex"
        alignItems="center"
        p={2}
        borderRadius={3}
        sx={{ cursor: "pointer" }}
      >
        <ChevronArrowIconCmp direction="right" />
      </Box>
    </Box>
  );
}

function RetreatListItemCmp({ isSelected }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={isSelected && "#f6f6f6"}
      px={3}
      py={2}
      borderRadius={4}
      columnGap={3}
    >
      <Box textAlign="center">
        <Typography variant="body2" color={isSelected ? "primary" : "text.light"}>
          Jan
        </Typography>
        <Typography variant="h2Alt" fontWeight={700} color={isSelected && "primary"}>
          10
        </Typography>
      </Box>
      <Box bgcolor="text.light" width="1px" height="50%" borderRadius={2} />
      <Box>
        <Typography variant="body2">Retreat with Design Team</Typography>
        <Typography variant="body2" color="text.light">
          7 Days, 6 Nights
        </Typography>
      </Box>
    </Box>
  );
}

function RetreatCardCmp() {
  return (
    <Box border="1px solid #C4DFB6" borderRadius={4} p={0.5} flex={1}>
      <Box width="100%" borderRadius={4} overflow="hidden" height={250}>
        <img
          style={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "cover",
          }}
          src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </Box>
      <Box p={2} display="flex" flexDirection="column">
        <Typography variant="h5Alt" fontWeight={600}>
          The Standard Huruvalhi - Dream...
        </Typography>
        <Box display="flex" alignItems="center" mt={1} columnGap={0.5}>
          <IconWithTextSimpleChipCmp
            icon={LocationIconCmp}
            label="Country in South Asia"
            color="text.light"
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2">
          Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard
          Huruvalhi, Maldives.
        </Typography>
        <Box display="flex" mt={4} columnGap={3}>
          <IconWithTextSimpleChipCmp icon={GolfFlagIconCmp} label="Team Building" />
          <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="25 Members" />
        </Box>
      </Box>
      <IconButton sx={{ alignSelf: "flex-end" }} variant="rounded" sx={{ float: "right" }}>
        <ArrowHorizontalIconCmp fontSize="small" />
      </IconButton>
    </Box>
  );
}
