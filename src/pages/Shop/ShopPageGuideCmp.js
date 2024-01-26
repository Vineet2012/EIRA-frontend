import { Box, IconButton, Switch, Typography } from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import { AddIconCmp, CheckIconCmp, LocationIconCmp, TimeIconCmp } from "../../components/Icons";
import { ShopPageContext } from "./ShopPageContext";

export default function ShopPageGuideCmp() {
  const { setOpenTimeDialog } = React.useContext(ShopPageContext);

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={1}
        borderRadius={4}
        border="1px solid rgba(33, 33, 33, 0.2)"
      >
        <Typography fontWeight={500} color="text.light">
          Do you want to add a tourist guide into your retreat package?
        </Typography>
        <Switch defaultChecked />
      </Box>
      <Box display="flex" flexDirection="column" rowGap={4} mt={4}>
        <GuideCardCmp
          title="katty Anderson"
          content="She has an experience of 8 years as a tourist guide. She can translate 12 language and help you enjoy your trip."
          image="https://myblondebucketlist.com/wp-content/uploads/2023/04/IMG_1912-1024x683.webp"
          timeFromHotel={"Spain"}
          onOpenTimeDialog={() => setOpenTimeDialog(true)}
        />
        <GuideCardCmp
          title="Britney Johnson"
          content="She has an experience of 8 years as a tourist guide. She can translate 12 language and help you enjoy your trip."
          image="https://img.freepik.com/premium-photo/travel-guide-tourism-europe-woman-tourist-with-map-street_93675-60705.jpg"
          timeFromHotel={"Portugal"}
          onOpenTimeDialog={() => setOpenTimeDialog(true)}
          added
          tag
        />
        <GuideCardCmp
          title="Jimmy Gates"
          content="She has an experience of 8 years as a tourist guide. She can translate 12 language and help you enjoy your trip."
          image="https://media.istockphoto.com/id/855413388/photo/theres-so-much-to-see.jpg?s=612x612&w=0&k=20&c=0pYgKJ46BH8ziQ31CMEQFSNNcvJ5P1RIwiKMHNWDr1A="
          timeFromHotel={"Germany"}
          onOpenTimeDialog={() => setOpenTimeDialog(true)}
          added
          tag
        />
      </Box>
      {/* <Box display="flex" flexWrap="wrap" rowGap={4} columnGap={{ md: 1, lg: 4 }} mt={4}>
        <CardCmp
          imgUrl="https://www.private-guides.com/guide-in-portugal/lisbon-trip-road-5949/guide-portugal-5949.jpg"
          name="Britney Jhonson"
          location="Portugal"
        />
        <CardCmp
          imgUrl="https://www.popsugar.com.au/wp-content/uploads/sites/2/2023/11/Xbox-x-Popsugar-Style-Gaming-FI1-1-718x0-c-default.jpg"
          name="Katy Anderson"
          location="Spain"
        />
        <CardCmp
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1b/63/b4/c4/if-you-go-to-egypt-and.jpg"
          name="Jimmy Briggs"
          location="England"
        />
      </Box> */}
    </Box>
  );
}

function GuideCardCmp({ title, content, image, added, tag, timeFromHotel }) {
  return (
    <Box display="flex" alignItems="center" columnGap={4}>
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

// function CardCmp({ imgUrl, name, location }) {
//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       p="3px"
//       width={280}
//       border="1px solid rgba(196, 223, 182, 1)"
//       borderRadius={4}
//     >
//       <Box height={200} width="100%" borderRadius={3} overflow="hidden">
//         <img
//           src={imgUrl}
//           alt="guide"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </Box>
//       <Box display="flex" flexDirection="column" rowGap={2} p={2}>
//         <Box display="flex" alignItems="center" justifyContent="space-between">
//           <Box>
//             <Typography variant="h5Alt" fontWeight={600}>
//               {name}
//             </Typography>
//             <IconWithTextSimpleChipCmp icon={LocationIconCmp} label={location} color="text.light" />
//           </Box>
//           <IconButton variant="rounded">
//             <AddIconCmp />
//           </IconButton>
//         </Box>
//         <Divider />
//         <Typography variant="body2">
//           She has an experience of 8 years as a tourist guide. She can translate 12 language and
//           help you enjoy your trip.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
