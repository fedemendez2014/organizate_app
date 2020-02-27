import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SubHead } from '../../components/shared/SubHead';
import { GlobalInput } from '../../components/shared/GlobalInput';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';
import { connect } from 'react-redux';
import { actionAddService } from '../../redux/actions/ServiceActions';
import ServiceModel from '../../models/ServiceModel';

class AddEditService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            loading: false,
            service: new ServiceModel()
        }
    }

    componentDidMount = () => {
        console.log("sa")
        this.props.navigation.setParams({ functionService: this.addService });
    }

    addService = async () => {
        /*await this.setState({
            loading: true
        })*/
        this.props.addService({
            ...this.state.service,
            token: this.props.propsLogin.session.remember_token
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SubHead title="Nuevo servicio" />
                <ScrollView style={{ padding: 10, paddingTop: 20 }}>
                    <GlobalInput ph="Nombre" change={text => this.setState({ service: { ...this.state.service, name: text } })}
                        value={this.state.service.name} title="Nombre" />
                    <GlobalInput ph="Descripción" change={text => this.setState({ service: { ...this.state.service, description: text } })}
                        value={this.state.service.description} title="Descripción" />
                    <GlobalInput ph="Precio" change={text => this.setState({ service: { ...this.state.service, price: text } })}
                        value={this.state.service.price} title="Precio" />
                    <GlobalInput ph="Observaciones" change={text => this.setState({ service: { ...this.state.service, observations: text } })}
                        value={this.state.service.observations} title="Observaciones" />
                </ScrollView>
                <LoadingSpinner visible={this.state.loading} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin
})

const mapDispatchToProps = dispatch => ({
    addService: (data) => {
        dispatch(actionAddService(data));
    },
    updateService: (data) => {
        dispatch();
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditService);