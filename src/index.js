import React from "react";
import ReactDOM from "react-dom/client";
//css
import "./index.css";
// component
import App from "./App";
// routing setup
import { BrowserRouter } from "react-router-dom";
//for student context
import StudentProivder from "./context/stdContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentProivder>
        <App />
      </StudentProivder>
    </BrowserRouter>
  </React.StrictMode>
);
