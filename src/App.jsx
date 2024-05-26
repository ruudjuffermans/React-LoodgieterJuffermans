import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getTheme from "./theme";
import Router from "./router";

export default function LandingPage() {
  const Theme = createTheme(getTheme("light"));

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}
