import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "./Chips";
import { AddIconCmp, CalendarIconCmp, CheckIconCmp, LocationIconCmp, TimeIconCmp } from "./Icons";

export default function ShopPageCardCmp({
  onClick,
  title,
  content,
  image,
  added,
  tag,
  onOpenTimeDialog,
  timeFromHotel,
  hours,
  time,
}) {
  return (
    <Box display="flex" alignItems="center" columnGap={4} onClick={onClick}>
      <Box
        maxWidth={{ md: 180, lg: 240 }}
        height={{ md: 120, lg: 120 }}
        flexShrink={0}
        borderRadius={4}
        overflow="hidden"
        position="relative"
      >
        <img src={image} alt="soe" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        {tag && (
          <Box
            position="absolute"
            top={8}
            left={8}
            bgcolor="rgba(33, 33, 33, 0.48)"
            color="#fff"
            display="flex"
            alignItems="center"
            borderRadius={16}
            columnGap={0.5}
            px={1}
            py={0.25}
          >
            <TimeIconCmp sx={{ fontSize: 14 }} />
            <Typography variant="caption" color="inherit">
              Pending
            </Typography>
          </Box>
        )}
      </Box>
      <Box display="flex" flexDirection="column" rowGap={1} flex={1}>
        <Typography variant="h5Alt" fontWeight={500}>
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
        <Box display="flex" alignItems="center" columnGap={2}>
          <IconWithTextSimpleChipCmp icon={LocationIconCmp} label={timeFromHotel} />
          <IconWithTextSimpleChipCmp icon={TimeIconCmp} label={hours} />
          <IconWithTextSimpleChipCmp
            icon={CalendarIconCmp}
            label={time}
            onClick={onOpenTimeDialog}
          />
        </Box>
      </Box>
      <Box>
        <IconButton variant={added ? "outlined" : "rounded"}>
          {added ? <CheckIconCmp /> : <AddIconCmp />}
        </IconButton>
      </Box>
    </Box>
  );
}
