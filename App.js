import SelectRoutes from "./src/routes/SelectRoutes";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import Store from "./src/redux/Store";
import { StatusBar } from "react-native";

export default App = () => {
  return (
    <Provider store={Store}>
      <StatusBar barStyle="light-content" style={{ color: 'red' }} />
      <SelectRoutes />
    </Provider>
  );
};