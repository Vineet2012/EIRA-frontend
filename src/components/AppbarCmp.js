import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Avatar, Box, Button, Divider, IconButton, Menu, Typography } from "@mui/material";
import React from "react";
import {
  ChevronArrowIconCmp,
  CreateRetreatIconCmp,
  InfoIconCmp,
  NotificationIconCmp,
  TransferIconCmp,
} from "./Icons";

export default function AppbarCmp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
          <SwitchMemberCmp />
          <ProfileCmp />
          <Box display="flex">
            <IconButton size="small" onClick={handleOpenMenu}>
              <NotificationIconCmp color={open ? "primary" : "default"} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <NotificationsPopupCmp open={open} anchorEl={anchorEl} handleClose={handleCloseMenu} />
    </Box>
  );
}

function SwitchMemberCmp() {
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
      <Box ml={1}>
        <InfoIconCmp sx={{ fontSize: 14 }} />
      </Box>
    </Box>
  );
}

function ProfileCmp() {
  return (
    <Box
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

function NotificationsPopupCmp({ open, anchorEl, handleClose }) {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose} elevation={3}>
      NOTE: Unable to get design details from Figma, that's why left 'un-styled'
      <Box>
        <Box pl={3} pt={2}>
          <Typography variant="h5" fontWeight={600}>
            Notifications
          </Typography>
          {[...new Array(3)].map((_, idx) => (
            <NotificationItemCmp key={idx} />
          ))}
        </Box>
        <Box bgcolor="#fbf7f3" p={2}>
          <Box
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography variant="paraMed" mr={1}>
              Read all
            </Typography>
            <CheckCircleOutlinedIcon sx={{ color: "primary.main" }} />
          </Box>
        </Box>
      </Box>
    </Menu>
  );
}

function NotificationItemCmp() {
  return (
    <Box>
      <Box pt={2} display="flex">
        <Box>
          <NotificationIconCmp />
        </Box>
        <Box display="flex" flexDirection="column" ml={1}>
          <Typography variant="paraMed">Announcement</Typography>
          <Typography mb={1} variant="para2Med" mt={1}>
            Hey We've added a new location "Berlin, Germany"
          </Typography>
          <Typography mb={1} variant="paraReg" sx={{ opacity: "48%" }}>
            Today at 9:42 AM
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: "8px 0px 8px 0px" }} />
    </Box>
  );
}
