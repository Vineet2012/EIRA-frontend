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
import { ItineraryPageContext } from "./ItineraryPageContext";

export default function ItineraryHeaderCmp() {
  const navigate = useNavigate();
  const { retreat } = React.useContext(ItineraryPageContext);

  return (
    <Box>
      <BackButtonCmp />
      <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
        <Typography variant="h2Alt" fontWeight={700}>
          {retreat.name}
        </Typography>
        <Box display="flex" alignItems="center" columnGap={2}>
          <IconWithTextSimpleChipCmp
            icon={LocationIconCmp}
            label={retreat.location}
            contained
            color="primary.main"
          />
          {/* <IconWithTextSimpleChipCmp
            icon={CalendarIconCmp}
            label="7 Days, 8 Nights"
            contained
            color="primary.main"
          /> */}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" columnGap={2} mt={2}>
        <IconWithTextSimpleChipCmp
          icon={GolfFlagIconCmp}
          label="Team Building"
          color="primary.main"
        />
        <IconWithTextSimpleChipCmp
          icon={MembersIconCmp}
          label={retreat.members + " members"}
          color="primary.main"
        />
        <IconWithTextSimpleChipCmp
          icon={CalendarIconCmp}
          label={retreat.duration}
          color="primary.main"
        />
      </Box>
      <ImagesCmp images={retreat.images} />
    </Box>
  );
}

function ImagesCmp({ images }) {
  const [open, setOpen] = React.useState(false);
  const height = 300;

  return (
    <Box display="flex" columnGap={2} height={height} my={4}>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img src={images[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
            src={images[1]}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box borderRadius={3} overflow="hidden" flex={1}>
          <img
            src={images[2]}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box borderRadius={3} overflow="hidden" flex={1.6} position="relative">
        <img src={images[3]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
      <ImagesOverlayCmp images={images} open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}

function ImagesOverlayCmp({ images, open, handleClose }) {
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
        <ImgLayout1 img1={images[0]} img2={images[1]} img3={images[2]} />
        <ImgLayout2 img={images[3]} />
        <ImgLayout3 img1={images[4]} img2={images[5]} />
        <ImgLayout1 img1={images[6]} img2={images[7]} img3={images[8]} />
      </Box>
    </Box>
  );
}

function ImgLayout1({ img1, img2, img3 }) {
  const height = 300;

  return (
    <Box display="flex" height={height} columnGap={2}>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img src={img1} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
          <img src={img2} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <Box borderRadius={3} overflow="hidden" flex={1}>
          <img src={img3} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
      </Box>
    </Box>
  );
}

function ImgLayout2({ img }) {
  const height = 200;

  return (
    <Box display="flex" height={height} columnGap={2}>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>
    </Box>
  );
}

function ImgLayout3({ img1, img2 }) {
  const height = 200;

  return (
    <Box display="flex" height={height} columnGap={2}>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img src={img1} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>
      <Box borderRadius={3} overflow="hidden" flex={1}>
        <img src={img2} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>
    </Box>
  );
}
