import React, { Component } from 'react';
import { View, ScrollView, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import { connect } from 'react-redux';
import { actionGetAllService } from '../../redux/actions/ServiceActions';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { ToastQuestion } from '../../components/shared/ToastQuestion';
import { CardList } from '../../components/shared/CardList';

class ListService extends Component {
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

    componentDidMount = () => {
        this.getAllServices();
    }

    getAllServices = async () => {
        await this.setState({
            loading: true
        });
        this.props.getAllServices({
            token: this.props.propsLogin.session.account.remember_token,
            page: 0
        });
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
        });
        this.getAllServices();
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <View style={{ padding: 10 }}>
                    <GlobalInputSearch change={text => this.setState({ search: text })}
                        value={this.state.search} />
                    <ScrollView style={GlobalStyles.scrollViewHeight} refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh}
                            tintColor={GlobalSecondColor} title="Pull to refresh..."
                            titleColor={GlobalSecondColor} />} >
                        {
                            undefined !== this.props.propsService.services &&
                            <FlatList
                                data={this.props.propsService.services.data}
                                keyExtractor={(item, index) => index.toString()}
                                extraData={this.state.refresh}
                                renderItem={({ item }) =>
                                    <CardList deletePress={() => this.setState({ deleteSelect: item })}
                                        press={() => this.props.navigation.navigate('AddEditService', { service: item })}
                                        title={item.name} description={item.description} price={`$${item.price}`} />
                                } />
                        }
                    </ScrollView >
                </View>
                <LoadingSpinner visible={this.state.loading} />
                <ToastQuestion visible={this.state.deleteSelect}
                    pressCancel={() => this.setState({ deleteSelect: null })}
                    title="¿Esta seguro que desea eliminar el servicio seleccionado?" />
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
    propsService: state.reducerServiceGets
})

const mapDispatchToProps = dispatch => ({
    getAllServices: (data) => {
        dispatch(actionGetAllService(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListService);
