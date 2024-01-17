import React from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCmp() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("home");
  }, []);
  return <div>Loading...</div>;
}
