import React from "react";
import { ThemesProvider } from "context/theme";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
