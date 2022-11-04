import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  <AppContext.Provider> {children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
