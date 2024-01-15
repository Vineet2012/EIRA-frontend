import React from "react";
import { usePageStepHook } from "../../hooks/usePageStepHook";

export const ShopPageContext = React.createContext(null);

export default function ShopPageContextProvider({ children }) {
  const { stepNo, handleJump } = usePageStepHook("tab");
  const [openTimeDialog, setOpenTimeDialog] = React.useState(false);

  return (
    <ShopPageContext.Provider
      value={{
        stepNo,
        handleJump,
        openTimeDialog,
        setOpenTimeDialog,
      }}
    >
      {children}
    </ShopPageContext.Provider>
  );
}
