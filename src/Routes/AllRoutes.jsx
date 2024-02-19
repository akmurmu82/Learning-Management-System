import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Home from "../Pages/Home";
import StudentDashboard from "../Pages/StudentDashboard";
import Account from "../components/Account";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/admin" element={<h1>ADMIN PAGE</h1>} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute isAuthenticated={true} element={<StudentDashboard />} />
        }
      />
      {/* incorrect route */}
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}

export default AllRoutes;
