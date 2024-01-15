import { Box, Button, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackButtonCmp } from "../../components/Buttons";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  DownloadPdfIconCmp,
  MembersIconCmp,
  ShareIconCmp,
  TimeIconCmp,
} from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";

export default function ToolboxPostPage() {
  const navigate = useNavigate();

  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="Toolbox" footer={<Footer />}>
        <Box display="flex" flexDirection="column" rowGap={6}>
          <BackButtonCmp />
          <Box px={10} display="flex" alignItems="center" columnGap={10}>
            <Box>
              <Typography variant="h5" fontWeight={700} color="primary">
                Mindfulness Journey
              </Typography>
              <Box pt={1} />
              <Typography lineHeight="29px">
                Immerse yourself in nature and pure luxury at Shangrila Rénao situated on top of
                Tandi hill near Jibhi. Not only can you pour yourself in a hot bubble bath but also
                enjoy the stunning views right from your bathtub.
              </Typography>
              <Box display="flex" alignItems="center" columnGap={2} mt={1}>
                <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="10 Members min" />
                <IconWithTextSimpleChipCmp icon={TimeIconCmp} label="1-2 min read" />
              </Box>
            </Box>
            <Box height={300}>
              <img src="/images/toolbox-2.png" alt="mindful" style={{ height: "100%" }} />
            </Box>
          </Box>
          <Box px={10} pb={4}>
            <Divider />
          </Box>
        </Box>
        {/* TODO: make body */}
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}

function Footer() {
  return (
    <>
      <Button variant="outlined" startIcon={<ShareIconCmp />}>
        Share
      </Button>
      <Box px={1} />
      <Button variant="contained" startIcon={<DownloadPdfIconCmp />}>
        Download as PDF
      </Button>
    </>
  );
}
