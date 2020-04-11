import React from 'react';
import Login from '../screens/login/Login';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Register from '../screens/register/Register';
import Home from '../screens/home/Home';

const NavigationGuest = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                headerShown: false
            }
        },
        Home: {
            screen: Home
        }
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(NavigationGuest);