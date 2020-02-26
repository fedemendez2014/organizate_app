import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SubHead } from '../../components/shared/SubHead';
import { GlobalInput } from '../../components/shared/GlobalInput';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';
import { connect } from 'react-redux';
import { actionAddService } from '../../redux/actions/ServiceActions';

class AddEditService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            loading: false
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SubHead title="Nuevo servicio" />
                <ScrollView style={{ padding: 10, paddingTop: 20 }}>
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Nombre" />
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Descripción" />
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Precio" />
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Observaciones" />
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