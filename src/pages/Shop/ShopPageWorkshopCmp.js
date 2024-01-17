import { Box } from "@mui/material";
import React from "react";
import ShopPageCardCmp from "../../components/ShopPageCardCmp";
import { ShopPageContext } from "./ShopPageContext";

export default function ShopPageWorkshopCmp() {
  const { setOpenTimeDialog } = React.useContext(ShopPageContext);

  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <ShopPageCardCmp
        title="Design Workshop with Sr. Product Designer"
        content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard"
        image="https://blog.intercomassets.com/blog/wp-content/uploads/2017/03/Tips_for_Running_Design_Workshops_Logo.jpg.optimal.jpg"
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
      />
      <ShopPageCardCmp
        title="Marketing Workshop"
        content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard"
        image="https://www.npws.net/hs-fs/hubfs/How%20to%20prepare%20for%20a%20marketing%20strategy%20workshop.jpg?width=1200&height=675&name=How%20to%20prepare%20for%20a%20marketing%20strategy%20workshop.jpg"
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
        added
        tag
      />
    </Box>
  );
}
