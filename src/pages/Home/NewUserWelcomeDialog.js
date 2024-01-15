import { Box, Button, Dialog, Slide, Typography } from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewUserWelcomeDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <Box bgcolor="secondary.main" display="flex" flexDirection="column" p={4} rowGap={4}>
        <Box display="flex" alignItems="center" columnGap={2}>
          <Box display="flex" flexDirection="column" rowGap={1}>
            <Typography variant="h4Alt" fontWeight={600} color="primary">
              Fantastic news, Krishna! You've successfully completed onboarding
            </Typography>
            <Typography variant="body2Alt">
              Ready to get started? Hit the button below to dive into your dashboard and explore
              what awaits!
            </Typography>
          </Box>
          <Box>
            <img src="/images/home-welcome.png" alt="welcome" />
          </Box>
        </Box>
        <Box bgcolor="#fff" borderRadius={3}>
          <Button fullWidth onClick={handleClose}>
            Explore EIRA
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
