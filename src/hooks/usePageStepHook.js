import React from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

export function usePageStepHook(key = "step") {
  let [searchParams, setSearchParams] = useSearchParams();
  const stepNo = React.useMemo(() => Number(searchParams.get(key)) ?? 0, [searchParams]);

  function handleNext() {
    setSearchParams(createSearchParams({ [key]: stepNo + 1 }));
  }

  function handlePrev() {
    setSearchParams(createSearchParams({ [key]: stepNo - 1 }));
  }

  function handleJump(val) {
    setSearchParams(createSearchParams({ [key]: val }));
  }

  return { stepNo, handleNext, handlePrev, handleJump };
}
