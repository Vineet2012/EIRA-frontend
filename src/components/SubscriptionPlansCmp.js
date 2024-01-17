import { Box, Button, Typography } from "@mui/material";
import { CheckCircleIconCmp } from "./Icons";

export default function SubscriptionPlansCmp() {
  return (
    <Box display="flex" columnGap={4}>
      {subs.map((el, idx) => (
        <SubscriptionPlanBaseCmp key={idx} {...el} />
      ))}
    </Box>
  );
}

function SubscriptionPlanBaseCmp({
  planName,
  price,
  desc,
  features,
  action,
  bgcolor,
  border,
  btnWhite,
  discount,
}) {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      flex={1}
      bgcolor={bgcolor}
      p={3}
      borderRadius={4}
      border={border && "2px solid"}
      borderColor="primary.main"
      boxShadow={border && "0px 20px 52px -24px #00000040"}
    >
      {discount && (
        <Box position="absolute" top={16} right={-4}>
          <Box position="relative" display="flex" alignItems="center">
            <Box
              position="absolute"
              height={0}
              width={0}
              left={0}
              borderLeft="16px solid #fff"
              borderTop="16px solid transparent"
              borderBottom="16px solid transparent"
            />
            <Box bgcolor="primary.main" py={0.5} pr={1.5} pl={3}>
              <Typography variant="body2" fontWeight={700} color="#fff">
                DISCOUNT {discount}%
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      <Box flex={1}>
        <Typography fontWeight={700} color="primary">
          {planName}
        </Typography>
        <Box pt={2} />
        <Typography variant="h2Alt" fontWeight={700} color="primary">
          {price > 0 ? "$" + price : "Free"}
          <Typography fontWeight={700} color="primary" component="span">
            /month
          </Typography>
        </Typography>
        <Box pt={1} />
        <Typography variant="body2" color="primary">
          {desc}
        </Typography>
      </Box>
      <Box pt={2} pb={3}>
        {features.map((_, idx) => (
          <Box key={idx} display="flex" alignItems="center" mb={0.8} columnGap={1}>
            <CheckCircleIconCmp color="primary" />
            <Typography variant="body2" color="primary" fontWeight={500}>
              Feature - {idx + 1}
            </Typography>
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        size="small"
        sx={{ backgroundColor: btnWhite && "#fff", color: btnWhite && "primary.main", width: 160 }}
      >
        {action}
      </Button>
    </Box>
  );
}

const subs = [
  {
    planName: "Basic",
    price: 0,
    desc: "Free plan for users",
    features: [...new Array(3)],
    action: "Trial expired",
    bgcolor: "#FBF7F3",
    btnWhite: true,
  },
  {
    planName: "Professional",
    price: 199,
    desc: "Ideal for small firms",
    features: [...new Array(5)],
    action: "Get Professioanl",
    bgcolor: "#FBF7F3",
  },
  {
    planName: "Business",
    price: 199,
    desc: "For enterprise users",
    features: [...new Array(8)],
    action: "Get Business",
    border: true,
    discount: 40,
  },
];
