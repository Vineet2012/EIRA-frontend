import { Box } from "@mui/material";
import React from "react";
import ShopPageCardCmp from "../../components/ShopPageCardCmp";
import { ShopPageContext } from "./ShopPageContext";

export default function ShopPagePackagesCmp() {
  const { setOpenTimeDialog } = React.useContext(ShopPageContext);

  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <ShopPageCardCmp
        title="Design Workshop with Sr. Product Designer"
        content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard"
        image="https://blog.intercomassets.com/blog/wp-content/uploads/2017/03/Tips_for_Running_Design_Workshops_Logo.jpg.optimal.jpg"
        timeFromHotel={"2km from hotel"}
        hours={"2 hour"}
        time={"3:00PM"}
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
      />
      <ShopPageCardCmp
        title="Design Workshop with Sr. Product Designer"
        content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard"
        image="https://blog.intercomassets.com/blog/wp-content/uploads/2017/03/Tips_for_Running_Design_Workshops_Logo.jpg.optimal.jpg"
        timeFromHotel={"1km from hotel"}
        hours={"5 hour"}
        time={"5:00PM"}
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
        added
        tag
      />
    </Box>
  );
}
