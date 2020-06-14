import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { GlobalInput } from '../../components/shared/GlobalInput';
import { connect } from 'react-redux';
import { actionAddCustomer, actionUpdateCustomer } from '../../redux/actions/CustomerActions';
import CustomerModel from '../../models/CustomerModel';
import { GlobalStyles } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import ModalMessage from '../../components/shared/ModalMessage';

class AddEditCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: new CustomerModel(),
            messageModal: '',
            statusModal: false
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

    componentDidUpdate = async (prevProps) => {
        if (prevProps.propsCustomer !== this.props.propsCustomer && null !== this.props.propsCustomer.statusAdd) {
            if (this.props.propsCustomer.statusAdd) {
                await this.setState({
                    customer: new CustomerModel(),
                    messageModal: 'Cliente agregado con éxito',
                    statusModal: true
                })
            }
            else {
                await this.setState({
                    messageModal: this.props.propsCustomer.messageError,
                    statusModal: false
                })
            }
        }
        if (prevProps.propsCustomer !== this.props.propsCustomer && null !== this.props.propsCustomer.statusUpdate) {
            if (this.props.propsCustomer.statusUpdate) {
                await this.setState({
                    messageModal: 'Cliente actualizado con éxito',
                    statusModal: true
                })
            }
            else {
                await this.setState({
                    messageModal: this.props.propsCustomer.messageError,
                    statusModal: false
                })
            }
        }
    }

    closeModal = async () => {
        if (!this.state.customer.id && this.state.statusModal) {
            await this.setState({
                messageModal: '',
                statusModal: false
            })
            this.props.navigation.navigate('ListCustomer')
        }
        await this.setState({
            messageModal: '',
            statusModal: false
        })
    }

    addCustomer = async () => {
        if (await this.validate()) {
            this.props.addCustomer({
                ...this.state.customer,
                token: this.props.propsLogin.session.account.remember_token
            })
        }
    }

    updateCustomer = async () => {
        if (await this.validate()) {
            this.props.updateCustomer({
                ...this.state.customer,
                token: this.props.propsLogin.session.account.remember_token
            })
        }
    }

    validate = async () => {
        await this.setState({ messageModal: '', statusModal: false });
        if (!this.state.customer.name) {
            await this.setState({ messageModal: 'El nombre del cliente es requerido', statusModal: false });
            return false;
        }
        return true;
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <ScrollView style={{ padding: 10 }}>
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
                <LoadingSpinner visible={this.props.propsCustomer.loading} />
                <ModalMessage message={this.state.messageModal} status={this.state.statusModal}
                    buttonText="Cerrar" press={this.closeModal} />
            </View >
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