import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import { MultiChipsCmp } from "../../components/Chips";
import { UploadIconCmp } from "../../components/Icons";
import { TextFieldWithLabelCmp } from "../../components/Inputs";

export default function MyProfileSettingsCmp() {
  return (
    <Grid container columnSpacing={8} rowSpacing={4}>
      <Grid item xs={6}>
        <TextFieldWithLabelCmp label="First Name" />
      </Grid>
      <Grid item xs={6}>
        <TextFieldWithLabelCmp label="Last Name" />
      </Grid>
      <Grid item xs={6}>
        <TextFieldWithLabelCmp label="Email" disabled defaultValue="email@example.com" />
      </Grid>
      <Grid item xs={6}>
        <TextFieldWithLabelCmp label="LinkedIn" />
      </Grid>
      <Grid item xs={6}>
        <TextFieldWithLabelCmp label="Company Name" />
        <Box pt={4} />
        <SelectAvatarCmp />
      </Grid>
      <Grid item xs={6}>
        <Typography fontWeight={500} color="text.light">
          Job Title
        </Typography>
        <Box pt={1} />
        <MultiChipsCmp
          data={data}
          height={48}
          xs={6}
          spacing={2}
          typographyVariant="body2"
          maxSelectItems={1}
        />
      </Grid>
    </Grid>
  );
}

function SelectAvatarCmp() {
  const avatarSize = 56;

  return (
    <Box>
      <Typography fontWeight={500} color="text.light">
        Profile Picture
      </Typography>
      <Box display="flex" pt={1} columnGap={1}>
        {[...new Array(5)].map((_, idx) => (
          <Avatar
            key={idx}
            selected={idx === 0}
            variant="rounded"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: 4,
              "::before": idx === 0 && {
                content: `"✓"`,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              },
            }}
          ></Avatar>
        ))}
        <Box>
          <IconButton
            variant="rounded"
            sx={{
              height: avatarSize,
              width: avatarSize,
              backgroundColor: "secondary.main",
              color: "primary.main",
            }}
          >
            <UploadIconCmp />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

const data = [
  {
    id: 1,
    text: "CEO or Owner",
  },
  {
    id: 2,
    text: "Communication",
  },
  {
    id: 3,
    text: "Consultant",
  },
  {
    id: 4,
    text: "Designer",
  },
  {
    id: 5,
    text: "Human Resources",
  },
  {
    id: 6,
    text: "Marketer",
  },
  {
    id: 7,
    text: "Operations/Administration",
  },
  {
    id: 8,
    text: "Sales/Account Management",
  },
  {
    id: 9,
    text: "Legal",
  },
  {
    id: 10,
    text: "Other",
  },
];
