import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { GlobalDatePicker } from '../../components/shared/GlobalDatePicker';
import moment from "moment/min/moment-with-locales";
import ReservationModel from '../../models/ReservationModel';
import { GlobalButtonInputStyle } from '../../components/shared/GlobalButton';
import { GenericModal } from '../../components/shared/GenericModal';

class AddEditReservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.navigation.getParam('date', false) ?
                moment(this.props.navigation.getParam('date', false)) : moment(),
            time: this.props.navigation.getParam('time', false) ?
                moment(this.props.navigation.getParam('time', false)) : moment(),
            reservation: new ReservationModel()
        }
    }

    componentDidMount = () => {

    }

    setTime = async (value) => {
        await this.setState({
            time: moment(`${this.state.date.format('YYYY-MM-DD')} ${value}`)
        })
    }

    render() {
        let { customer } = this.state.reservation;
        return (
            <View style={styles.container}>
                <LogoBackground />
                <GlobalDatePicker title="Fecha" date={this.state.date}
                    change={(value) => { this.setState({ date: moment(value) }) }} hiddenBorder={true} />
                <GlobalDatePicker title="Hora" time={this.state.time}
                    change={(value) => this.setTime(value)} hiddenBorder={true} />
                <GlobalButtonInputStyle title="Cliente" value={customer ? customer.name : 'Seleccione cliente'} />
                <GenericModal title="Clientes" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    }
})

export default AddEditReservation;