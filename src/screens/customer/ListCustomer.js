import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { actionGetAllCustomer } from '../../redux/actions/CustomerActions';
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
const { width, height } = Dimensions.get('window')
import Swipeable from 'react-native-gesture-handler/Swipeable';

class ListCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            loading: true,
            refresh: false
        }
    }

    componentDidMount = async () => {
        this.getAllCustomer();
    }

    getAllCustomer = async () => {
        await this.setState({
            loading: true
        })
        this.props.getAllCustomer({
            token: this.props.propsLogin.session.account.remember_token,
            page: 0
        })
    }

    componentWillReceiveProps = async (nextProps) => {
        await this.setState({
            loading: false,
            refresh: !this.state.refresh
        })
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <View style={{ position: 'absolute', width: '100%', alignItems: 'center', height: height - 120, justifyContent: 'center' }} >
                    <Image style={{ opacity: 0.2 }} source={require('../../../assets/logo.png')} />
                </View>
                <View style={{ width: '100%', paddingBottom: 0 }}>
                    <GlobalInputSearch change={text => this.setState({ name: text })}
                        value={this.state.search} />
                </View>
                <ScrollView style={{ height: '100%', paddingTop: 0 }}>
                    {
                        undefined !== this.props.propsCustomer.customers &&
                        <FlatList
                            data={this.props.propsCustomer.customers.data}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state.refresh}
                            renderItem={({ item }) =>
                                <Swipeable
                                    renderRightActions={() =>
                                        <TouchableOpacity style={styles.buttonDelete}>
                                            <Icon name="ios-trash" size={34} color="white" />
                                        </TouchableOpacity>
                                    }>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('AddEditCustomer', { customer: item })}>
                                        <View style={{
                                            padding: 10, borderRadius: 5,
                                            flexDirection: 'row', marginBottom: 10, backgroundColor: 'white',
                                            shadowColor: "#000", height: 60,
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,

                                            elevation: 5,
                                        }}>
                                            <View style={{ width: '90%' }}>
                                                <View style={{ marginBottom: 5 }}>
                                                    <Text style={{ fontWeight: 'bold', color: GlobalSecondColor }}>{item.name}</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ width: '100%', color: GlobalSecondColor }} numberOfLines={1}>
                                                        {item.mobile_phone}, {item.address}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                <Icon size={34} name="ios-arrow-forward" style={{ marginTop: 4 }}
                                                    color={GlobalSecondColor} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Swipeable>
                            } />
                    }
                </ScrollView>
                <LoadingSpinner visible={this.state.loading} />


                <View style={styles.contentToast}>
                    <View style={styles.viewToast}>
                        <Text style={{ color: GlobalSecondColor, fontSize: 16, textAlign: 'center' }}>
                            ¿Esta seguro que desea eliminar el cliente seleccionado?
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <TouchableOpacity
                                style={{
                                    padding: 10, borderColor: GlobalSecondColor,
                                    borderWidth: 1, borderRadius: 5, width: 120
                                }}>
                                <Text style={{ color: GlobalSecondColor, fontSize: 16, textAlign: 'center' }}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                padding: 10, backgroundColor: GlobalSecondColor,
                                borderRadius: 5, width: 120, marginLeft: 10
                            }}>
                                <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>
                                    Aceptar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonDelete: {
        width: 50,
        backgroundColor: GlobalSecondColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 10, borderRadius: 5,
        flexDirection: 'row', marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    contentToast: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999
    },
    viewToast: {
        maxWidth: '90%',
        minWidth: '80%',
        minHeight: 50,
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: GlobalSecondColor,
        borderWidth: 1
    },
})

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsCustomer: state.reducerCustomer
})

const mapDispatchToProps = dispatch => ({
    getAllCustomer: (data) => {
        dispatch(actionGetAllCustomer(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCustomer);