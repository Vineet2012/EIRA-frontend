import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  CreateRetreatIconCmp,
  FireIconCmp,
  GolfFlagIconCmp,
  HealthAidIconCmp,
  LaunchIconCmp,
  LocationIconCmp,
  MembersIconCmp,
  PetsIconCmp,
  TransportIconCmp,
} from "../../components/Icons";
import { PageSectionLayoutCmp } from "../../components/Layouts";

export default function HomeBodyRightCmp() {
  const navigate = useNavigate();

  return (
    <>
      <PopularRetreatsCmp />
      <Box pt={2} />
      <Button
        variant="contained"
        startIcon={<CreateRetreatIconCmp />}
        fullWidth
        onClick={() => navigate("/create-retreat")}
      >
        Create New Retreat
      </Button>
      <Box pt={6} />
      <CultureToolboxCmp />
    </>
  );
}

function PopularRetreatsCmp() {
  return (
    <PageSectionLayoutCmp title="Popular Retreats">
      <Box display="flex" flexDirection="column" rowGap={2}>
        {[...new Array(3)].map((_, idx) => {
          return (
            <>
              <PopularRetreatsCardCmp key={idx} />
              {idx !== 2 && <Divider />}
            </>
          );
        })}
      </Box>
    </PageSectionLayoutCmp>
  );
}

function PopularRetreatsCardCmp() {
  const imgSize = 90;

  return (
    <Box display="flex" alignItems="center" columnGap={1}>
      <Box width={imgSize} height={imgSize} borderRadius={4} overflow="hidden" flexShrink={0}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
        />
      </Box>
      <Box display="flex" flexDirection="column" rowGap={1}>
        <Box>
          <IconWithTextSimpleChipCmp
            icon={LocationIconCmp}
            label="Country in South Asia"
            color="text.light"
          />
          <Box pt={0.5} />
          <Typography
            variant="body1"
            fontWeight={600}
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            The Standard Huruvalhi - Dream Hotel Bismark Prime Locationed
          </Typography>
        </Box>
        <Box display="flex" columnGap={2}>
          <IconWithTextSimpleChipCmp icon={GolfFlagIconCmp} label="Team Building" />
          <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="25 Members" />
        </Box>
      </Box>
    </Box>
  );
}

const tempData = [
  { label: "Camping Guide", icon: <FireIconCmp /> },
  { label: "Health & Aid", icon: <HealthAidIconCmp /> },
  { label: "Pets Guide", icon: <PetsIconCmp /> },
  { label: "Transport Guide", icon: <TransportIconCmp /> },
];

function CultureToolboxCmp() {
  return (
    <PageSectionLayoutCmp
      title="Culture Toolbox"
      action={
        <Link variant="body2" color="primary" fontWeight={700}>
          view all
        </Link>
      }
      bgcolor="transparent"
      p={0}
    >
      <Grid container spacing={2}>
        {tempData.map((el, idx) => {
          return (
            <Grid item xs={6}>
              <CultureToolboxCardCmp key={idx} label={el.label} icon={el.icon} />
            </Grid>
          );
        })}
      </Grid>
    </PageSectionLayoutCmp>
  );
}

function CultureToolboxCardCmp({ icon, label }) {
  return (
    <Box bgcolor="#fff" borderRadius={4}>
      <Box px={1} pt={1} pb={3} display="flex" flexDirection="column" rowGap={1}>
        <Box display="flex" justifyContent="space-between">
          <Box
            color="#fff"
            bgcolor="primary.main"
            borderRadius="50%"
            height={32}
            width={32}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {icon}
          </Box>
          <LaunchIconCmp color="primary" />
        </Box>
        <Typography variant="body1" fontWeight={700} color="primary">
          {label}
        </Typography>
        <Typography variant="body2">
          Relish a unique blend of relaxation and luxury and Relish a unique...
        </Typography>
      </Box>
      <Box bgcolor="secondary.main" display="flex" borderRadius={4} p={1.5} columnGap={2}>
        <CultureToolboxCardChipCmp label="mountains" />
        <CultureToolboxCardChipCmp label="+2" />
      </Box>
    </Box>
  );
}

function CultureToolboxCardChipCmp({ label }) {
  return (
    <Box
      bgcolor="rgba(255,255,255,0.72)"
      borderRadius={4}
      py={0.5}
      px={1.5}
      display="flex"
      alignItems="center"
    >
      <Typography variant="caption" color="primary">
        {label}
      </Typography>
    </Box>
  );
}
