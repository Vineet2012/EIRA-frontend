import { Box, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { BackButtonCmp } from "../../components/Buttons";
import { SearchIconCmp } from "../../components/Icons";
import { TextFieldWithDropdownCmp } from "../../components/Inputs";
import QACmp from "../../components/QACmp";

export default function SupportSearchResultsCmp() {
  const { search } = useParams();

  return (
    <>
      <BackButtonCmp />
      <Box display="flex" flexDirection="column" alignItems="center" rowGap={3} mt={6}>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          rowGap={2}
          mb={3}
        >
          <Typography variant="h2Alt" fontWeight={700} color="primary">
            Search results
          </Typography>
          <Box width="50%">
            <TextFieldWithDropdownCmp
              bgcolor="background.main"
              placeholder="Find Something"
              actionText="See all results for "
              resultsHeading="Suggestions"
              defaultValue={search}
              results={[
                {
                  icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
                  text: "ABCDED",
                },
                {
                  icon: <SearchIconCmp fontSize="small" sx={{ color: "text.light" }} />,
                  text: "ABCDED",
                },
              ]}
              onClickAction={() => {}}
            />
          </Box>
        </Box>
        <QACmp
          title="What plans do you offer?"
          content="We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page."
        />
        <Box width="100%">
          <Divider />
        </Box>
        <QACmp
          title="What plans do you offer?"
          content="We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page."
        />
        <Box width="100%">
          <Divider />
        </Box>
        <QACmp
          title="What plans do you offer?"
          content="We provide a range of plans to cater to diverse user needs. Our plans include a Basic tier for essential features, a Standard tier with additional perks, and a Premium tier that offers our full suite of advanced functionalities. Each plan is designed to accommodate varying usage requirements, ensuring you find the perfect fit for your goals. You can explore the detailed features and pricing on our dedicated Plans page."
        />
        <Box width="100%">
          <Divider />
        </Box>
      </Box>
    </>
  );
}
