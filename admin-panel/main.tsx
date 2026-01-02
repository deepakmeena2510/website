import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

/*
  यह फाइल वेबसाइट की शुरुआत है
  यहीं से पूरा React Web App चलता है
*/

const root = document.getElementById("root");

if (!root) {
  throw new Error("root div नहीं मिला, index.html चेक करो");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
