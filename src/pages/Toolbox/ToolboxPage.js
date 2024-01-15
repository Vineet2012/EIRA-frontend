import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TeamBuildingIconSvg } from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";

export default function ToolboxPage() {
  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="Toolbox">
        <HeaderCmp />
        <Box mt={4} />
        <BodyCmp />
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}

function HeaderCmp() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={1}
      p={4}
      borderRadius={4}
      position="relative"
      bgcolor="secondary.main"
    >
      <Typography variant="h4Alt" fontWeight={600} color="primary">
        Embark on a Journey of Connection & Growth with EIRA!
      </Typography>
      <Typography variant="body2Alt">
        Discover. Connect. Thrive. Your Ultimate Retreat Experience Starts Here!
      </Typography>
      <Box position="absolute" right="5em" height="10.5em" top="-2em">
        <img src="/images/toolbox-1.png" alt="hero" style={{ height: "100%" }} />
      </Box>
    </Box>
  );
}

function BodyCmp() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3}>
      {[...new Array(8)].map((_, idx) => (
        <Grid key={idx} item xs={3}>
          <Box
            width="100%"
            height={160}
            display="flex"
            flexDirection="column"
            rowGap={1}
            alignItems="center"
            justifyContent="center"
            color="text.light"
            border="1px solid"
            borderRadius={3}
            borderColor="text.light"
            textAlign="center"
            sx={{ cursor: "pointer", transition: "0.3s" }}
            onClick={() => {
              navigate("topic/topicID");
            }}
          >
            <TeamBuildingIconSvg />
            <Typography variant="h4Alt" color="inherit" fontWeight={500}>
              Retreat <br /> checklist
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
