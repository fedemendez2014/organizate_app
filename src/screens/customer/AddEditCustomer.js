import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SubHead } from '../../components/shared/SubHead';
import { GlobalInput } from '../../components/shared/GlobalInput';

export default class AddEditCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <View>
                <SubHead title="Nuevo cliente" />
                <ScrollView style={{ padding: 10, paddingTop: 20 }}>
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Nombre" />
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Email" />
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Dirección" />
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Telefono" />
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Celular" />
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} title="Observaciones" />
                </ScrollView>
            </View>
        )
    }
}