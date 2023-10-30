import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// preserve order
import "@mantine/core/styles.css";
//
import "@mantine/code-highlight/styles.css";
import { MantineProvider } from "@mantine/core";
import { baseTheme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={baseTheme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
