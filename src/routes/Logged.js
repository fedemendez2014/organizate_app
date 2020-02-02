import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/home/Home';
import LoggedSideMenu from './sidemenus/LoggedSideMenu';
import { DrawerButton } from './sidemenus/DrawerButton';
import { Image } from 'react-native';
import ListCustomer from '../screens/customer/ListCustomer';
import ListService from '../screens/service/ListService';
import ListIncomeEgress from '../screens/income-egress/ListIncomeEgress';
const NavigationLogged = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        ListCustomer: {
            screen: ListCustomer
        },
        ListService: {
            screen: ListService
        },
        ListIncomeEgress: {
            screen: ListIncomeEgress
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: <DrawerButton navigation={navigation} />,
            headerTitle: <Image resizeMode='contain'
                style={{ marginBottom: 5, height: '100%' }}
                source={require('../../assets/logoWithOutLetter.png')}
            />
        })
    }
);

const DrawerLogged = createDrawerNavigator(
    {
        NavigationLogged: {
            screen: NavigationLogged,
        }
    },
    {
        contentComponent: LoggedSideMenu,
        drawerType: 'back'
    }
);

export default createAppContainer(DrawerLogged);