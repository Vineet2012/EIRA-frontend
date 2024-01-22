import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AdminIconCmp,
  ChevronArrowIconCmp,
  CreateRetreatIconCmp,
  HomeIconCmp,
  MyTripsIconCmp,
  SettingsIconCmp,
  ShopIconCmp,
  SupportIconCmp,
  ToolboxIconCmp,
} from "./Icons";

const drawerWidth = 280;
const menuItems = [
  { type: "item", label: "home", icon: HomeIconCmp, pathname: "home" },
  {
    type: "item",
    label: "create retreat",
    icon: CreateRetreatIconCmp,
    pathname: "create-retreat",
  },
  { type: "item", label: "my trips", icon: MyTripsIconCmp, pathname: "my-trips" },
  { type: "item", label: "admin", icon: AdminIconCmp, pathname: "admin" },
  { type: "item", label: "shop", icon: ShopIconCmp, pathname: "shop" },
  { type: "divider" },
  {
    type: "item",
    label: "organisational settings",
    icon: SettingsIconCmp,
    pathname: "settings?tab=0",
  },
  { type: "divider" },
  { type: "item", label: "toolbox", icon: ToolboxIconCmp, pathname: "toolbox" },
  { type: "item", label: "support", icon: SupportIconCmp, pathname: "support" },
];

export default function SidebarCmp() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currPath = React.useMemo(() => location.pathname.split("/")[1], [location]);

  const handleToggleClose = () => {
    setOpen((val) => !val);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Box p={2}>
          <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              {/* TODO: replace with icon in sidebar */}
              {open && (
                <Typography variant="h4" component="h4">
                  EIRA
                </Typography>
              )}
              <IconButton onClick={handleToggleClose}>
                <ChevronArrowIconCmp direction={open ? "left" : "right"} fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box pb={1}></Box>
        <List>
          {menuItems.map((el, idx) => {
            if (el.type === "divider")
              return (
                <Box key={idx} py={1}>
                  <Divider />
                </Box>
              );

            const isSelected = currPath.includes(el.pathname);
            const Icon = el.icon;

            return (
              <ListItem key={idx} disablePadding sx={{ position: "relative" }}>
                {isSelected && (
                  <Box
                    position="absolute"
                    right={-2}
                    width={6}
                    height="100%"
                    bgcolor="primary.main"
                    borderRadius={8}
                  ></Box>
                )}
                <ListItemButton
                  sx={{
                    px: 3,
                    background:
                      isSelected &&
                      "linear-gradient(270deg, rgba(196, 223, 182, 0.1) 0%, rgba(196,223,182, 0.2) 100%)",
                  }}
                  onClick={() => navigate(el.pathname)}
                >
                  <ListItemIcon>
                    <Icon
                      sx={{
                        width: 18,
                        height: 18,
                        color: isSelected ? "primary.main" : "text.main",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={el.label}
                    sx={{ textTransform: "capitalize", color: isSelected && "primary.main" }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);
