import AllRoutes from "./Routes/AllRoutes";
import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// import {
//   getItemFromLocalStorage,
//   setItemInLocalStorage,
// } from "./helpers/localStorageHelper.js";

function App() {
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
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
