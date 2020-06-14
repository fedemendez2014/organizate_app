import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { GlobalInput } from '../../components/shared/GlobalInput';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { connect } from 'react-redux';
import { actionAddService, actionUpdateService } from '../../redux/actions/ServiceActions';
import ServiceModel from '../../models/ServiceModel';
import { GlobalStyles } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import ModalMessage from '../../components/shared/ModalMessage';

class AddEditService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: new ServiceModel(),
            messageModal: '',
            statusModal: false
        }
    }

    componentDidMount = async () => {
        if (null !== this.props.navigation.getParam('service', null)) {
            var service = this.props.navigation.getParam('service', null);
            await this.setState({
                service: {
                    id: service.id,
                    name: service.name,
                    description: service.description,
                    price: service.price ? service.price.toString() : '',
                    observations: service.observations,
                    duration: service.duration ? service.duration.toString() : ''
                }
            })
            this.props.navigation.setParams({ functionService: this.updateService, title: 'MODIFICAR SERVICIO' });
        }
        else {
            this.props.navigation.setParams({ functionService: this.addService, title: 'NUEVO SERVICIO' });
        }
    }

    componentDidUpdate = async (prevProps) => {
        if (prevProps.propsService !== this.props.propsService && null !== this.props.propsService.statusAdd) {
            if (this.props.propsService.statusAdd) {
                await this.setState({
                    service: new ServiceModel(),
                    messageModal: 'Servicio agregado con éxito',
                    statusModal: true
                })
            }
            else {
                await this.setState({
                    messageModal: this.props.propsService.messageError,
                    statusModal: false
                })
            }
        }
        if (prevProps.propsService !== this.props.propsService && null !== this.props.propsService.statusUpdate) {
            if (this.props.propsService.statusUpdate) {
                await this.setState({
                    messageModal: 'Servicio actualizado con éxito',
                    statusModal: true
                })
            }
            else {
                await this.setState({
                    messageModal: this.props.propsService.messageError,
                    statusModal: false
                })
            }
        }
    }

    addService = async () => {
        if (await this.validate()) {
            this.props.addService({
                ...this.state.service,
                price: this.state.service.price === '' ? null : this.state.service.price,
                duration: this.state.service.duration === '' ? null : this.state.service.duration,
                token: this.props.propsLogin.session.account.remember_token
            });
        }
    }

    updateService = async () => {
        if (await this.validate()) {
            this.props.updateService({
                ...this.state.service,
                price: this.state.service.price === '' ? null : this.state.service.price,
                duration: this.state.service.duration === '' ? null : this.state.service.duration,
                token: this.props.propsLogin.session.account.remember_token
            });
        }
    }

    validate = async () => {
        await this.setState({ messageModal: '', statusModal: false });
        if (!this.state.service.name) {
            await this.setState({ messageModal: 'El nombre del servicio es requerido', statusModal: false });
            return false;
        }
        return true;
    }

    closeModal = async () => {
        if (!this.state.service.id && this.state.statusModal) {
            await this.setState({
                messageModal: '',
                statusModal: false
            })
            this.props.navigation.navigate('ListService')
        }
        await this.setState({
            messageModal: '',
            statusModal: false
        })
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <ScrollView style={{ padding: 10 }}>
                    <GlobalInput ph="Nombre" change={text => this.setState({ service: { ...this.state.service, name: text } })}
                        value={this.state.service.name} title="Nombre" />
                    <GlobalInput ph="Descripción" change={text => this.setState({ service: { ...this.state.service, description: text } })}
                        value={this.state.service.description} title="Descripción" />
                    <GlobalInput ph="Precio" change={text => this.setState({ service: { ...this.state.service, price: text } })}
                        value={this.state.service.price} title="Precio" type='number' />
                    <GlobalInput ph="Duración (minutos)" change={text => this.setState({ service: { ...this.state.service, duration: text } })}
                        value={this.state.service.duration} title="Duración (minutos)" type='number' />
                    <GlobalInput ph="Observaciones" change={text => this.setState({ service: { ...this.state.service, observations: text } })}
                        value={this.state.service.observations} title="Observaciones" />
                </ScrollView>
                <LoadingSpinner visible={this.props.propsService.loading} />
                <ModalMessage message={this.state.messageModal} status={this.state.statusModal}
                    buttonText="Cerrar" press={this.closeModal} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsService: state.reducerService
})

const mapDispatchToProps = dispatch => ({
    addService: (data) => {
        dispatch(actionAddService(data));
    },
    updateService: (data) => {
        dispatch(actionUpdateService(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditService);