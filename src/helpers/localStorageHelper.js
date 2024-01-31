// import React from "react";

// localStorageHelper.js
export const getItemFromLocalStorage = (key) => {
  const storedItem = localStorage.getItem(key);
  return storedItem ? JSON.parse(storedItem) : null;
};

export const setItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// export const getItemFromLocalStorage = () => {
//   const storedItem = localStorage.getItem("isAuthentication");
//   return storedItem ? JSON.parse(storedItem) : null;
// };

// export const setItemInLocalStorage = () => {
//   localStorage.setItem("isAuthentication", JSON.stringify(false));
// };
