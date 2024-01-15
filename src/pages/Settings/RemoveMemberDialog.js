import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import * as React from "react";
import StandardDialogCmp from "../../components/StandardDialogCmp";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RemoveMemberDialog({ handleClose, open }) {
  return (
    <StandardDialogCmp open={open} handleClose={handleClose} maxWidth="xs">
      <Box textAlign="center" px={6}>
        <Typography variant="h5Alt" fontWeight={500}>
          Do you want ot remove{" "}
          <Typography variant="h5Alt" fontWeight={500} color="primary">
            "Krishna"
          </Typography>{" "}
          as your team member?
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" columnGap={2} mt={4}>
        <Button variant="contained" color="error" fullWidth size="small">
          Delete
        </Button>
        <Button variant="outlined" fullWidth size="small">
          Cancel
        </Button>
      </Box>
    </StandardDialogCmp>
  );
}
