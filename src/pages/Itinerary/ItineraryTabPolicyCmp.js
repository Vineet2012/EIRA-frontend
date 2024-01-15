import { Box, Typography } from "@mui/material";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import { CheckCircleIconCmp, CrossCircleIconCmp } from "../../components/Icons";
import ItineraryBodyRightCmp from "./ItineraryBodyRightCmp";

export default function ItineraryTabPolicyCmp() {
  return (
    <Box display="flex" columnGap={8}>
      <Box flex={3}>
        <LeftCmp />
      </Box>
      <Box flex={1.3}>
        <ItineraryBodyRightCmp />
      </Box>
    </Box>
  );
}

function LeftCmp() {
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <Typography variant="h5Alt" fontWeight={700}>
        Terms & Conditions
      </Typography>
      <Typography lineHeight={1.8}>
        Immerse yourself in nature and pure luxury at Shangrila Rénao situated on top of Tandi hill
        near Jibhi. Not only can you pour yourself in a hot bubble bath but also enjoy the stunning
        views right from your bathtub.
      </Typography>
      <Box display="flex" flexDirection="column" rowGap={2}>
        <IconWithTextSimpleChipCmp
          icon={CheckCircleIconCmp}
          label="Passport, Driving License, Govt. ID and Aadhar are accepted as ID proof(s)"
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
        />
        <IconWithTextSimpleChipCmp
          icon={CheckCircleIconCmp}
          label="Pets are not allowed."
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
        />
        <IconWithTextSimpleChipCmp
          icon={CheckCircleIconCmp}
          label="Outside food is not allowed."
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
        />
        <IconWithTextSimpleChipCmp
          icon={CheckCircleIconCmp}
          label="Groups with only male guests are not allowed at this property"
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
        />
        <IconWithTextSimpleChipCmp
          icon={CheckCircleIconCmp}
          label="Passport, Driving License, Govt. ID and Aadhar are accepted as ID proof(s)"
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
        />
        <IconWithTextSimpleChipCmp
          icon={CrossCircleIconCmp}
          label="Smoking not allowed."
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
          color="red"
        />
        <IconWithTextSimpleChipCmp
          icon={CrossCircleIconCmp}
          label="Smoking not allowed."
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
          color="red"
        />
        <IconWithTextSimpleChipCmp
          icon={CrossCircleIconCmp}
          label="Smoking not allowed."
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
          color="red"
        />
        <IconWithTextSimpleChipCmp
          icon={CrossCircleIconCmp}
          label="Smoking not allowed."
          fontWeight={500}
          columnGap={1}
          textColor="text.main"
          color="red"
        />
      </Box>
    </Box>
  );
}
