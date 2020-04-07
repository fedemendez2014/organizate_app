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
import { OptionHeadButton } from '../components/shared/OptionHeadButton';

const NavigationLogged = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditCustomer')}
                        icon="add" size={34} />,
                headerTitle: 'AGENDA'
            })
        },
        ListCustomer: {
            screen: ListCustomer,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditCustomer')}
                        icon="add" size={34} />,
                headerTitle: 'CLIENTES'
            })
        },
        AddEditCustomer: {
            screen: AddEditCustomer,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: "Clientes",
                    headerRight:
                        <TouchableOpacity onPress={() => params.functionCustomer()}
                            style={{ paddingRight: 15, flexDirection: 'row' }}>
                            <Icon name="md-checkmark" size={18} />
                            <Text style={{ fontSize: 16, marginLeft: 2 }}>Save</Text>
                        </TouchableOpacity>,
                    headerLeft: <Icon name={Platform.OS === 'android' ? "md-arrow-back" : "ios-arrow-back"}
                        color="#000" size={26}
                        onPress={() => { navigation.goBack() }}
                        style={{ paddingLeft: 15 }} />
                }
            }
        },
        ListService: {
            screen: ListService,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditService')}
                        icon="add" size={34} />,
                headerTitle: 'SERVICIOS'
            })
        },
        AddEditService: {
            screen: AddEditService,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: "Servicios",
                    headerRight:
                        <TouchableOpacity onPress={() => params.functionService()}
                            style={{ paddingRight: 15, flexDirection: 'row' }}>
                            <Icon name="md-checkmark" size={18} />
                            <Text style={{ fontSize: 16, marginLeft: 2 }}>Save</Text>
                        </TouchableOpacity>,
                    headerLeft: <Icon name={Platform.OS === 'android' ? "md-arrow-back" : "ios-arrow-back"}
                        color="#000" size={26}
                        onPress={() => { navigation.goBack() }}
                        style={{ paddingLeft: 15 }} />
                }
            }
        },
        ListIncome: {
            screen: ListIncome,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditIncomeEgress', { title: 'Agregar ingreso' })}
                        icon="add" size={34} />,
                headerTitle: 'INGRESOS'
            })
        },
        ListEgress: {
            screen: ListEgress,
            navigationOptions: ({ navigation }) => ({
                headerRight:
                    <OptionHeadButton press={() => navigation.navigate('AddEditIncomeEgress', { title: 'Agregar egreso' })}
                        icon="add" size={34} />,
                headerTitle: 'EGRESOS'
            })
        },
        AddEditIncomeEgress: {
            screen: AddEditIncomeEgress,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: params.title,
                    headerRight:
                        <TouchableOpacity onPress={() => params.functionService()}
                            style={{ paddingRight: 15, flexDirection: 'row' }}>
                            <Icon name="md-checkmark" size={18} />
                            <Text style={{ fontSize: 16, marginLeft: 2 }}>Save</Text>
                        </TouchableOpacity>,
                    headerLeft: <Icon name={Platform.OS === 'android' ? "md-arrow-back" : "ios-arrow-back"}
                        color="#000" size={26}
                        onPress={() => { navigation.goBack() }}
                        style={{ paddingLeft: 15 }} />
                }
            }
        }
    },
    {
        initialRouteName: 'ListEgress',
        defaultNavigationOptions: ({ navigation }) => ({
            headerLeft: <DrawerButton navigation={navigation} />,
            headerTitle: <Image resizeMode='contain'
                style={{ marginBottom: 5, height: '100%' }}
                source={require('../../assets/logoWithOutLetter.png')}
            />,
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