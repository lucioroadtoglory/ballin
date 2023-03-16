import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "@components/GlobalStyles";
import { Providers } from "@components/Providers";
import { Routes } from "./routes";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyles />
      <Routes />
    </Providers>
  </React.StrictMode>
);
