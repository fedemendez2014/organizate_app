import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import IncomeEgressModel from '../../models/IncomeEgressModel';
import { Constants } from '../../Constants';
import { GlobalStyles } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { GlobalInput } from '../../components/shared/GlobalInput';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import ModalMessage from '../../components/shared/ModalMessage';
import { actionAddIncomeEgress, actionUpdateIncomeEgress } from '../../redux/actions/IncomeEgressActions';
import moment from "moment/min/moment-with-locales";
import { GlobalDatePicker } from '../../components/shared/GlobalDatePicker';

class AddEditIncomeEgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomeEgress: new IncomeEgressModel(),
            messageModal: '',
            statusModal: false
        }
    }

    componentDidMount = async () => {
        if (null !== this.props.navigation.getParam('incomeEgress', null)) {
            var incomeEgress = this.props.navigation.getParam('incomeEgress', null);
            console.log(incomeEgress)
            await this.setState({
                incomeEgress: {
                    id: incomeEgress.id,
                    reason: incomeEgress.reason,
                    amount: incomeEgress.amount.toString(),
                    type: incomeEgress.type,
                    date: moment(incomeEgress.date)
                }
            })
            console.log(this.state)
            this.props.navigation.setParams({
                functionIncomeEgress: this.updateIncomeEgress,
                title: `MODIFICAR ${incomeEgress.type === Constants.INCOME ? 'INGRESO' : 'EGRESO'}`
            });
        }
        else {
            await this.setState({
                incomeEgress: {
                    ...this.state.incomeEgress,
                    type: this.props.navigation.getParam('type', null) === Constants.INCOME ? Constants.INCOME : Constants.EGRESS
                }
            })
            this.props.navigation.setParams({
                functionIncomeEgress: this.addIncomeEgress,
                title: `NUEVO ${this.props.navigation.getParam('type', null) === Constants.INCOME ? 'INGRESO' : 'EGRESO'}`
            });
        }
    }

    componentDidUpdate = async (prevProps) => {
        if (prevProps.propsIncomeEgress !== this.props.propsIncomeEgress && null !== this.props.propsIncomeEgress.statusAdd) {
            if (this.props.propsIncomeEgress.statusAdd) {
                await this.setState({
                    incomeEgress: {
                        ...new IncomeEgressModel(),
                        type: this.state.incomeEgress.type
                    },
                    messageModal: `${this.state.incomeEgress.type === Constants.INCOME ? 'Ingreso' : 'Egreso'} agregado con éxito`,
                    statusModal: true
                })
            }
            else {
                await this.setState({
                    messageModal: this.props.propsIncomeEgress.messageError,
                    statusModal: false
                })
            }
        }
        if (prevProps.propsIncomeEgress !== this.props.propsIncomeEgress && null !== this.props.propsIncomeEgress.statusUpdate) {
            if (this.props.propsIncomeEgress.statusUpdate) {
                await this.setState({
                    messageModal: `${this.state.incomeEgress.type === Constants.INCOME ? 'Ingreso' : 'Egreso'} actualizado con éxito`,
                    statusModal: true
                })
            }
            else {
                await this.setState({
                    messageModal: this.props.propsIncomeEgress.messageError,
                    statusModal: false
                })
            }
        }
    }

    addIncomeEgress = async () => {
        if (await this.validate()) {
            console.log(this.state.incomeEgress);
            this.props.addIncomeEgress({
                ...this.state.incomeEgress,
                date: this.state.incomeEgress.date.format("YYYY-MM-DD"),
                token: this.props.propsLogin.session.account.remember_token
            })
        }
    }

    updateIncomeEgress = async () => {
        if (await this.validate()) {
            this.props.updateIncomeEgress({
                ...this.state.incomeEgress,
                date: this.state.incomeEgress.date.format("YYYY-MM-DD"),
                token: this.props.propsLogin.session.account.remember_token
            })
        }
    }

    validate = async () => {
        await this.setState({ messageModal: '', statusModal: false });
        if (!this.state.incomeEgress.reason) {
            await this.setState({ messageModal: 'La razón es requerida', statusModal: false });
            return false;
        }
        if (!this.state.incomeEgress.amount) {
            await this.setState({ messageModal: 'Debe ingresar un monto válido', statusModal: false });
            return false;
        }
        return true;
    }

    closeModal = async () => {
        console.log(!this.state.incomeEgress.id && this.state.statusModal)
        if (!this.state.incomeEgress.id && this.state.statusModal) {
            await this.setState({
                messageModal: '',
                statusModal: false
            })
            this.state.incomeEgress.type === Constants.INCOME ?
                this.props.navigation.navigate('ListIncome')
                : this.props.navigation.navigate('ListEgress');

        }
        await this.setState({
            messageModal: '',
            statusModal: false
        })
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <ScrollView style={{ padding: 10 }}>
                    <GlobalInput ph="Razón" value={this.state.incomeEgress.reason} title="Razón"
                        change={text => this.setState({ incomeEgress: { ...this.state.incomeEgress, reason: text } })} />
                    <GlobalInput ph="Monto" value={this.state.incomeEgress.amount} title="Monto" type='number'
                        change={text => this.setState({ incomeEgress: { ...this.state.incomeEgress, amount: text } })} />
                    <GlobalDatePicker title="Fecha" date={this.state.incomeEgress.date}
                        change={(value) => { this.setState({ incomeEgress: { ...this.state.incomeEgress, date: moment(value) } }) }}
                        hiddenBorder={true} align="flex-start" bold="none" />
                </ScrollView>
                <LoadingSpinner visible={this.props.propsIncomeEgress.loading} />
                <ModalMessage message={this.state.messageModal} status={this.state.statusModal}
                    buttonText="Cerrar" press={this.closeModal} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsIncomeEgress: state.reducerIncomeEgress
})

const mapDispatchToProps = dispatch => ({
    addIncomeEgress: (data) => {
        dispatch(actionAddIncomeEgress(data));
    },
    updateIncomeEgress: (data) => {
        dispatch(actionUpdateIncomeEgress(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditIncomeEgress);