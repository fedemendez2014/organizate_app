import React from 'react';
import Login from '../screens/login/Login';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

const NavigationGuest = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(NavigationGuest);