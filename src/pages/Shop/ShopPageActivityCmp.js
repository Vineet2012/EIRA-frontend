import { Box } from "@mui/material";
import React from "react";
import ShopPageCardCmp from "../../components/ShopPageCardCmp";
import { ShopPageContext } from "./ShopPageContext";

export default function ShopPageActivityCmp() {
  const { setOpenTimeDialog } = React.useContext(ShopPageContext);

  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <ShopPageCardCmp
        title="Speed boating from Velana International Airport"
        content="Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard"
        image="https://www.aethos.com/ericeira/wp-content/uploads/AethosEriceira3956_2000x1300-1024x684.jpg"
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
      />
      <ShopPageCardCmp
        title="Speed boating from Velana International Airport"
        content="          Huruvalhi, Maldives."
        image="https://www.aethos.com/ericeira/wp-content/uploads/AethosEriceira3956_2000x1300-1024x684.jpg"
        onOpenTimeDialog={() => setOpenTimeDialog(true)}
        added
        tag
      />
    </Box>
  );
}
