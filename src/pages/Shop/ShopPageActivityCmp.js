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
        image="https://www.aethos.com/ericeira/wp-content/uploads/AethosEriceira3956_2000x1300-1024x684.jpg"
        timeFromHotel={"2km from hotel"}
        hours={"3 hour"}
        time={"5:00PM"}
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
      />
      <ShopPageCardCmp
        title="Spa and sauna access"
        content="Huruvalhi, Maldives."
        image="https://www.aethos.com/ericeira/wp-content/uploads/Aethos-Ericeira_pool_DSC7180-Edytuj_web-1024x683.jpg"
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
