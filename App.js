import SelectRoutes from "./src/routes/SelectRoutes";
import React, { Component } from "react";
import { Provider } from 'react-redux';
import Store from "./src/redux/Store";
import { StatusBar } from "react-native";
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  render() {
    return (
      <Provider store={Store} >
        <StatusBar barStyle="light-content" style={{ color: 'red' }} />
        <SelectRoutes />
      </Provider>
    );
  }
};