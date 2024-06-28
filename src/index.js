import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./pages/About";
import Layout from "./components/Layout";
import Stays from "./pages/Stays";
import Home from "./pages/Home";
import StaysInfo from "./pages/StaysInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stays" element={<Stays />} />
          <Route path="stays/:id" element={<StaysInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
