import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import ListUser from "./components/listUser.js/listUser";

import "bootstrap/dist/css/bootstrap.min.css";
import Preguntas from "./components/profile/preguntas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route path="/ListUser" element={<ListUser />} />
          <Route path="/Preguntas" element={<Preguntas />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
