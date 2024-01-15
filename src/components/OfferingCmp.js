import { Box, Grid, Typography } from "@mui/material";
import { FireIconCmp } from "./Icons";

export default function OfferingGridCmp({ data, spacing = 2, xs = 6, onClickLaunch }) {
  return (
    <Grid container spacing={spacing}>
      {data.map((el, idx) => (
        <Grid item xs={xs} key={idx}>
          <OfferingCmp {...el} />
        </Grid>
      ))}
      {onClickLaunch && (
        <Grid item xs={xs}>
          <Box sx={{ cursor: "pointer" }} onClick={onClickLaunch}>
            <OfferingCmp
              icon={FireIconCmp}
              label="Show more"
              content="See all 50+ amenities"
              bgcolor="secondary.main"
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

function OfferingCmp({ icon, label, content, bgcolor }) {
  const Icon = icon;
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor={bgcolor}
      rowGap={1}
      p={bgcolor && 2}
      borderRadius={4}
    >
      <Box
        width={32}
        height={32}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#fff"
        bgcolor="primary.main"
        borderRadius={20}
      >
        <Icon />
      </Box>
      <Box>
        <Typography variant="body1" color="primary" fontWeight={700}>
          {label}
        </Typography>
        <Typography variant="body2" color="text.light">
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
