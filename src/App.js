import React from "react"
import { Routes, Route } from "react-router-dom";
import { Auth, CreatePassword, Onboarding, Success, Verify } from "./pages";
import NotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";
import MerchantAuth from "./pages/MerchantAuth";
import Recieve from "./pages/Recieve";
import Transfer from "./pages/Transfer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/merchantAuth" element={<MerchantAuth />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/createPassword" element={<CreatePassword />} />
      <Route path="/success" element={<Success />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/home/recieve" element={<Recieve />} />
      <Route path="/home/transfer" element={<Transfer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
