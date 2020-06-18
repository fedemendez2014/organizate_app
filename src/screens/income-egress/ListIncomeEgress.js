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
import Pagination from '../../components/shared/Pagination';
import { NavigationEvents } from 'react-navigation';

class ListIncomeEgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            deleteSelect: null,
            page: 1
        }
    }

    componentDidMount = async () => {
        this.getAllIncomesEgress();
    }

    getAllIncomesEgress = () => {
        this.props.getAllIncomesEgress({
            token: this.props.propsLogin.session.account.remember_token,
            page: this.state.page,
            type: this.props.navigation.getParam('type', null)
        })
    }

    onRefresh = () => {
        this.getAllIncomesEgress();
    }

    nextPage = async () => {
        await this.setState({ page: this.state.page + 1 });
        this.getAllIncomesEgress();
    }

    prevPage = async () => {
        await this.setState({ page: this.state.page - 1 });
        this.getAllIncomesEgress();
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <View style={{ padding: 10, flex: 1 }}>
                    <GlobalInputSearch change={text => this.setState({ search: text })}
                        value={this.state.search} />
                    <ScrollView style={GlobalStyles.scrollViewHeight} refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh}
                            tintColor={GlobalSecondColor} title="Pull to refresh..."
                            titleColor={GlobalSecondColor} />} >
                        {
                            this.props.propsIncomeEgress.objects.map(item =>
                                <CardList deletePress={() => this.setState({ deleteSelect: item })}
                                    press={() => this.props.navigation.navigate('AddEditIncomeEgress',
                                        { incomeEgress: item, type: item.type })}
                                    title={item.reason} description={`$${item.amount}`} price={item.date} />
                            )
                        }
                    </ScrollView>
                    <Pagination page={this.state.page} pages={this.props.propsIncomeEgress.pages}
                        next={this.nextPage} prev={this.prevPage} />
                </View>
                <LoadingSpinner visible={this.props.propsIncomeEgress.loading || this.props.propsIncomeEgressActions.loading} />
                <ToastQuestion visible={this.state.deleteSelect}
                    pressCancel={() => this.setState({ deleteSelect: null })}
                    title="¿Esta seguro que desea eliminar el ingreso seleccionado?" />
                <NavigationEvents onWillFocus={() => this.getAllIncomesEgress()} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsIncomeEgress: state.reducerIncomeEgressGets,
    propsIncomeEgressActions: state.reducerIncomeEgress
})

const mapDispatchToProps = dispatch => ({
    getAllIncomesEgress: (data) => {
        dispatch(actionGetAllIncomeEgress(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListIncomeEgress);