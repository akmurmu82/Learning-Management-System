import React, { createContext, useState } from "react";

export const SidepanelContext = createContext();

function SidepanelContextProvider({ children }) {
  const [isSidepanelOpen, setIsSidepanelOpen] = useState(true);
  function toggleSidepanel() {
    setIsSidepanelOpen(!isSidepanelOpen);
  }
  return (
    <SidepanelContext.Provider value={{isSidepanelOpen, toggleSidepanel}}>
      {children}
    </SidepanelContext.Provider>
  );
}

export default SidepanelContextProvider;
