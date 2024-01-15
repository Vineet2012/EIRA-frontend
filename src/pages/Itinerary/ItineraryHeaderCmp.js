import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BackButtonCmp } from "../../components/Buttons";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  ArrowHorizontalIconCmp,
  CalendarIconCmp,
  GolfFlagIconCmp,
  LocationIconCmp,
  MembersIconCmp,
} from "../../components/Icons";

export default function ItineraryHeaderCmp() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box onClick={() => navigate(-1)} sx={{ cursor: "pointer" }}>
        <BackButtonCmp />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
        <Typography variant="h2Alt" fontWeight={700}>
          Club Quater Hotel in San Fransicso
        </Typography>
        <Box display="flex" alignItems="center" columnGap={2}>
          <IconWithTextSimpleChipCmp
            icon={LocationIconCmp}
            label="Country in South Asia"
            contained
            color="primary.main"
          />
          <IconWithTextSimpleChipCmp
            icon={CalendarIconCmp}
            label="7 Days, 8 Nights"
            contained
            color="primary.main"
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={2} mt={2}>
        <IconWithTextSimpleChipCmp
          icon={GolfFlagIconCmp}
          label="Team Building"
          color="primary.main"
        />
        <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="25 members" color="primary.main" />
        <IconWithTextSimpleChipCmp
          icon={CalendarIconCmp}
          label="7 Days, 8 Nights"
          color="primary.main"
        />
      </Box>
      <ImagesCmp />
    </Box>
  );
}

function ImagesCmp() {
  const [open, setOpen] = React.useState(false);
  const height = 300;

  return (
    <Box display="flex" columnGap={2} height={height} my={4}>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img
          src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        borderRadius={3}
        overflow="hidden"
        flex={1.3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height={300}
        rowGap={2}
      >
        <Box borderRadius={3} overflow="hidden" flex={1}>
          <img
            src="https://images.adsttc.com/media/images/5510/ce9d/e58e/ce15/1100/035b/medium_jpg/015_Side_View_03.jpg?1427164812"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box borderRadius={3} overflow="hidden" flex={1}>
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/93/35/18/1000_F_293351862_cIrcudl46dYHw22I4QzCK9HCz7uS8m3a.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box borderRadius={3} overflow="hidden" flex={1.6} position="relative">
        <img
          src="https://www.stairsupplies.com/wp-content/uploads/2015/08/StairSupplies_HeroImage_FamousStaircasesInFilm_v1.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box position="absolute" bottom={12} right={12}>
          <Button
            variant="contained"
            sx={{
              color: "primary.main",
              backgroundColor: "#FFF",
              ":hover": { backgroundColor: "#FFF" },
            }}
            onClick={() => setOpen(true)}
          >
            Show all photos <Box ml={1} /> <ArrowHorizontalIconCmp direction="right" />
          </Button>
        </Box>
      </Box>
      <ImagesOverlayCmp open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}

function ImagesOverlayCmp({ open, handleClose }) {
  if (!open) return null;
  return (
    <Box
      height="100vh"
      width="100vw"
      bgcolor="rgba(0,0,0,0.8)"
      zIndex={3000}
      position="fixed"
      top={0}
      left={0}
      onClick={handleClose}
      overflow="auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        width="50%"
        alignItems="center"
        margin="32px auto"
        rowGap={2}
      >
        <ImgLayout1 />
        <ImgLayout2 />
        <ImgLayout3 />
      </Box>
    </Box>
  );
}

function ImgLayout1() {
  const height = 300;

  return (
    <Box display="flex" height={height} columnGap={2}>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img
          src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        borderRadius={3}
        overflow="hidden"
        flex={1.3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height={height}
        rowGap={2}
      >
        <Box borderRadius={3} overflow="hidden" flex={1}>
          <img
            src="https://images.adsttc.com/media/images/5510/ce9d/e58e/ce15/1100/035b/medium_jpg/015_Side_View_03.jpg?1427164812"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box borderRadius={3} overflow="hidden" flex={1}>
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/93/35/18/1000_F_293351862_cIrcudl46dYHw22I4QzCK9HCz7uS8m3a.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function ImgLayout2() {
  const height = 200;

  return (
    <Box display="flex" height={height} columnGap={2}>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img
          src="https://www.stairsupplies.com/wp-content/uploads/2015/08/StairSupplies_HeroImage_FamousStaircasesInFilm_v1.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}

function ImgLayout3() {
  const height = 200;

  return (
    <Box display="flex" height={height} columnGap={2}>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img
          src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img
          src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}
