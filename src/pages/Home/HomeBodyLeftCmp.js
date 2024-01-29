import { Box, Button, Divider, IconButton, Menu, Typography } from "@mui/material";
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
        <Box
          position="absolute"
          bottom="-2.5em"
          right={8}
          height="16em"
          display={{ xs: "none", lg: "flex" }}
        >
          <img src="/images/home-page-1.png" style={{ height: "100%" }} />
        </Box>
      </Box>
    </PageSectionLayoutCmp>
  );
}

function RetreatsCmp({ openMenu }) {
  return (
    <PageSectionLayoutCmp title="Upcoming Retreats">
      <CalendarCmp openMenu={openMenu} />
      <Box display="flex" mt={4} columnGap={4}>
        <Box display="flex" flexDirection="column" rowGap={2}>
          <RetreatListItemCmp teamName={"Design team"} date={"10"} />
          <RetreatListItemCmp isSelected teamName={"Sales Team"} date={"12"} />
          <RetreatListItemCmp teamName={"Product Team"} date={"16"} />
        </Box>
        <RetreatCardCmp />
      </Box>
    </PageSectionLayoutCmp>
  );
}

function CalendarCmp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [year, setYear] = React.useState(2023);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  function nextYear() {
    setYear(year + 1);
  }

  function previousYear() {
    setYear(year - 1);
  }

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
        <Box sx={{ cursor: "pointer" }} display="flex" columnGap={1} onClick={handleOpenMenu}>
          <CalendarIconCmp />
          <Typography variant="body1" fontWeight={500} color="inherit">
            {year}
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
      <CalendarDialogCmp
        open={open}
        anchorEl={anchorEl}
        handleClose={handleCloseMenu}
        year={year}
        nextYear={nextYear}
        previousYear={previousYear}
      />
    </Box>
  );
}

function CalendarDialogCmp({ open, anchorEl, handleClose, year, nextYear, previousYear }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      elevation={3}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 50,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box p={2}>
        <Box
          onClick={previousYear}
          bgcolor="#F6F6F6"
          display="flex"
          justifyContent="center"
          p={1}
          alignItems="center"
          borderRadius={3}
          sx={{ cursor: "pointer" }}
        >
          <ChevronArrowIconCmp direction="up" />
        </Box>
        <Box mt={2} mb={2}>
          <Typography
            fontWeight={400}
            fontSize="16px"
            fontFamily="Inter"
            textAlign="center"
            sx={{ opacity: "48%" }}
          >
            {year - 1}
          </Typography>
          <Box
            bgcolor="rgba(225, 236, 200, 0.6)"
            borderRadius={100}
            mt={1}
            mb={1}
            pl={2}
            pr={2}
            pt={1}
            pb={1}
          >
            <Typography fontWeight={700} fontSize="20px" fontFamily="Inter" color="primary.main">
              {year}
            </Typography>
          </Box>
          <Typography
            fontWeight={400}
            fontSize="16px"
            fontFamily="Inter"
            textAlign="center"
            sx={{ opacity: "48%" }}
          >
            {year + 1}
          </Typography>
        </Box>
        <Box
          onClick={nextYear}
          bgcolor="#F6F6F6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={1}
          borderRadius={3}
          sx={{ cursor: "pointer" }}
        >
          <ChevronArrowIconCmp direction="below" />
        </Box>
      </Box>
    </Menu>
  );
}

function RetreatListItemCmp({ isSelected, teamName, date }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={isSelected && "#f6f6f6"}
      px={3}
      py={2}
      borderRadius="32px 100px 100px 32px"
      columnGap={3}
    >
      <Box textAlign="center">
        <Typography variant="body2" color={isSelected ? "primary" : "text.light"}>
          Feb
        </Typography>
        <Typography variant="h2Alt" fontWeight={700} color={isSelected && "primary"}>
          {date}
        </Typography>
      </Box>
      <Box bgcolor="text.light" width="1px" height="50%" borderRadius={2} />
      <Box>
        <Typography variant="body2">Retreat with {teamName}</Typography>
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
            minHeight: "100%",
            objectFit: "cover",
          }}
          src="https://www.telegraph.co.uk/content/dam/Travel/hotels/2021/April/tivoli-carvoeiro-algarve-portugal-pr-p.jpg"
        />
      </Box>
      <Box p={2} display="flex" flexDirection="column">
        <Typography variant="h5Alt" fontWeight={600}>
          Ocean View Retreat Hotel
        </Typography>
        <Box display="flex" alignItems="center" mt={1} columnGap={0.5}>
          <IconWithTextSimpleChipCmp icon={LocationIconCmp} label="Portugal" color="text.light" />
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
      <IconButton sx={{ alignSelf: "flex-end", float: "right" }} variant="rounded">
        <ArrowHorizontalIconCmp fontSize="small" />
      </IconButton>
    </Box>
  );
}
