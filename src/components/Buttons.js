import { useNavigate } from "react-router-dom";
import { IconWithTextSimpleChipCmp } from "./Chips";
import { ArrowHorizontalIconCmp } from "./Icons";

export function BackButtonCmp() {
  const navigate = useNavigate();

  return (
    <IconWithTextSimpleChipCmp
      icon={ArrowHorizontalIconCmp}
      iconProps={{ direction: "left" }}
      label="Back"
      onClick={() => navigate(-1)}
      color="primary"
      fontWeight={700}
    />
  );
}
