import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./Context";
import { ScrollToTop } from "./components";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop />
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>
);
