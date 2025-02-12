// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
  </Router>
);
export default function App() {
  return <div>{routes}</div>;
}
