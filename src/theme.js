import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#47dd47",
    },
    secondary: {
      main: "#e0ef35",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
    text: {
      primary: "#47dd47",
      secondary: "#47dd47",
      disabled: "r#47dd47",
      hint: "rgba(255, 255, 255, 0.5)",
    },
  },
});
