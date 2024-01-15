import { RemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { AddIconCmp } from "./Icons";

export default function QACmp({ title, content }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Box width="100%">
      <Box mb={1} display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5Alt" fontWeight={700}>
          {title}
        </Typography>
        <IconButton onClick={() => setOpen((val) => !val)}>
          {open ? <RemoveOutlined /> : <AddIconCmp />}
        </IconButton>
      </Box>

      {open && (
        <Typography variant="body2" color="text.light">
          {content}
        </Typography>
      )}
    </Box>
  );
}
