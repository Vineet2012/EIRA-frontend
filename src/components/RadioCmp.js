import { Box } from "@mui/material";

export default function RadioCmp({ selected }) {
  return selected ? (
    <Box
      height={20}
      width={20}
      borderRadius={16}
      bgcolor="primary.main"
      flexShrink={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box height={8} width={8} borderRadius={16} bgcolor="secondary.main" flexShrink={0} />
    </Box>
  ) : (
    <Box height={20} width={20} borderRadius={16} bgcolor="secondary.main" flexShrink={0} />
  );
}
