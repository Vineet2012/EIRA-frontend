import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Avatar, Box, Button, Divider, IconButton, Menu, Typography } from "@mui/material";
import React from "react";
import {
  ChevronArrowIconCmp,
  CreateRetreatIconCmp,
  InfoIconCmp,
  LogOutIconSvg,
  NotificationIconCmp,
  ProfileIconSvg,
  SubscriptionIconSvg,
  TransferIconCmp,
} from "./Icons";

export default function AppbarCmp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenMenuSwitchMember = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleOpenMenuProfile = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseMenuSwitchMember = () => {
    setAnchorE2(null);
  };

  const handleCloseMenuProfile = () => {
    setAnchorE3(null);
  };

  return (
    <Box>
      <Box py={2} px={4} display="flex">
        <Box display="flex" alignItems="center" flex={1}>
          <Button variant="contained" startIcon={<CreateRetreatIconCmp />}>
            Craft Your Retreat
          </Button>
        </Box>
        <Box display="flex" alignItems="center" columnGap={2}>
          <SwitchMemberCmp openMenu={handleOpenMenuSwitchMember} />
          <ProfileCmp openMenu={handleOpenMenuProfile} />
          <Box display="flex">
            <IconButton size="small" onClick={handleOpenMenu}>
              <NotificationIconCmp color={open ? "primary" : "default"} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <NotificationsPopupCmp open={open} anchorEl={anchorEl} handleClose={handleCloseMenu} />
      <SwitchMemberPopupCmp
        anchorE2={anchorE2}
        open2={open2}
        onClose2={handleCloseMenuSwitchMember}
      />
      <ProfilePopupCmp anchorE3={anchorE3} open3={open3} onClose3={handleCloseMenuProfile} />
    </Box>
  );
}

function SwitchMemberCmp({ openMenu }) {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" columnGap={1}>
        <TransferIconCmp fontSize="small" color="primary" />
        <Typography
          variant="body1"
          color="primary"
          fontWeight={700}
          component="a"
          sx={{ textDecoration: "underline" }}
        >
          Switch to Member
        </Typography>
      </Box>
      <IconButton size="small" onClick={openMenu} sx={{ marginLeft: 0.5 }}>
        <InfoIconCmp sx={{ fontSize: 14 }} />
      </IconButton>
    </Box>
  );
}

function SwitchMemberPopupCmp({ open2, anchorE2, onClose2 }) {
  return (
    <Menu
      anchorEl={anchorE2}
      open={open2}
      onClose={onClose2}
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
            right: 14,
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
      <Box>
        <Box p={2}>
          <Typography
            fontSize={12}
            fontWeight={400}
            fontFamily="Inter"
            color="primary"
            lineHeight="14.52px"
          >
            Event participant, eager to
            <br /> engage and enjoy.
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            columnGap={1}
            p={1}
            bgcolor="rgb(225, 236, 200,0.48)"
            borderRadius="10px"
            mt={1}
          >
            <TransferIconCmp fontSize="small" color="primary" />
            <Typography
              fontSize={12}
              fontFamily="Inter"
              color="primary"
              fontWeight={700}
              component="a"
              sx={{ textDecoration: "underline" }}
            >
              Switch to Member
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ padding: "16px 16px 8px 16px" }}>
          <Typography fontSize={12} fontWeight={400} fontFamily="Inter">
            Currently in Admin mode
          </Typography>
        </Box>
      </Box>
    </Menu>
  );
}

function ProfileCmp({ openMenu }) {
  return (
    <Box
      onClick={openMenu}
      bgcolor="white"
      p={1}
      display="flex"
      alignItems="center"
      borderRadius={3}
      columnGap={1}
      sx={{ cursor: "pointer" }}
    >
      <Avatar
        src="https://i.pinimg.com/236x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg"
        alt="profile picture"
        sx={{ width: 32, height: 32 }}
      />
      <Typography variant="body1" component="span">
        Krishna Anand
      </Typography>
      <ChevronArrowIconCmp />
    </Box>
  );
}

function ProfilePopupCmp({ open3, anchorE3, onClose3 }) {
  return (
    <Menu
      anchorEl={anchorE3}
      open={open3}
      onClose={onClose3}
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
            right: 14,
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
      <Box>
        <Box p={2}>
          <Box display="flex" columnGap={2} sx={{ cursor: "pointer" }}>
            <ProfileIconSvg />
            <Typography
              fontSize="16px"
              fontWeight={400}
              fontFamily="Inter"
              color=" rgba(33, 33, 33, 0.48)"
            >
              My Profile
            </Typography>
          </Box>
          <Box display="flex" mt={2} columnGap={2} sx={{ cursor: "pointer" }}>
            <SubscriptionIconSvg />
            <Typography
              fontSize="16px"
              fontWeight={400}
              fontFamily="Inter"
              color=" rgba(33, 33, 33, 0.48)"
            >
              Subscription
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box display="flex" columnGap={2} p={2} sx={{ cursor: "pointer" }}>
          <LogOutIconSvg />
          <Typography
            fontSize="16px"
            fontWeight={400}
            fontFamily="Inter"
            color="rgba(221, 0, 0, 1)"
          >
            Logout
          </Typography>
        </Box>
      </Box>
    </Menu>
  );
}

function NotificationsPopupCmp({ open, anchorEl, handleClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      elevation={3}
      PaperProps={{
        elevation: 0,
        sx: {
          width: "450px",
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
            right: 14,
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
      <Box>
        <Box pl={3} pt={2}>
          <Typography variant="h5" fontWeight={600}>
            Notifications
          </Typography>
          {[...new Array(3)].map((_, idx) => (
            <NotificationItemCmp key={idx} idx={idx} />
          ))}
        </Box>
        <Box bgcolor="#fbf7f3" p={2} borderRadius="0px 0px 24px 24px">
          <Box
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography variant="paraMed" p={1}>
              Read all
            </Typography>
            <CheckCircleOutlinedIcon sx={{ color: "primary.main" }} />
          </Box>
        </Box>
      </Box>
    </Menu>
  );
}

function NotificationItemCmp({ idx }) {
  return (
    <Box mr={3}>
      <Box bgcolor={idx === 1 ? "secondary.main" : undefined} p={1} borderRadius={3}>
        <Box pt={2} display="flex">
          <Box>
            <NotificationIconCmp />
          </Box>
          <Box display="flex" flexDirection="column" ml={1} width="100%">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography fontSize="16px" fontFamily="Inter" fontWeight={600} color="primary">
                Announcement
              </Typography>
              <Box
                borderRadius={100}
                width="10px"
                height="10px"
                bgcolor="primary.main"
                mr={2}
              ></Box>
            </Box>
            <Typography fontSize="16px" fontWeight={500} fontFamily="Inter" mt={0.5} mb={0.5}>
              Hey We've added a new location
              <br /> "Berlin, Germany"
            </Typography>
            <Typography
              variant="paraReg"
              sx={{ opacity: "48%" }}
              fontSize="14px"
              fontFamily="Inter"
              fontWeight={400}
              mt={0.5}
              mb={0.5}
            >
              Today at 9:42 AM
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ margin: "8px 0px 8px 0px" }} />
    </Box>
  );
}
