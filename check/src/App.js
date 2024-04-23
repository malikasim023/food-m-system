import "./App.css";
import React from "react";
import Home from "./pages/Home";
import NavBar from "./compnents/NavBar";
import Footer from "./compnents/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import Upload from "./pages/Upload";
import Pizza from "./pages/Pizza";
import CartPage from "./pages/CartPage"
import ResetPassword from "./pages/ResetPassword";
import Burger from "./pages/Burger";



function App() {
  return (
    <div>
      {/* <NavBar /> */}

      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Burger" element={<Burger />} />
          <Route path="/Pizza" element={<Pizza />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<p className="flex flex-col justify-center items-center h-screen text-red-500 text-6xl">not found</p>} />
        </Routes>
      </div>
      {/*`<Footer />`*/}
      <Footer />
    </div>
  );
}

export default App;
