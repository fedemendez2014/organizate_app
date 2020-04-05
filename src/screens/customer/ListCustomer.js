import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';
import { actionGetAllCustomer } from '../../redux/actions/CustomerActions';
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
const { width, height } = Dimensions.get('window')

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
            //loading: false,
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
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('AddEditCustomer', { customer: item })}>
                                    <View style={{
                                        padding: 10, borderRadius: 5,
                                        flexDirection: 'row', marginBottom: 10, backgroundColor: 'white',
                                        shadowColor: "#000",
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
                            } />
                    }
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