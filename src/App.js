import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import React, { useRef } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import Product from "./Components/Product/Product";
import PayNow from "./Components/PayNow/PayNow";
import Product3 from "./Components/Product/Product3";
import TermsNconditions from "./Components/TnC/TermsNconditions";
import Profile from "./Components/Profile/Profile";
import Wallet from "./Components/Wallet/Wallet";
import Orders from "./Components/Orders/Orders";
import AddMoney from "./Components/AddMoney/AddMoney";
import Congrats3 from "./Components/Congratulations/Congrats3";
import Product4 from "./Components/Product/Product4";
import About from "./Components/About/About";
import PrivacyPolicies from "./Components/PrivacyPolicies/PrivacyPolicies";
import Congratulations from "./Components/Congratulations/Congratulations"
import Tnc from "./Components/TnC/Tnc";
import ShopNow from "./Components/Product2/ShopNow";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Auth />} />
      {/* <Route exact path="/product" element={<Product />} /> */}
      <Route exact path="/orders" element={<Orders />} />
      <Route exact path="/addmoney" element={<AddMoney />} />
      <Route exact path="/congratulations" element={<Congrats3 />} />
      <Route exact path="/congratulations2" element={<Congratulations/>} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/wallet" element={<Wallet />} />
      {/* <Route exact path="/tnc1" element={<TermsNconditions/>} /> */}
      <Route exact path="/tnc" element={<Tnc/>} />
      <Route exact path="/paynow" element={<PayNow />} />
      <Route exact path="/shop/now" element={<ShopNow />} />
      <Route exact path="/product2" element={<Product3 />} />
      <Route exact path="/product4" element={<Product4 />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/policies" element={<PrivacyPolicies />} />
    </Routes>
  );
}

export default App;
