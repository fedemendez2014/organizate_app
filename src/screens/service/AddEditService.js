import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { GlobalInput } from '../../components/shared/GlobalInput';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { connect } from 'react-redux';
import { actionAddService, actionUpdateService } from '../../redux/actions/ServiceActions';
import ServiceModel from '../../models/ServiceModel';
import { GlobalStyles } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';

class AddEditService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            service: new ServiceModel()
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
                    price: service.price.toString(),
                    observations: service.observations
                }
            })
            this.props.navigation.setParams({ functionService: this.updateService, title: 'MODIFICAR SERVICIO' });
        }
        else {
            this.props.navigation.setParams({ functionService: this.addService, title: 'NUEVO SERVICIO' });
        }
    }

    addService = async () => {
        await this.setState({
            loading: true
        })
        this.props.addService({
            ...this.state.service,
            token: this.props.propsLogin.session.account.remember_token
        })
    }

    updateService = async () => {
        await this.setState({
            loading: true
        })
        this.props.updateService({
            ...this.state.service,
            token: this.props.propsLogin.session.account.remember_token
        })
    }

    componentWillReceiveProps = async (nextProps) => {
        if (nextProps.propsService !== this.props.propsService && null !== nextProps.propsService.statusAdd
            && nextProps.propsService.statusAdd) {
            await this.setState({
                service: new ServiceModel()
            })
            this.props.navigation.navigate('ListService')
        }
        if (nextProps.propsService !== this.props.propsService && null !== nextProps.propsService.statusUpdate
            && nextProps.propsService.statusUpdate) {
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
                <ScrollView>
                    <GlobalInput ph="Nombre" change={text => this.setState({ service: { ...this.state.service, name: text } })}
                        value={this.state.service.name} title="Nombre" />
                    <GlobalInput ph="Descripción" change={text => this.setState({ service: { ...this.state.service, description: text } })}
                        value={this.state.service.description} title="Descripción" />
                    <GlobalInput ph="Precio" change={text => this.setState({ service: { ...this.state.service, price: text } })}
                        value={this.state.service.price} title="Precio" type='number' />
                    <GlobalInput ph="Observaciones" change={text => this.setState({ service: { ...this.state.service, observations: text } })}
                        value={this.state.service.observations} title="Observaciones" />
                </ScrollView>
                <LoadingSpinner visible={this.state.loading} />
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