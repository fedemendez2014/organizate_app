import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/home/Home';
import LoggedSideMenu from './sidemenus/LoggedSideMenu';
import { DrawerButton } from './sidemenus/DrawerButton';
import { Image, TouchableOpacity, Text } from 'react-native';
import ListCustomer from '../screens/customer/ListCustomer';
import ListService from '../screens/service/ListService';
import ListIncome from '../screens/income-egress/ListIncome';
import ListEgress from '../screens/income-egress/ListEgress';
import AddEditIncomeEgress from '../screens/income-egress/AddEditIncomeEgress';
import Icon from 'react-native-vector-icons/Ionicons';
import AddEditCustomer from '../screens/customer/AddEditCustomer';
import AddEditService from '../screens/service/AddEditService';
import { GlobalPrimaryColor, GlobalSecondColor } from '../Styles';
import { OptionHeadButton, BackHeadButton } from '../components/shared/HeadButtons';
import { Constants } from '../Constants';

const NavigationLogged = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditCustomer')}
                        icon="md-add" size={26} />,
                headerTitle: 'AGENDA'
            })
        },
        ListCustomer: {
            screen: ListCustomer,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditCustomer')}
                        icon="md-add" size={26} />,
                headerTitle: 'CLIENTES'
            })
        },
        AddEditCustomer: {
            screen: AddEditCustomer,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: params.title ? params.title : 'CLIENTES',
                    headerRight:
                        <OptionHeadButton press={() => params.functionCustomer()}
                            icon="md-checkmark" size={26} />,
                    headerLeft:
                        <BackHeadButton press={() => navigation.goBack()} />
                }
            }
        },
        ListService: {
            screen: ListService,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditService')}
                        icon="md-add" size={26} />,
                headerTitle: 'SERVICIOS'
            })
        },
        AddEditService: {
            screen: AddEditService,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: params.title ? params.title : 'SERVICIOS',
                    headerRight:
                        <OptionHeadButton press={() => params.functionService()}
                            icon="md-checkmark" size={26} />,
                    headerLeft:
                        <BackHeadButton press={() => navigation.goBack()} />
                }
            }
        },
        ListIncome: {
            screen: ListIncome,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditIncomeEgress', { type: Constants.INCOME })}
                        icon="md-add" size={26} />,
                headerTitle: 'INGRESOS'
            })
        },
        ListEgress: {
            screen: ListEgress,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditIncomeEgress', { type: Constants.EGRESS })}
                        icon="md-add" size={26} />,
                headerTitle: 'EGRESOS'
            })
        },
        AddEditIncomeEgress: {
            screen: AddEditIncomeEgress,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: params.title ? params.title : params.type === Constants.INCOME ? 'INGRESOS' : 'EGRESOS',
                    headerRight:
                        <OptionHeadButton press={() => params.functionIncomeEgress()}
                            icon="md-checkmark" size={26} />,
                    headerLeft:
                        <BackHeadButton press={() => navigation.goBack()} />
                }
            }
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: <DrawerButton navigation={navigation} />,
            headerStyle: {
                backgroundColor: GlobalPrimaryColor
            },
            headerTitleStyle: {
                color: GlobalSecondColor,
                fontSize: 18
            }
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