import { Box, Button, Typography } from "@mui/material";
import { MultiChipsCmp } from "../../components/Chips";
import StandardDialogCmp from "../../components/StandardDialogCmp";

export default function ChooseTimeDialog({ open, handleClose }) {
  return (
    <StandardDialogCmp
      open={open}
      handleClose={handleClose}
      title="Choose a time for the activity"
      maxWidth="xs"
    >
      <Box mt={4}>
        <Typography fontWeight={500} color="text.light">
          Pick a Time
        </Typography>
        <Box mt={2} />
        <MultiChipsCmp
          data={[
            { text: "11:00 to 12:00" },
            { text: "12:00 to 13:00" },
            { text: "13:00 to 14:00" },
            { text: "14:00 to 15:00" },
            { text: "15:00 to 16:00" },
            { text: "16:00 to 17:00" },
            { text: "17:00 to 18:00" },
          ]}
          height={48}
          typographyVariant="body2"
          spacing={2}
        />
      </Box>
      <Box mt={8}>
        <Button variant="contained" fullWidth>
          Submit
        </Button>
      </Box>
    </StandardDialogCmp>
  );
}
