import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SubHead } from '../../components/shared/SubHead';
import { GlobalInput } from '../../components/shared/GlobalInput';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';
import { actionGetAllCustomer } from '../../redux/actions/CustomerActions';

class ListCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            loading: false,
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
            <View>
                <SubHead title="Clientes" />
                <View style={{ padding: 10, width: '100%' }}>
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} />
                </View>
                <ScrollView style={{ height: '100%' }}>
                    <View>
                        {
                            undefined !== this.props.propsCustomer.customers &&
                            <FlatList
                                data={this.props.propsCustomer.customers.data}
                                keyExtractor={(item, index) => index.toString()}
                                extraData={this.state.refresh}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('AddEditCustomer', { customer: item })}>
                                        <View style={{
                                            borderTopWidth: 1, borderBottomWidth: 1, padding: 10,
                                            flexDirection: 'row', marginBottom: 5
                                        }}>
                                            <View style={{ width: '90%' }}>
                                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ width: '60%' }}>{item.address}</Text>
                                                    <Text style={{ width: '40%', textAlign: 'right' }}>{item.mobile_phone}</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                <Icon size={22} name="ios-arrow-forward" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                } />
                        }
                    </View>
                </ScrollView>
                <LoadingSpinner visible={this.state.loading} />
            </View>
        );
    }
}

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