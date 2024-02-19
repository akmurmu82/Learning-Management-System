import React, { createContext, useState } from "react";

export const SidepanelContext = createContext();
export const AuthContext = createContext();

// Authentication Context
function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function toggleIsAuthenticated() {
    setIsAuthenticated(!isAuthenticated);
  }

  const [isSidepanelOpen, setIsSidepanelOpen] = useState(true);
  function toggleSidepanel() {
    setIsSidepanelOpen(!isSidepanelOpen);
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        toggleIsAuthenticated,
        isSidepanelOpen,
        toggleSidepanel,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Sidepanel context
// function SidepanelContextProvider({ children }) {
//   const [isSidepanelOpen, setIsSidepanelOpen] = useState(true);
//   function toggleSidepanel() {
//     setIsSidepanelOpen(!isSidepanelOpen);
//   }
//   return (
//     <SidepanelContext.Provider value={{ isSidepanelOpen, toggleSidepanel }}>
//       {children}
//     </SidepanelContext.Provider>
//   );
// }

export { AuthContextProvider };
