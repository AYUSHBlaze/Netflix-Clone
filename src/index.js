import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import { Firebase } from "./lib/firebase.prod";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
