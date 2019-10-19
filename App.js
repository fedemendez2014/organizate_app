import SelectRoutes from "./src/routes/SelectRoutes";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import Store from "./src/redux/Store";

export default App = () => {
  return (
    <Provider store={Store}>
      <SelectRoutes />
    </Provider>
  );
};