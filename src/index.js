import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <Router>
    <App />
  </Router>
);
