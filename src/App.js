import AllRoutes from "./Routes/AllRoutes";
import React, { useState, useEffect } from "react";
import "./App.css";

// import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NavbarNew from "./components/NavbarNew.jsx";
import { useLocation } from "react-router-dom";

// import {
//   getItemFromLocalStorage,
//   setItemInLocalStorage,
// } from "./helpers/localStorageHelper.js";

function App() {
  const location = useLocation();

  const isAccountPage = location.pathname.startsWith("/account");

  // const [myData, setMyData] = useState(false);

  // useEffect(() => {
  //   const storedData = getItemFromLocalStorage("isAuthenticated");
  //   if (storedData) {
  //     setMyData(storedData);
  //   }
  // }, []);

  // const updateData = () => {
  //   setMyData(newData);
  //   setItemInLocalStorage("isAuthenticated", newData);
  // };

  return (
    <div className="App">
      <NavbarNew />
      <AllRoutes />
      {!isAccountPage && <Footer />}
    </div>
  );
}

export default App;
