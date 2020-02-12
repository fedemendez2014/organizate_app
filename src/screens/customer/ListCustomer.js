import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SubHead } from '../../components/shared/SubHead';
import { GlobalInput } from '../../components/shared/GlobalInput';
import Icon from "react-native-vector-icons/Ionicons";

export default class ListCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <View>
                <SubHead title="Clientes" />
                <View style={{ padding: 10, width: '100%' }}>
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} />
                </View>
                <ScrollView style={{height: '100%'}}>
                    <View>
                        <TouchableOpacity>
                            <View style={{
                                borderTopWidth: 1, borderBottomWidth: 1, padding: 10,
                                flexDirection: 'row', marginBottom: 5
                            }}>
                                <View style={{ width: '90%' }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                        <Text>Federico Mendez</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ width: '60%' }}>Ruta 3, km 72, Villa Maria</Text>
                                        <Text style={{ width: '40%', textAlign: 'right' }}>098694456</Text>
                                    </View>
                                </View>
                                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Icon size={22} name="ios-arrow-forward" />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ borderTopWidth: 1, borderBottomWidth: 1, padding: 10, flexDirection: 'row' }}>
                                <View style={{ width: '90%' }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                        <Text>Federico Mendez</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ width: '60%' }}>Ruta 3, km 72, Villa Maria</Text>
                                        <Text style={{ width: '40%', textAlign: 'right' }}>098694456</Text>
                                    </View>
                                </View>
                                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Icon size={22} name="ios-arrow-forward" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}