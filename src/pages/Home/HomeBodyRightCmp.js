import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  AchievementsIconCmp,
  CreateRetreatIconCmp,
  EmployeeEngagementIconSvg,
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
        <PopularRetreatsCardCmp
          imgUrl="https://www.telegraph.co.uk/content/dam/Travel/hotels/2021/April/tivoli-carvoeiro-algarve-portugal-pr-p.jpg"
          title="Ocean View Retreat Hotel"
          location="Portugal"
          chips={
            <>
              <IconWithTextSimpleChipCmp icon={EmployeeEngagementIconSvg} label="Employee En..." />
              <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="25 Members" />
            </>
          }
        />
        <PopularRetreatsCardCmp
          imgUrl="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/hotel-cap-eden-roc.jpg?imwidth=680"
          title="Beachfront Boutique Hotel"
          location="France"
          chips={
            <>
              <IconWithTextSimpleChipCmp icon={GolfFlagIconCmp} label="Team Building" />
              <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="15 Members" />
            </>
          }
        />
        <PopularRetreatsCardCmp
          imgUrl="https://robbreport.com/wp-content/uploads/2023/04/Dravuni-Residence-Pool-.jpg"
          title="Luxurious Beach Retreat"
          location="Italy"
          chips={
            <>
              <IconWithTextSimpleChipCmp icon={AchievementsIconCmp} label="Celebrating ..." />
              <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="30 Members" />
            </>
          }
        />
      </Box>
    </PageSectionLayoutCmp>
  );
}

function PopularRetreatsCardCmp({ imgUrl, title, location, chips }) {
  const imgSize = 90;

  return (
    <Box display="flex" alignItems="center" columnGap={1}>
      <Box width={imgSize} height={imgSize} borderRadius={4} overflow="hidden" flexShrink={0}>
        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={imgUrl} />
      </Box>
      <Box display="flex" flexDirection="column" rowGap={1}>
        <Box>
          <IconWithTextSimpleChipCmp icon={LocationIconCmp} label={location} color="text.light" />
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
            {title}
          </Typography>
        </Box>
        <Box display="flex" columnGap={2}>
          {chips}
        </Box>
      </Box>
    </Box>
  );
}

const tempData = [
  { label: "Retreat checklist", icon: <FireIconCmp /> },
  { label: "Remote Team Management", icon: <HealthAidIconCmp /> },
  { label: "Team Brand Strategy Development", icon: <PetsIconCmp /> },
  { label: "Personal Branding Workshop", icon: <TransportIconCmp /> },
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
        <Typography
          variant="body1"
          fontWeight={700}
          color="primary"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
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
