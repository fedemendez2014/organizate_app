import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { GlobalDatePicker } from '../../components/shared/GlobalDatePicker';
import moment from "moment/min/moment-with-locales";

class AddEditReservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.navigation.getParam('date', false) ?
                moment(this.props.navigation.getParam('date', false)) : moment(),
            time: this.props.navigation.getParam('time', false) ?
                moment(this.props.navigation.getParam('time', false)) : moment(),
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
        return (
            <View>
                <LogoBackground />
                <GlobalDatePicker title="Fecha" date={this.state.date}
                    change={(value) => { this.setState({ date: moment(value) }) }} hiddenBorder={true} />
                <GlobalDatePicker title="Hora" time={this.state.time}
                    change={(value) => this.setTime(value)} hiddenBorder={true} />
            </View>
        );
    }
}

export default AddEditReservation;