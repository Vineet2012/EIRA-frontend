import { IconButton, Menu, Typography } from "@mui/material";
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
  SelectedIconSvg,
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
  { type: "item", label: "shop", icon: ShopIconCmp, pathname: "shop" },
  { type: "divider" },
  {
    type: "item",
    label: "organisational settings",
    icon: SettingsIconCmp,
    // pathname: "settings?tab=0",
    pathname: "settings",
  },
  { type: "divider" },
  { type: "item", label: "toolbox", icon: ToolboxIconCmp, pathname: "toolbox" },
  { type: "item", label: "support", icon: SupportIconCmp, pathname: "support" },
  { type: "divider" },
  { type: "item", label: "admin", icon: AdminIconCmp, pathname: "admin" },
];

export default function SidebarCmp() {
  const [open, setOpen] = React.useState(false);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [selectedLangId, setSelectedLangId] = React.useState(3);
  const [selectedLang, setSelectedLang] = React.useState("English");
  const [selectedLangShort, setSelectedLangShort] = React.useState("En");
  const navigate = useNavigate();
  const location = useLocation();
  const open3 = Boolean(anchorE3);

  const handleCloseLanguageMenu = () => {
    setAnchorE3(null);
  };

  function handleSelectedLang(id, lang, short) {
    setSelectedLangId(id);
    setSelectedLang(lang);
    setSelectedLangShort(short);
  }

  const handleOpenLanguageMenu = (event) => {
    setAnchorE3(event.currentTarget);
  };

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
          <Box
            display="flex"
            ml={open ? 3 : 1.5}
            columnGap={0.3}
            mt={8}
            sx={{ opacity: "48%", cursor: "pointer" }}
            alignItems="center"
            onClick={handleOpenLanguageMenu}
          >
            {open ? (
              <Typography fontWeight={400} fontSize="18px" fontFamily="Inter">
                {selectedLang}
              </Typography>
            ) : (
              <Typography fontWeight={400} fontSize="18px" fontFamily="Inter">
                {selectedLangShort}
              </Typography>
            )}
            <ChevronArrowIconCmp />
          </Box>
        </List>
      </Drawer>
      <LanguageSelectionPopupCmp
        anchorE3={anchorE3}
        open3={open3}
        onClose3={handleCloseLanguageMenu}
        handleSelectedLang={handleSelectedLang}
        selectedLang={selectedLangId}
      />
    </Box>
  );
}

const language = [
  {
    id: 1,
    lang: "French",
    langShort: "Fr",
  },
  {
    id: 2,
    lang: "Spanish",
    langShort: "Sp",
  },
  {
    id: 3,
    lang: "English",
    langShort: "En",
  },
  {
    id: 4,
    lang: "German",
    langShort: "Ge",
  },
  {
    id: 5,
    lang: "Chinese",
    langShort: "Ch",
  },
];

function LanguageSelectionPopupCmp({
  open3,
  anchorE3,
  onClose3,
  handleSelectedLang,
  selectedLang,
}) {
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
          mt: 0,
          width: "250px",
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
            bottom: -6,
            left: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-0%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "left", vertical: "bottom" }}
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <Box p={2}>
        {language.map((el) => {
          return (
            <Box
              sx={{ cursor: "pointer", transition: "0.1s" }}
              display="flex"
              justifyContent="space-between"
              p={1}
              key={el.id}
              onClick={() => handleSelectedLang(el.id, el.lang, el.langShort)}
              bgcolor={selectedLang === el.id ? "rgba(225, 236, 200, 0.4)" : ""}
              borderRadius="8px"
            >
              <Typography fontWeight={400} fontSize="16px" fontFamily="Inter">
                {el.lang}
              </Typography>
              {selectedLang === el.id ? <SelectedIconSvg /> : <></>}
            </Box>
          );
        })}
      </Box>
    </Menu>
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
