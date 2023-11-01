import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { GlobalStyle } from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBg: "#f8f9fa",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
