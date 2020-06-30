import React, { Component } from 'react';
import { View, ScrollView, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import { connect } from 'react-redux';
import { actionGetAllService, actionDeleteService } from '../../redux/actions/ServiceActions';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { ToastQuestion } from '../../components/shared/ToastQuestion';
import { CardList } from '../../components/shared/CardList';
import Pagination from '../../components/shared/Pagination';
import ModalMessage from '../../components/shared/ModalMessage';

class ListService extends Component {
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
        this.getAllServices();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.propsServiceActions !== this.props.propsServiceActions && null !== this.props.propsServiceActions.statusDelete) {
            if (this.props.propsServiceActions.statusDelete) {
                this.setState({
                    messageModal: 'Servicio eliminado con éxito',
                    statusModal: true
                });
            }
            else {
                this.setState({
                    messageModal: this.props.propsServiceActions.messageError,
                    statusModal: false
                })
            }
        }
    }

    getAllServices = (loading = true) => {
        this.props.getAllServices({
            token: this.props.propsLogin.session.account.remember_token,
            page: this.state.page,
            search: this.state.search,
            loading: loading
        });
    }

    onRefresh = async () => {
        await this.setState({
            page: 1
        });
        this.getAllServices();
    }

    nextPage = async () => {
        await this.setState({ page: this.state.page - 1 });
        this.getAllServices();
    }

    prevPage = async () => {
        await this.setState({ page: this.state.page - 1 });
        this.getAllServices();
    }

    deleteService = () => {
        this.props.deleteService({
            id: this.state.deleteSelect.id,
            token: this.props.propsLogin.session.account.remember_token
        });
        this.setState({ deleteSelect: null });
    }

    search = async (text) => {
        await this.setState({ search: text });
        this.getAllServices(false);
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
                            this.props.propsService.services.map(item =>
                                <CardList deletePress={() => this.setState({ deleteSelect: item })}
                                    press={() => this.props.navigation.navigate('AddEditService', { service: item })}
                                    title={item.name} description={item.description} price={item.price ? `$${item.price}` : ''} />
                            )
                        }
                    </ScrollView >
                    <Pagination page={this.state.page} pages={this.props.propsService.pages}
                        next={this.nextPage} prev={this.prevPage} />
                </View>
                <LoadingSpinner visible={this.props.propsService.loading || this.props.propsServiceActions.loading} />
                <ToastQuestion visible={this.state.deleteSelect} pressConfirm={this.deleteService}
                    pressCancel={() => this.setState({ deleteSelect: null })}
                    title="¿Esta seguro que desea eliminar el servicio seleccionado?" />
                <ModalMessage message={this.state.messageModal} status={this.state.statusModal}
                    buttonText="Cerrar" press={() => this.setState({ messageModal: '' })} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    viewList: {
        borderTopWidth: 1, borderBottomWidth: 1, padding: 10,
        flexDirection: 'row', marginBottom: 5
    },
    textPrice: {
        width: '40%', textAlign: 'right'
    },
    iconNext: {
        width: '10%', justifyContent: 'center', alignItems: 'flex-end'
    }
})

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsService: state.reducerServiceGets,
    propsServiceActions: state.reducerService
})

const mapDispatchToProps = dispatch => ({
    getAllServices: (data) => {
        dispatch(actionGetAllService(data));
    },
    deleteService: (data) => {
        dispatch(actionDeleteService(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListService);
