import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#f68657", // Replace with your desired color
      dark: "#123456", // Replace with your desired dark color
      contrastText: "#fff", // Replace with your desired contrast color
    },
    text: {
      primary: "#383a3f", // Replace with your desired text color
      secondary: "#acb4bd", // Replace with your desired secondary text color
    },
    background: {
      default: "#f3f6f9", // Replace with your desired background color
    },
    grey: {
      300: "#e0e3e6", // Replace with your desired grey color
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
