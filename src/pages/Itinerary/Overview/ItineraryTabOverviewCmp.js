import { Avatar, Box, Button, Grid, LinearProgress, Link, Rating, Typography } from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "../../../components/Chips";
import {
  ArrowHorizontalIconCmp,
  FireIconCmp,
  LocationIconCmp,
  SpaIconCmp,
  TrekIconCmp,
  WavesIconCmp,
} from "../../../components/Icons";
import OfferingGridCmp from "../../../components/OfferingCmp";
import ItineraryBodyRightCmp from "../ItineraryBodyRightCmp";
import AboutDetailsDialogCmp from "./AboutDetailsDialogCmp";
import OfferingsDetailsDialogCmp from "./OfferingsDetailsDialogCmp";

export default function ItineraryTabOverviewCmp() {
  return (
    <Box display="flex" columnGap={8}>
      <Box flex={3} flexShrink={0}>
        <LeftCmp />
      </Box>
      <Box flex={1.3}>
        <ItineraryBodyRightCmp />
      </Box>
    </Box>
  );
}

function LeftCmp() {
  const [openAboutDialog, setOpenAboutDialog] = React.useState(false);
  const [openOfferingsDialog, setOpenOfferingsDialog] = React.useState(false);

  return (
    <Box display="flex" flexDirection="column" rowGap={6}>
      <SectionCmp heading="About this space">
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="body1" lineHeight={1.8}>
            Immerse yourself in nature and pure luxury of Shangrila Ranao situated on top of Tandi
            Hill near Jibhi. Not only yu can pour yourself a hot bubbl bath, but also enjoy stunning
            views right from your bthtub. Immerse yourself in nature and pure luxury of Shangrila
            Ranao situated on top of Tandi Hill near Jibhi. Not only yu can pour yourself a hot
            bubbl bath, but also enjoy stunning views right from your bthtub.
          </Typography>
          <Box mt={1} sx={{ cursor: "pointer" }} onClick={() => setOpenAboutDialog(true)}>
            <IconWithTextSimpleChipCmp
              icon={ArrowHorizontalIconCmp}
              label="Show More"
              reverse
              color="primary.main"
              fontWeight={700}
            />
          </Box>
        </Box>
      </SectionCmp>

      <Box display="flex" flexWrap="wrap" columnGap={2} rowGap={2}>
        <IconWithTextSimpleChipCmp icon={SpaIconCmp} label="Fabulous spa" contained />
        <IconWithTextSimpleChipCmp icon={WavesIconCmp} label="Amazing surf experience" contained />
        <IconWithTextSimpleChipCmp icon={TrekIconCmp} label="Thrilling Trek" contained />
      </Box>

      <SectionCmp heading="What this place offers">
        <Box width="72%">
          <OfferingGridCmp
            onClickLaunch={() => setOpenOfferingsDialog(true)}
            spacing={3}
            data={[
              {
                icon: FireIconCmp,
                label: "Dedicated Workspace",
                content: "A room with wifi that's well suited for working",
              },
              {
                icon: FireIconCmp,
                label: "Dedicated Workspace",
                content: "A room with wifi that's well suited for working",
              },
              {
                icon: FireIconCmp,
                label: "Dedicated Workspace",
                content: "A room with wifi that's well suited for working",
              },
            ]}
          />
        </Box>
      </SectionCmp>

      <SectionCmp
        heading="Where you'll be?"
        headingExtra={
          <IconWithTextSimpleChipCmp
            icon={LocationIconCmp}
            label="Country in South Asia"
            contained
          />
        }
      >
        <Box borderRadius={4} overflow="hidden">
          <img
            src="/images/google-map.png"
            alt="google map"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </SectionCmp>

      <SectionCmp heading="Still have a question?">
        <Typography>
          If you cannot find answer to your question in our FAQ, you can always contact us. We will
          answer to you shortly!
        </Typography>
        <Box mt={1}>
          <Button variant="outlined" endIcon={<ArrowHorizontalIconCmp />}>
            Contact Us
          </Button>
        </Box>
      </SectionCmp>

      <SectionCmp
        heading="Reviews"
        headingExtra={
          <Typography variant="h5Alt" fontWeight={600} color="primary.main">
            (24)
          </Typography>
        }
      >
        <Box display="flex" alignItems="center" columnGap={4}>
          <RatingOnParametersCmp label="Cleanliness" rating={4.9} />
          <Box height={80} width="1px" borderRadius={2} bgcolor="text.light"></Box>
          <RatingOnParametersCmp label="Accuracy" rating={4.9} />
          <Box height={80} width="1px" borderRadius={2} bgcolor="text.light"></Box>
          <RatingOnParametersCmp label="Checkin" rating={4.9} />
          <Box height={80} width="1px" borderRadius={2} bgcolor="text.light"></Box>
          <RatingOnParametersCmp label="Location" rating={4.9} />
          <Box height={80} width="1px" borderRadius={2} bgcolor="text.light"></Box>
          <RatingOnParametersCmp label="Value" rating={4.9} />
        </Box>
        <Box mt={4}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <OverallRatingsCmp />
            </Grid>
            {[...new Array(5)].map((_, idx) => (
              <Grid key={idx} item xs={4}>
                <ReviewCmp />
              </Grid>
            ))}
          </Grid>
          <Box pt={4} />
          <Button variant="outlined" fullWidth>
            Load more reviews
          </Button>
        </Box>
      </SectionCmp>
      <AboutDetailsDialogCmp open={openAboutDialog} handleClose={() => setOpenAboutDialog(false)} />
      <OfferingsDetailsDialogCmp
        open={openOfferingsDialog}
        handleClose={() => setOpenOfferingsDialog(false)}
      />
    </Box>
  );
}

function SectionCmp({ heading, children, headingExtra }) {
  return (
    <Box>
      <Box display="flex" alignItems="center" columnGap={2}>
        <Typography variant="h5Alt" fontWeight={600}>
          {heading}
        </Typography>
        {headingExtra}
      </Box>
      <Box pt={2} />
      {children}
    </Box>
  );
}

function RatingOnParametersCmp({ label, rating }) {
  return (
    <Box display="flex" flexDirection="column" rowGap={1}>
      <Box
        width={32}
        height={32}
        borderRadius={20}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#fff"
        bgcolor="primary.main"
      >
        <LocationIconCmp fontSize="small" />
      </Box>
      <Typography fontWeight={700} color="primary.main">
        {label}
      </Typography>
      <Typography variant="body2">{rating}</Typography>
    </Box>
  );
}

function OverallRatingsCmp() {
  return (
    <Box
      bgcolor="secondary.main"
      height="100%"
      width="100%"
      borderRadius={4}
      p={2}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <Typography fontWeight={700} color="primary">
          Overall Ratings
        </Typography>
        <Typography fontWeight={700} color="primary">
          4.2
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" width="100%" rowGap={0.5} mt={1}>
        {[...new Array(5)].map((_, idx) => (
          <Box key={idx} display="flex" alignItems="center" width="100%">
            <Box width={24}>
              <Typography variant="body2">{5 - idx}</Typography>
            </Box>
            <LinearProgress
              sx={{
                height: 8,
                width: "100%",
                color: "primary.main",
                borderRadius: 16,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
              variant="determinate"
              value={80}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ReviewCmp() {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" columnGap={1} alignItems="center">
        <Avatar
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          sx={{ width: 32, height: 32 }}
        />
        <Typography fontWeight={700} color="primary.main">
          Genellia
        </Typography>
      </Box>
      <Box my={1} display="flex" alignItems="center" columnGap={1}>
        <Rating name="size-small" defaultValue={2} size="small" sx={{ color: "primary.main" }} />
        <Typography variant="caption" fontWeight={700}>
          September 22, 2023
        </Typography>
      </Box>
      <Typography variant="body2">
        I recently stayed at a charming guesthouse in Chandigarh, and it was an absolute delight.
        The ambiance was cozy, and the attention to detail in the room decor was impressive.
      </Typography>
      <Link>
        <Typography variant="body2" fontWeight={700}>
          Show More
        </Typography>
      </Link>
    </Box>
  );
}
