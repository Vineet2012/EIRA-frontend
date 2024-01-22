import React from "react";

export function useMultipleSelectHook() {
  const [state, setState] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setState(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return { state, handleChange };
}
