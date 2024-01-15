import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackButtonCmp } from "./Buttons";
import LoginSignupFeatureImgCmp from "./LoginSignupFeatureImgCmp";

export function PageMainContentsLayoutCmp({ children }) {
  return <Box p={4}>{children}</Box>;
}

export function PageSectionLayoutCmp({ title, children, action, bgcolor = "#fff", p = 3, footer }) {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5">{title}</Typography>
        {action}
      </Box>
      <Box mt={2} borderRadius={3} bgcolor={bgcolor} p={p}>
        {children}
      </Box>
      {footer && (
        <Box
          py={2}
          px={2}
          mb={4}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          bgcolor="rgba(0, 0, 0, 0.05)"
          borderRadius="0 0 20px 20px"
        >
          {footer}
        </Box>
      )}
    </Box>
  );
}

export function LoginSignupPagesLayoutCmp({ children, backBtn, rowGap = 4 }) {
  const navigate = useNavigate();

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <LoginSignupFeatureImgCmp />
      </Grid>
      <Grid item xs={6}>
        <Box
          pl={16}
          pr={20}
          display="flex"
          flexDirection="column"
          rowGap={rowGap}
          position="relative"
          minHeight="100vh"
        >
          <Box
            position="absolute"
            width="100%"
            top={40}
            left={0}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>{backBtn && <BackButtonCmp />}</Box>
            <Box mr={8}>
              <Typography variant="h3">EIRA</Typography>
            </Box>
          </Box>
          <Box pt={8} />
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}
