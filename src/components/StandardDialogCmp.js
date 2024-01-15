import { Box, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import * as React from "react";
import { CrossIconCmp } from "./Icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StandardDialogCmp({
  open,
  handleClose,
  maxWidth = "sm",
  children,
  title,
  fullWidth,
}) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <DialogContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5Alt" fontWeight={700}>
            {title}
          </Typography>
          <IconButton onClick={handleClose}>
            <CrossIconCmp sx={{ color: "text.light" }} />
          </IconButton>
        </Box>
        {children}
      </DialogContent>
    </Dialog>
  );
}
