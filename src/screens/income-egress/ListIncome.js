import React, { Component } from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { GlobalInputSearch } from '../../components/shared/GlobalInput';
import { connect } from 'react-redux';
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { CardList } from '../../components/shared/CardList';
import { ToastQuestion } from '../../components/shared/ToastQuestion';
import { actionGetAllIncomeEgress } from '../../redux/actions/IncomeEgressActions';
import { Constants } from '../../Constants';

class ListIncome extends Component {
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
        this.getAllIncomes();
    }

    getAllIncomes = async () => {
        await this.setState({
            loading: true
        })
        this.props.getAllIncomes({
            token: this.props.propsLogin.session.account.remember_token,
            page: 0,
            type: 1 //INCOMES
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
        this.getAllIncomes();
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
                            undefined !== this.props.propsIncome.objects &&
                            <FlatList
                                data={this.props.propsIncome.objects}
                                keyExtractor={(item, index) => index.toString()}
                                extraData={this.state.refresh}
                                renderItem={({ item }) =>
                                    <CardList deletePress={() => this.setState({ deleteSelect: item })}
                                        press={() => this.props.navigation.navigate('AddEditIncomeEgress',
                                            { incomeEgress: item, type: Constants.INCOME })}
                                        title={item.reason} description={`$${item.amount}`} price={item.date} />
                                } />
                        }
                    </ScrollView>
                </View>
                <LoadingSpinner visible={this.state.loading} />
                <ToastQuestion visible={this.state.deleteSelect}
                    pressCancel={() => this.setState({ deleteSelect: null })}
                    title="¿Esta seguro que desea eliminar el ingreso seleccionado?" />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsIncome: state.reducerIncomeEgressGets
})

const mapDispatchToProps = dispatch => ({
    getAllIncomes: (data) => {
        dispatch(actionGetAllIncomeEgress(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListIncome);