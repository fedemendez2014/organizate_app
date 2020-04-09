import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { GlobalInput } from '../../components/shared/GlobalInput';
import { connect } from 'react-redux';
import { actionAddCustomer } from '../../redux/actions/CustomerActions';
import CustomerModel from '../../models/CustomerModel';
import { GlobalStyles } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';

class AddEditCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            customer: new CustomerModel()
        }
    }

    componentDidMount = async () => {
        if (null !== this.props.navigation.getParam('customer', null)) {
            var customer = this.props.navigation.getParam('customer', null);
            await this.setState({
                customer: {
                    id: customer.id,
                    name: customer.name,
                    address: customer.address,
                    phone: customer.phone,
                    mobile_phone: customer.mobile_phone,
                    observations: customer.observations,
                    email: customer.email
                }
            })
            this.props.navigation.setParams({ functionCustomer: this.updateCustomer, title: 'MODIFICAR CLIENTE' });
        }
        else {
            this.props.navigation.setParams({ functionCustomer: this.addCustomer, title: 'NUEVO CLIENTE' });
        }
    }

    addCustomer = async () => {
        await this.setState({
            loading: true
        })
        this.props.addCustomer({
            ...this.state.customer,
            token: this.props.propsLogin.session.account.remember_token
        })
    }

    updateCustomer = async () => {
        await this.setState({
            loading: true
        })
        this.props.updateCustomer({
            ...this.state.customer,
            token: this.props.propsLogin.session.account.remember_token
        })
    }

    componentWillReceiveProps = async (nextProps) => {
        if (nextProps.propsCustomer !== this.props.propsCustomer && null !== nextProps.propsCustomer.statusAdd
            && nextProps.propsCustomer.statusAdd) {
            await this.setState({
                customer: new CustomerModel()
            })
            this.props.navigation.navigate('ListCustomer')
        }
        if (nextProps.propsCustomer !== this.props.propsCustomer && null !== nextProps.propsCustomer.statusUpdate
            && nextProps.propsCustomer.statusUpdate) {
            //SHOW TOAST SOLAMENTE
        }
        await this.setState({
            loading: false
        })
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <ScrollView style={{padding: 10}}>
                    <GlobalInput ph="Nombre" value={this.state.customer.name} title="Nombre"
                        change={text => this.setState({ customer: { ...this.state.customer, name: text } })} />
                    <GlobalInput ph="Email" value={this.state.customer.email} title="Email"
                        change={text => this.setState({ customer: { ...this.state.customer, email: text } })} />
                    <GlobalInput ph="Dirección" value={this.state.customer.address} title="Dirección"
                        change={text => this.setState({ customer: { ...this.state.customer, address: text } })} />
                    <GlobalInput ph="Teléfono" value={this.state.customer.phone} title="Teléfono"
                        change={text => this.setState({ customer: { ...this.state.customer, phone: text } })} />
                    <GlobalInput ph="Celular" value={this.state.customer.mobile_phone} title="Celular"
                        change={text => this.setState({ customer: { ...this.state.customer, mobile_phone: text } })} />
                    <GlobalInput ph="Observaciones" value={this.state.customer.observations} title="Observaciones"
                        change={text => this.setState({ customer: { ...this.state.customer, observations: text } })} />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsCustomer: state.reducerCustomer
})

const mapDispatchToProps = dispatch => ({
    addCustomer: (data) => {
        dispatch(actionAddCustomer(data));
    },
    updateCustomer: (data) => {
        dispatch(actionUpdateCustomer(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditCustomer);