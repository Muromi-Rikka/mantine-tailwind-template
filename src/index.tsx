import { createTheme, DEFAULT_THEME, MantineProvider, mergeMantineTheme } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { breakpoints, colors } from "./theme.ts";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  const theme = mergeMantineTheme(
    DEFAULT_THEME,
    createTheme({
      breakpoints,
      colors,
    }),
  );
  root.render(
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </React.StrictMode>,
  );
}
