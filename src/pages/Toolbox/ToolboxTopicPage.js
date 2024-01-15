import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackButtonCmp } from "../../components/Buttons";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import { MembersIconCmp, TimeIconCmp } from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";

export default function ToolboxTopicPage() {
  const navigate = useNavigate();

  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="Toolbox">
        <Box display="flex" flexDirection="column" rowGap={6}>
          <BackButtonCmp />
          <Box>
            <Typography variant="h5" fontWeight={700} color="primary">
              Mindfulness Journey
            </Typography>
            <Box pt={1} />
            <Typography lineHeight="29px">
              Immerse yourself in nature and pure luxury at Shangrila Rénao situated on top of Tandi
              hill near Jibhi. Not only can you pour yourself in a hot bubble bath but also enjoy
              the stunning views right from your bathtub.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" rowGap={3}>
            <CardCmp />
            <CardCmp />
            <CardCmp />
          </Box>
        </Box>
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}

function CardCmp() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap={4}
      sx={{ cursor: "pointer" }}
      onClick={() => navigate("postID")}
    >
      <Box
        maxWidth={{ md: 160, lg: 200 }}
        height={{ md: 100, lg: 100 }}
        flexShrink={0}
        borderRadius={4}
        overflow="hidden"
        position="relative"
      >
        <img
          src="https://blog.intercomassets.com/blog/wp-content/uploads/2017/03/Tips_for_Running_Design_Workshops_Logo.jpg.optimal.jpg"
          alt="soe"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box display="flex" flexDirection="column" rowGap={1} flex={1}>
        <Typography variant="h5Alt" fontWeight={500}>
          Strategic Planning with team
        </Typography>
        <Typography variant="body2">
          Relish a unique blend of relaxation and luxury on this exotic vacation at the Standard
          Huruvalhi, Maldives.
        </Typography>
        <Box display="flex" alignItems="center" columnGap={2}>
          <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="10 Members min" />
          <IconWithTextSimpleChipCmp icon={TimeIconCmp} label="1-2 min read" />
        </Box>
      </Box>
    </Box>
  );
}
