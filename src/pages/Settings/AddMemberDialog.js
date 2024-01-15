import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import * as React from "react";
import { DropdownCmp, TextFieldWithLabelCmp } from "../../components/Inputs";
import StandardDialogCmp from "../../components/StandardDialogCmp";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddMemberDialog({ handleClose, open }) {
  return (
    <StandardDialogCmp
      title="Add members to your organisation"
      open={open}
      handleClose={handleClose}
    >
      <Box display="flex" flexDirection="column" rowGap={2} mt={4}>
        <Box display="flex" justifyContent="space-between" columnGap={4}>
          <TextFieldWithLabelCmp label="First Name" />
          <TextFieldWithLabelCmp label="Last Name" />
        </Box>
        <TextFieldWithLabelCmp label="Email" />
        <DropdownCmp label="Role" options={options} value={0} />
        <Box mt={2}>
          <Button variant="contained" fullWidth size="small">
            Invite
          </Button>
        </Box>
      </Box>
    </StandardDialogCmp>
  );
}

const options = [
  { id: 0, cmp: "Team Building" },
  { id: 1, cmp: "Team Building" },
  { id: 2, cmp: "Team Building" },
];
