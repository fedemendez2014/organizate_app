import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import IncomeEgressModel from '../../models/IncomeEgressModel';
import { Constants } from '../../Constants';
import { GlobalStyles } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { GlobalInput } from '../../components/shared/GlobalInput';

class AddEditIncomeEgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            incomeEgress: new IncomeEgressModel()
        }
    }

    componentDidMount = async () => {
        if (null !== this.props.navigation.getParam('incomeEgress', null)) {
            var incomeEgress = this.props.navigation.getParam('incomeEgress', null);
            await this.setState({
                incomeEgress: {
                    id: incomeEgress.id,
                    reason: incomeEgress.reason,
                    amount: incomeEgress.amount,
                    type: incomeEgress.type,
                    date: incomeEgress.date
                }
            })
            this.props.navigation.setParams({
                functionIncomeEgress: () => { },
                title: `MODIFICAR ${incomeEgress.type === Constants.INCOME ? 'INGRESO' : 'EGRESO'}`
            });
        }
        else {
            this.props.navigation.setParams({
                functionIncomeEgress: () => { },
                title: `NUEVO ${this.props.navigation.getParam('type', null) === Constants.INCOME ? 'INGRESO' : 'EGRESO'}`
            });
        }
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <ScrollView>
                    <GlobalInput ph="Razón" value={this.state.incomeEgress.reason} title="Razón"
                        change={text => this.setState({ incomeEgress: { ...this.state.incomeEgress, reason: text } })} />
                    <GlobalInput ph="Monto" value={this.state.incomeEgress.amount} title="Monto"
                        change={text => this.setState({ incomeEgress: { ...this.state.incomeEgress, amount: text } })} />
                    <GlobalInput ph="Fecha" value={this.state.incomeEgress.date} title="Fecha"
                        change={text => this.setState({ incomeEgress: { ...this.state.incomeEgress, date: text } })} />
                </ScrollView>
            </View>
        );
    }
}

export default connect(null, null)(AddEditIncomeEgress);