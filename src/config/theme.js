import { createTheme, responsiveFontSizes } from "@mui/material";

let myTheme = createTheme({
  palette: {
    primary: { main: "#6A855C" },
    secondary: { main: "#E1ECC8" },
    background: { main: "#FBF7F3", dark: "#F1EDE9" },
    text: {
      main: "#212121",
      light: "rgba(33, 33, 33, 0.48)",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          textTransform: "capitalize",
          borderRadius: theme.spacing(1.5),
          paddingRight: theme.spacing(3),
          paddingLeft: theme.spacing(3),
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          fontWeight: 700,
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          borderRadius: theme.spacing(2),
        }),
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "rounded" },
          style: ({ ownerState, theme }) => ({
            backgroundColor: ownerState.bgcolor ?? theme.palette.primary.main,
            color: "#fff",
            borderRadius: 12,
            ":hover": {
              backgroundColor: ownerState.bgcolor ?? theme.palette.primary.main,
              color: "#fff",
            },
          }),
        },
        {
          props: { variant: "outlined" },
          style: ({ ownerState, theme }) => ({
            borderRadius: 12,
            border: "1px solid",
            borderColor: theme.palette.primary.main,
          }),
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // notchedOutline: ({ ownerState }) => ({
        //   ...((ownerState.disabled || ownerState.noBorder) && { border: "none" }),
        // }),
        notchedOutline: { borderRadius: 12 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 24,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 700,
          fontFamily: "Inter",
          fontSize: 16,
          padding: 0,
          minHeight: 56,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          columnGap: 56,
        },
      },
    },
  },
  typography: {
    allVariants: {
      color: "#212121",
      fontFamily: "Inter",
    },
    h1: {
      fontSize: 48,
      fontFamily: "Lora",
    },
    h1Alt: {
      fontSize: 48,
      fontFamily: "Inter",
      lineHeight: "42.1px",
    },
    h2: {
      fontFamily: "Lora",
      fontSize: 32,
    },
    h2Alt: {
      fontSize: 32,
      fontFamily: "Inter",
      letterSpacing: "-0.011em",
      lineHeight: "38.73px",
    },
    h3: {
      fontFamily: "Lora",
      fontSize: 28,
    },
    h3Alt: {
      fontSize: 28,
      fontFamily: "Inter",
      lineHeight: "33.89px",
    },
    h4: {
      fontFamily: "Lora",
      fontSize: 24,
    },
    h4Alt: {
      fontSize: 24,
      fontFamily: "Inter",
      fontWeight: 600,
      letterSpacing: "-0.04em",
      lineHeight: "29.05px",
    },
    h5: {
      fontSize: 20,
      fontFamily: "Lora",
      fontWeight: 500,
    },
    h5Alt: {
      fontSize: 20,
      fontFamily: "Inter",
      letterSpacing: "-0.04px",
      lineHeight: "24.2px",
    },
    h6: {
      fontFamily: "Lora",
    },
    body1Alt: {
      fontFamily: "Lora",
      fontSize: 16,
    },
    body2: {
      letterSpacing: "-0.011em",
    },
    body2Alt: {
      fontFamily: "Lora",
      fontSize: 14,
    },
  },
});

export const theme = responsiveFontSizes(myTheme);
