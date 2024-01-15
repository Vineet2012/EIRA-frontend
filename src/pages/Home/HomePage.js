import { Box } from "@mui/material";
import HomeBodyLeftCmp from "./HomeBodyLeftCmp";
// import DashBoardBodyRight from "./dashboardBodyRight";
import React from "react";
import { useLocation } from "react-router-dom";
import { PageMainContentsLayoutCmp } from "../../components/Layouts";
import HomeBodyRightCmp from "./HomeBodyRightCmp";
import NewUserWelcomeDialog from "./NewUserWelcomeDialog";

export default function HomePage() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (location.state?.newUser) setOpen(true);
  }, []);

  return (
    <PageMainContentsLayoutCmp>
      <Box display="flex" mb={4} columnGap={4}>
        <Box flex={2}>
          <HomeBodyLeftCmp />
        </Box>
        <Box flex={1}>
          <HomeBodyRightCmp />
        </Box>
      </Box>
      <NewUserWelcomeDialog open={open} handleClose={() => setOpen(false)} />
    </PageMainContentsLayoutCmp>
  );
}
