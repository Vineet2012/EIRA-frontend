import { Box, Button, Divider, IconButton, TextField, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { LinkedInIconCmp, PhoneIconCmp, XIconCmp } from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";

export default function SupportPage() {
  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="Customer Support">
        <Outlet />
        <Box
          pt={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="50%"
          margin="0 auto"
          rowGap={6}
        >
          <Box textAlign="center">
            <Typography variant="h2Alt" color="text.light" fontWeight={500}>
              You still have a question?
            </Typography>
            <Box pt={1} />
            <Typography variant="body2" color="text.light">
              If you cannot find answer to your question in our FAQ, you can always contact us. We
              will answer to you shortly!
            </Typography>
          </Box>
          <Box display="flex" width="100%" columnGap={8}>
            <Box
              flex={1}
              borderRadius={4}
              border="1px solid"
              borderColor="text.light"
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              rowGap={1}
              color="text.light"
            >
              <PhoneIconCmp />
              <Typography fontWeight={500} color="inherit">
                +91 9876544231
              </Typography>
              <Typography variant="body2" color="inherit">
                We’re always happy to help
              </Typography>
            </Box>
            <Box
              flex={1}
              borderRadius={4}
              border="1px solid"
              borderColor="text.light"
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              rowGap={1}
              color="text.light"
            >
              <PhoneIconCmp />
              <Typography fontWeight={500} color="inherit">
                +91 9876544231
              </Typography>
              <Typography variant="body2" color="inherit">
                We’re always happy to help
              </Typography>
            </Box>
          </Box>
          <Box width="100%" position="relative" display="flex" justifyContent="center">
            <Box flex={1}>
              <Divider />
            </Box>
            <Box position="absolute" bgcolor="#fff" px={2} top={-11}>
              <Typography variant="body2" color="text.light">
                or fill out the contact form
              </Typography>
            </Box>
          </Box>
          <Box width="100%" display="flex" flexDirection="column" alignItems="center" rowGap={3}>
            <TextField
              placeholder="Your Issue"
              inputProps={{ style: { textAlign: "center" } }}
              fullWidth
              multiline
              rows={3}
            />
            <Button variant="contained">Submit</Button>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton size="large">
              <LinkedInIconCmp fontSize="large" />
            </IconButton>
            <IconButton size="large">
              <XIconCmp fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}
