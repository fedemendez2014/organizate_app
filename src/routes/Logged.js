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
import ListIncomeEgress from '../screens/income-egress/ListIncomeEgress';
import Icon from 'react-native-vector-icons/Ionicons';
import AddEditCustomer from '../screens/customer/AddEditCustomer';
import AddEditService from '../screens/service/AddEditService';

const NavigationLogged = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        ListCustomer: {
            screen: ListCustomer,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <TouchableOpacity onPress={() => navigation.navigate('AddEditCustomer')}
                        style={{ paddingRight: 15, flexDirection: 'row' }}>
                        <Icon name="md-add" size={18} />
                        <Text style={{ fontSize: 16, marginLeft: 2 }}>Crear</Text>
                    </TouchableOpacity>
            })
        },
        AddEditCustomer: {
            screen: AddEditCustomer,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "Clientes",
                headerRight:
                    <TouchableOpacity onPress={() => navigation.navigate('AddEditCustomer')}
                        style={{ paddingRight: 15, flexDirection: 'row' }}>
                        <Icon name="md-checkmark" size={18} />
                        <Text style={{ fontSize: 16, marginLeft: 2 }}>Save</Text>
                    </TouchableOpacity>
            })
        },
        ListService: {
            screen: ListService,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <TouchableOpacity onPress={() => navigation.navigate('AddEditService')}
                        style={{ paddingRight: 15, flexDirection: 'row' }}>
                        <Icon name="md-add" size={18} />
                        <Text style={{ fontSize: 16, marginLeft: 2 }}>Crear</Text>
                    </TouchableOpacity>
            })
        },
        AddEditService: {
            screen: AddEditService,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "Servicios",
                headerRight:
                    <TouchableOpacity onPress={() => navigation.navigate('AddEditService')}
                        style={{ paddingRight: 15, flexDirection: 'row' }}>
                        <Icon name="md-checkmark" size={18} />
                        <Text style={{ fontSize: 16, marginLeft: 2 }}>Save</Text>
                    </TouchableOpacity>
            })
        },
        ListIncomeEgress: {
            screen: ListIncomeEgress,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <TouchableOpacity onPress={() => navigation.navigate('AddEditCustomer')}
                        style={{ paddingRight: 15, flexDirection: 'row' }}>
                        <Icon name="md-add" size={18} />
                        <Text style={{ fontSize: 16, marginLeft: 2 }}>Crear</Text>
                    </TouchableOpacity>
            })
        }
    },
    {
        initialRouteName: 'ListService',
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