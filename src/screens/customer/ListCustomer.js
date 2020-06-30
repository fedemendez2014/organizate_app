import React, { Component } from 'react';
import { View, ScrollView, FlatList, RefreshControl, ActivityIndicator, Text } from 'react-native';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import { connect } from 'react-redux';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { actionGetAllCustomer, actionDeleteCustomer } from '../../redux/actions/CustomerActions';
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { CardList } from '../../components/shared/CardList';
import { ToastQuestion } from '../../components/shared/ToastQuestion';
import Pagination from '../../components/shared/Pagination';
import ModalMessage from '../../components/shared/ModalMessage';

class ListCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            deleteSelect: null,
            page: 1,
            messageModal: '',
            statusModal: false
        }
    }

    componentDidMount = () => {
        this.getAllCustomer();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.propsCustomerActions !== this.props.propsCustomerActions && null !== this.props.propsCustomerActions.statusDelete) {
            if (this.props.propsCustomerActions.statusDelete) {
                this.setState({
                    messageModal: 'Cliente eliminado con éxito',
                    statusModal: true
                });
                this.getAllCustomer();
            }
            else {
                this.setState({
                    messageModal: this.props.propsCustomerActions.messageError,
                    statusModal: false
                })
            }
        }
    }

    getAllCustomer = (loading = true) => {
        this.props.getAllCustomer({
            token: this.props.propsLogin.session.account.remember_token,
            page: this.state.page,
            search: this.state.search,
            loading: loading
        })
    }

    onRefresh = async () => {
        await this.setState({ page: 1 });
        this.getAllCustomer();
    }

    nextPage = async () => {
        await this.setState({ page: this.state.page + 1 });
        this.getAllCustomer();
    }

    prevPage = async () => {
        await this.setState({ page: this.state.page - 1 });
        this.getAllCustomer();
    }

    deleteCustomer = () => {
        this.props.deleteCustomer({
            id: this.state.deleteSelect.id,
            token: this.props.propsLogin.session.account.remember_token
        });
        this.setState({ deleteSelect: null });
    }

    search = async (text) => {
        await this.setState({ search: text });
        this.getAllCustomer(false);
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <View style={{ padding: 10, flex: 1 }}>
                    <GlobalInputSearch change={text => this.search(text)}
                        value={this.state.search} />
                    <ScrollView style={GlobalStyles.scrollViewHeight} refreshControl={
                        <RefreshControl refreshing={false} onRefresh={this.onRefresh}
                            tintColor={GlobalSecondColor} title="Pull to refresh..."
                            titleColor={GlobalSecondColor} />} >
                        {
                            this.props.propsCustomer.customers.map(item =>
                                <CardList deletePress={() => this.setState({ deleteSelect: item })}
                                    press={() => this.props.navigation.navigate('AddEditCustomer', { customer: item })}
                                    title={item.name} description={`${item.mobile_phone}, ${item.address}`} />
                            )
                        }
                    </ScrollView >
                    <Pagination page={this.state.page} pages={this.props.propsCustomer.pages}
                        next={this.nextPage} prev={this.prevPage} />
                </View>
                <LoadingSpinner visible={this.props.propsCustomer.loading || this.props.propsCustomerActions.loading} />
                <ToastQuestion visible={this.state.deleteSelect} pressConfirm={this.deleteCustomer}
                    pressCancel={() => this.setState({ deleteSelect: null })}
                    title="¿Esta seguro que desea eliminar el cliente seleccionado?" />
                <ModalMessage message={this.state.messageModal} status={this.state.statusModal}
                    buttonText="Cerrar" press={() => this.setState({ messageModal: '' })} />
            </View >
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsCustomer: state.reducerCustomerGets,
    propsCustomerActions: state.reducerCustomer
})

const mapDispatchToProps = dispatch => ({
    getAllCustomer: (data) => {
        dispatch(actionGetAllCustomer(data));
    },
    deleteCustomer: (data) => {
        dispatch(actionDeleteCustomer(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCustomer);