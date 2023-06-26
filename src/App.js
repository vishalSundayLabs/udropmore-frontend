import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import Product from "./Components/Product/Product";
import Congratulations from "./Components/Congratulations/Congratulations";
import PayNow from "./Components/PayNow/PayNow";
import Product2 from "./Components/Product2/Product2";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Auth />} />
      <Route exact path="/product" element={<Product />} />
      <Route exact path="/Congratulations" element={<Congratulations />} />
      <Route exact path="/paynow" element={<PayNow />} />
      <Route exact path="/shop/now" element={<Product2 />} />
    </Routes>
  );
}

export default App;
