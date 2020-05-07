import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { GlobalDatePicker } from '../shared/GlobalDatePicker';
import moment from "moment/min/moment-with-locales";
import { Days } from '../../Constants';
import { GlobalSecondColor, GlobalStyles, GlobalPrimaryColor } from '../../Styles';

class ViewForWeek extends Component {
    constructor(props) {
        super(props);
        moment.locale('es');
        this.state = {
            dateSelect: moment(),
            sevenDays: []
        }

    }

    componentDidMount() {
        this.generateWeekDays();
    }

    generateWeekDays = async () => {
        let currentDate = this.state.dateSelect;
        let currentDatePlusSeven = moment(this.state.dateSelect).add(7, 'd');
        while (currentDate < currentDatePlusSeven) {
            await this.setState({
                sevenDays: [
                    ...this.state.sevenDays,
                    moment(currentDate).toDate()
                ]
            });
            currentDate = moment(currentDate).add(1, 'd');
        }
    }

    changeWeekFrom = async (value) => {
        await this.setState({
            dateSelect: moment(value),
            sevenDays: []
        })
        this.generateWeekDays();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <GlobalDatePicker title="Semana desde" date={this.state.dateSelect}
                    change={(value) => this.changeWeekFrom(value)} />
                <View style={{
                    marginTop: 10, borderBottomColor: GlobalSecondColor,
                    borderBottomWidth: 0.5
                }}>
                    <View style={{ marginLeft: 55, flexDirection: 'row', paddingRight: 10 }}>
                        {
                            this.state.sevenDays.length > 0 &&
                            this.state.sevenDays.map((element) =>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center',
                                    marginRight: 'auto',
                                    marginLeft: 'auto', flex: 1
                                }}>
                                    <Text style={{ marginBottom: 2, color: GlobalSecondColor, fontSize: 12 }}>
                                        {Days[element.getDay()]}
                                    </Text>
                                </View>
                            )
                        }
                    </View>
                </View>
                <ScrollView style={[GlobalStyles.ScrollView, { padding: 0 }]}>
                    {
                        week.map(element =>
                            <View style={{
                                flexDirection: 'row', borderBottomWidth: 0.5, paddingLeft: 10, paddingRight: 10,
                                width: '100%', borderColor: GlobalSecondColor
                            }}>
                                <View style={{ justifyContent: 'center', width: 40 }}>
                                    <Text style={{ color: GlobalSecondColor, fontSize: 12 }}>
                                        {element.hour}
                                    </Text>
                                </View>
                                {
                                    element.days.map(day =>
                                        <TouchableOpacity style={{
                                            justifyContent: 'center', alignItems: 'center',
                                            marginRight: 'auto', backgroundColor: day ? '#2E9F46' : GlobalSecondColor, width: 30,
                                            marginLeft: 'auto', height: 30, marginTop: 2, marginBottom: 2
                                        }} />
                                    )
                                }
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        );
    }
}

const week = [
    {
        hour: '08:00',
        days: [false, false, true, false, false, false, true]
    },
    {
        hour: '08:30',
        days: [false, false, true, false, false, false, true]
    },
    {
        hour: '09:00',
        days: [true, false, true, false, false, false, false]
    },
    {
        hour: '10:00',
        days: [false, false, true, false, false, true, false]
    }
]

const styles = StyleSheet.create({

});

export default ViewForWeek;