import { Box } from "@mui/material";
import React from "react";
import ShopPageCardCmp from "../../components/ShopPageCardCmp";
import { ShopPageContext } from "./ShopPageContext";

export default function ShopPageWorkshopCmp() {
  const { setOpenTimeDialog } = React.useContext(ShopPageContext);

  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <ShopPageCardCmp
        title="Brand Design Workshop with Michael"
        content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard"
        image="/images/workshop-1.jpg"
        timeFromHotel={"3km from hotel"}
        hours={"5 hour"}
        time={"4:00PM"}
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
      />
      <ShopPageCardCmp
        title="Online-Marketing Workshop with Marie"
        content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard"
        image="/images/workshop-2.png"
        timeFromHotel={"1.5km from hotel"}
        hours={"2 hour"}
        time={"3:00PM"}
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
        added
        tag
      />
    </Box>
  );
}
