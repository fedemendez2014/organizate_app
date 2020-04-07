import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { ToastQuestion } from '../../components/shared/ToastQuestion';
import { CardList } from '../../components/shared/CardList';

export default class ListEgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            refreshing: false,
            loading: false,
            deleteSelect: null
        }
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <GlobalInputSearch change={text => this.setState({ search: text })}
                    value={this.state.search} />
                <ScrollView style={GlobalStyles.scrollViewHeight} refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh}
                        tintColor={GlobalSecondColor} title="Pull to refresh..."
                        titleColor={GlobalSecondColor} />} >
                    <FlatList
                        data={[{ reason: 'UTE', amount: '200', date: '20/03/20' },
                        { reason: 'UTE', amount: '200', date: '20/03/20' }]}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state.refresh}
                        renderItem={({ item }) =>
                            <CardList deletePress={() => this.setState({ deleteSelect: item })}
                                press={() => this.props.navigation.navigate('AddEditCustomer', { customer: item })}
                                title={item.reason} description={`$${item.amount}`} price={item.date} />
                        } />

                </ScrollView>
                <LoadingSpinner visible={this.state.loading} />
                <ToastQuestion visible={this.state.deleteSelect}
                    pressCancel={() => this.setState({ deleteSelect: null })}
                    title="¿Esta seguro que desea eliminar el egreso seleccionado?" />
            </View>
        );
    }
}