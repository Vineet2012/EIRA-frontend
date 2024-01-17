import { Box, Typography } from "@mui/material";
import SubscriptionPlansCmp from "../../components/SubscriptionPlansCmp";

export default function SubscriptionSettingsCmp() {
  return (
    <Box>
      <Box pt={8} />
      <SectionHeading
        heading="Three Plans, three prices"
        subHeading="No setup costs or any other hidden fees"
      />
      <Box pt={6} />
      <SubscriptionPlansCmp />
      <Box pt={16} />
      <SectionHeading
        heading="Frequently Asked Questions"
        subHeading="We have tried to answer all your doubts"
      />
      <Box pt={6} />
      <FaqCmp />
    </Box>
  );
}

function SectionHeading({ heading, subHeading }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3Alt" fontWeight={700}>
        {heading}
      </Typography>
      <Box pt={0.5} />
      <Typography variant="body2Alt">{subHeading}</Typography>
    </Box>
  );
}

const faqs = [
  {
    q: "What plans do we offer?",
    a: "We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page.",
  },
  {
    q: "What plans do we offer?",
    a: "We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page.",
  },
  {
    q: "What plans do we offer?",
    a: "We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page.",
  },
];

function FaqCmp() {
  return (
    <Box>
      {faqs.map((el, idx) => (
        <Box key={idx} display="flex" flexDirection="column" pb={4}>
          <Typography variant="h2Med" fontWeight={700}>
            {el.q}
          </Typography>
          <Typography variant="para1Reg">{el.a}</Typography>
          {idx !== faqs.length - 1 && <Box borderBottom="1px solid rgba(33, 33, 33, 0.2)" pt={4} />}
        </Box>
      ))}
    </Box>
  );
}
