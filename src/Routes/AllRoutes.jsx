import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Home from "../Pages/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<h1>ADMIN PAGE</h1>} />
      <Route path="/login" element={<h1>LOGIN PAGE</h1>} />
      <Route
        path="/cart"
        element={
          <PrivateRoute isAuthenticated={true} element={<h1>CART PAGE</h1>} />
        }
      />
      {/* incorrect route */}
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}

export default AllRoutes;
