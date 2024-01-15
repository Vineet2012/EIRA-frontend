import { Box, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppbarCmp from "./AppbarCmp";
import SidebarCmp from "./SidebarCmp";

export default function GeneralLayoutCmp() {
  return (
    <Box bgcolor="background.main" display="flex" minHeight="100vh">
      <SidebarCmp />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AppbarCmp />
        <Divider />
        <Outlet />
      </Box>
    </Box>
  );
}
