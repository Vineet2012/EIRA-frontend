import { Box } from "@mui/material";
import React from "react";
import ShopPageCardCmp from "../../components/ShopPageCardCmp";
import { ShopPageContext } from "./ShopPageContext";

export default function ShopPageActivityCmp() {
  const { setOpenTimeDialog } = React.useContext(ShopPageContext);

  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <ShopPageCardCmp
        title="Sunset speed boating tour and beach hopping"
        content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/54/06/31/caption.jpg?w=1200&h=-1&s=1"
        timeFromHotel={"2km from hotel"}
        hours={"3 hour"}
        time={"5:00PM"}
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
      />
      <ShopPageCardCmp
        title="Spa and sauna access"
        content="Huruvalhi, Maldives."
        image="https://ik.imagekit.io/bi5ihkjoby38/prod-activities/activities/846df43b-c2a5-4dad-b49d-7c13c12d78f6/22bf2279-113a-4bd2-b69c-b73a18cc4540/161103_Westin_Nashville_0214s8tc.jpg?tr=w-1920"
        timeFromHotel={"0km from hotel"}
        hours={"24 hour access"}
        time={"n/a"}
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
        added
        tag
      />
    </Box>
  );
}
