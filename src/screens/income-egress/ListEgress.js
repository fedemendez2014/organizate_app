import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { ToastQuestion } from '../../components/shared/ToastQuestion';
import { CardList } from '../../components/shared/CardList';
import { connect } from 'react-redux';
import { actionGetAllIncomeEgress } from '../../redux/actions/IncomeEgressActions';
import { Constants } from '../../Constants';

class ListEgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            loading: false,
            refresh: false,
            refreshing: false,
            deleteSelect: null
        }
    }

    componentDidMount = async () => {
        this.getAllEgress();
    }

    getAllEgress = async () => {
        await this.setState({
            loading: true
        })
        this.props.getAllEgress({
            token: this.props.propsLogin.session.account.remember_token,
            page: 0,
            type: 2 //EGRESS
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
        this.getAllEgress();
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
                    {
                        undefined !== this.props.propsEgress.objects &&
                        <FlatList
                            data={this.props.propsEgress.objects}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state.refresh}
                            renderItem={({ item }) =>
                                <CardList deletePress={() => this.setState({ deleteSelect: item })}
                                    press={() => this.props.navigation.navigate('AddEditIncomeEgress',
                                        { incomeEgress: item, type: Constants.EGRESS })}
                                    title={item.reason} description={`$${item.amount}`} price={item.date} />
                            } />
                    }
                </ScrollView>
                <LoadingSpinner visible={this.state.loading} />
                <ToastQuestion visible={this.state.deleteSelect}
                    pressCancel={() => this.setState({ deleteSelect: null })}
                    title="¿Esta seguro que desea eliminar el egreso seleccionado?" />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsEgress: state.reducerIncomeEgressGets
})

const mapDispatchToProps = dispatch => ({
    getAllEgress: (data) => {
        dispatch(actionGetAllIncomeEgress(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListEgress);