import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalDatePicker } from '../shared/GlobalDatePicker';
import moment from "moment/min/moment-with-locales";

class ViewForWeek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateSelect: moment(),
            sevenDays: []
        }

    }

    componentWillMount() {
        this.generateWeekDays();
    }

    generateWeekDays = async () => {
        let currentDate = this.state.dateSelect;
        while (currentDate <= this.state.dateSelect.add(7, 'd')) {
            await this.setState({
                sevenDays: [
                    ...this.state.sevenDays,
                    moment(currentDate).toDate()
                ]
            });
            currentDate = moment(currentDate).add(1, 'd');
        }
        console.log(this.state.sevenDays)
    }

    render() {
        return (
            <View>
                <GlobalDatePicker title="Semana desde" date={this.state.dateSelect}
                    change={(value) => this.setState({ dateSelect: moment(value) })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default ViewForWeek;