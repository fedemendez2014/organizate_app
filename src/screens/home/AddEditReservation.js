import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LogoBackground } from '../../components/shared/LogoBackground';
import { GlobalDatePicker } from '../../components/shared/GlobalDatePicker';
import moment from "moment/min/moment-with-locales";

class AddEditReservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            time: moment(),
        }
    }

    componentDidMount = () => {
        
    }

    render() {
        return (
            <View>
                <LogoBackground />
                <GlobalDatePicker title="Fecha" date={this.state.date}
                    change={() => { }} hiddenBorder={true} />
                <GlobalDatePicker title="Hora" time={this.state.time}
                    change={() => { }} hiddenBorder={true} />
            </View>
        );
    }
}

export default AddEditReservation;