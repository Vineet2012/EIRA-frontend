import React from "react";
import { usePageStepHook } from "../../hooks/usePageStepHook";

export const CreateRetreatContext = React.createContext(null);

export default function CreateRetreatContextProvider({ children }) {
  const { stepNo, handlePrev, handleNext } = usePageStepHook();

  console.log({ stepNo });

  return (
    <CreateRetreatContext.Provider
      value={{
        stepNo,
        handleNext,
        handlePrev,
      }}
    >
      {children}
    </CreateRetreatContext.Provider>
  );
}
