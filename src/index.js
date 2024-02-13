import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { SidepanelContextProvider } from "./Context/AuthContext";
import { AuthContextProvider } from "./Context/AuthContext";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
  bgColor: {
    primaryLight: "#f33a3a",
    secondaryLight: "#02a029",
    buttonBgDark: "#ffffff",
    buttonBgLight: "#4b4f56",
  },
  color: {
    primaryLight: "#000",
    primaryDark: "#fff",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    {/* <SidepanelContextProvider> */}
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    {/* </SidepanelContextProvider> */}
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
