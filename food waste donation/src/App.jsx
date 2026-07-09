import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NGODashboard from "./pages/NGODashboard";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import MyDonations from "./pages/MyDonations";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="/ngo" element={<NGODashboard />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/notifications" element={<Notifications />} />

      <Route path="/mydonations" element={<MyDonations />} />

    </Routes>
  );
}

export default App;