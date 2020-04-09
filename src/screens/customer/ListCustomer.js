import React, { Component } from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import { connect } from 'react-redux';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { actionGetAllCustomer } from '../../redux/actions/CustomerActions';
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { CardList } from '../../components/shared/CardList';
import { ToastQuestion } from '../../components/shared/ToastQuestion';

class ListCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            loading: false,
            refresh: false,
            deleteSelect: null,
            refreshing: false
        }
    }

    componentDidMount = async () => {
        this.getAllCustomer();
    }

    getAllCustomer = async () => {
        await this.setState({
            loading: true
        })
        this.props.getAllCustomer({
            token: this.props.propsLogin.session.account.remember_token,
            page: 0
        })
    }

    componentWillReceiveProps = async (nextProps) => {
        await this.setState({
            loading: false,
            refresh: !this.state.refresh,
            refreshing: false
        })
    }

    onRefresh = async () => {
        await this.setState({
            refreshing: true
        })
        this.getAllCustomer();
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <View style={{padding: 10}}>
                    <GlobalInputSearch change={text => this.setState({ search: text })}
                        value={this.state.search} />
                    <ScrollView style={GlobalStyles.scrollViewHeight} refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh}
                            tintColor={GlobalSecondColor} title="Pull to refresh..."
                            titleColor={GlobalSecondColor} />} >
                        {
                            undefined !== this.props.propsCustomer.customers &&
                            <FlatList
                                data={this.props.propsCustomer.customers.data}
                                keyExtractor={(item, index) => index.toString()}
                                extraData={this.state.refresh}
                                renderItem={({ item }) =>
                                    <CardList deletePress={() => this.setState({ deleteSelect: item })}
                                        press={() => this.props.navigation.navigate('AddEditCustomer', { customer: item })}
                                        title={item.name} description={`${item.mobile_phone}, ${item.address}`} />
                                } />
                        }
                    </ScrollView >
                </View>
                <LoadingSpinner visible={this.state.loading} />
                <ToastQuestion visible={this.state.deleteSelect}
                    pressCancel={() => this.setState({ deleteSelect: null })}
                    title="¿Esta seguro que desea eliminar el cliente seleccionado?" />
            </View >
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsCustomer: state.reducerCustomerGets
})

const mapDispatchToProps = dispatch => ({
    getAllCustomer: (data) => {
        dispatch(actionGetAllCustomer(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCustomer);