import { useTheme } from "@emotion/react";
import { Box, Button, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  CalendarIconCmp,
  ChevronArrowIconCmp,
  LocationIconCmp,
  MembersIconCmp,
} from "../../components/Icons";
import ReviewDialog from "./ReviewDialog";

const cardSizeLg = 360;
const cardSizeMd = 300;
const cardGap = 32;

export default function PastRetreatsCmp() {
  const [open, setOpen] = React.useState(false);
  const reviewBoxRef = React.useRef(null);
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  function handleOpenReviewBox(id) {
    setOpen(true);
  }

  function handleScrollForward() {
    reviewBoxRef.current.scrollLeft += (isLg ? cardSizeLg : cardSizeMd) + cardGap;
  }

  function handleScrollBackward() {
    reviewBoxRef.current.scrollLeft -= (isLg ? cardSizeLg : cardSizeMd) + cardGap;
  }

  return (
    <Box>
      <Typography variant="h5">Where you’ve been</Typography>
      <Box display="flex" alignItems="center" mt={4}>
        <Box>
          <IconButton variant="rounded" onClick={handleScrollBackward}>
            <ChevronArrowIconCmp direction="left" />
          </IconButton>
        </Box>
        <Box
          mx={4}
          overflow="auto"
          width={0}
          flex={1}
          ref={reviewBoxRef}
          sx={{ scrollBehavior: "smooth", "::-webkit-scrollbar": { display: "none" } }}
        >
          <Box display="flex" columnGap={cardGap / 8}>
            <CardCmp
              onClickReview={() => setOpen(true)}
              image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira-bathroom-0104_web-819x1024.jpg"
              title="The Location: A Modern Design Hotel above the Ocean"
            />
            <CardCmp
              onClickReview={() => setOpen(true)}
              image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira_rooms_garden-terrace-room_DSC0011-2-HDR_PIONweb_2000x1200-1-1024x683.jpg"
              title="Culinary Delights: A taste of sea with a touch of land"
            />
            <CardCmp
              onClickReview={() => setOpen(true)}
              image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira-bed-closeup-0509-1024x682.jpg"
              title="The Location: A Modern Design Hotel above the Ocean"
            />
            <CardCmp
              onClickReview={() => setOpen(true)}
              image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira_ONDA_DSC0017-4_PIONweb_2000x1200-1024x683.jpg"
              title="Culinary Delights: A taste of sea with a touch of land"
            />
            <CardCmp
              onClickReview={() => setOpen(true)}
              image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira-bathroom-0104_web-819x1024.jpg"
              title="Wellness Amenities: Wellbeing for all senses"
            />
          </Box>
        </Box>
        <Box>
          <IconButton variant="rounded" onClick={handleScrollForward}>
            <ChevronArrowIconCmp direction="right" />
          </IconButton>
        </Box>
      </Box>
      <ReviewDialog open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}

function CardCmp({ id, onClickReview, image, title }) {
  return (
    <Box
      border="1px solid #C4DFB6"
      borderRadius={4}
      p={0.5}
      width={{ md: cardSizeMd, lg: cardSizeLg }}
      flexShrink={0}
    >
      <Box height={{ md: (cardSizeMd * 2) / 4, lg: (cardSizeLg * 2) / 4 }}>
        <img
          style={{
            borderRadius: "16px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={image}
        />
      </Box>
      <Box p={2}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h5Alt" fontWeight={500}>
            {title}
          </Typography>
          <Box display="flex" mt={1} />
          <Typography variant="body2">
            Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard
            Huruvalhi, Maldives.
          </Typography>
        </Box>
        <Box mt={2} display="flex" flexDirection="column" rowGap={1}>
          <IconWithTextSimpleChipCmp icon={LocationIconCmp} label="Country in South Asia" />
          <IconWithTextSimpleChipCmp
            icon={CalendarIconCmp}
            label="Fri, 11 Jan 2024 - Sat, 15 Jan 2024"
          />
          <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="25 Members" />
        </Box>
        <Box mt={6}>
          <Button onClick={() => onClickReview(id)} fullWidth variant="outlined" size="small">
            Add a Review
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
