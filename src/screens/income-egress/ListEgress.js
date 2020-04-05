import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';
import { GlobalInput } from '../../components/shared/GlobalInput';
import Icon from "react-native-vector-icons/Ionicons";

export default class ListEgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <View>
                <View style={{ padding: 10, width: '100%' }}>
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} />
                </View>
                <ScrollView style={{ height: '100%' }}>
                    <View>
                        {
                            //undefined !== this.props.propsCustomer.customers &&
                            <FlatList
                                //data={this.props.propsCustomer.customers.data}
                                data={[1, 2, 3]}
                                keyExtractor={(item, index) => index.toString()}
                                extraData={this.state.refresh}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('AddEditIncomeEgress', { title: 'Modificar egreso' })}>
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