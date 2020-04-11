import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { GlobalStyles, GlobalSecondColor, GlobalPrimaryColor } from '../../Styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import moment from "moment/min/moment-with-locales";
import { Days } from '../../Constants';

class ViewForDay extends Component {
    constructor(props) {
        super(props);
        moment.locale('es');
        this.state = {
            weekDays: {
                start: moment().startOf('week').toDate(),
                end: moment().endOf('week').toDate(),
                sevenDays: []
            },
            daySelect: moment().format('YYYY-MM-DD')
        }
    }

    componentDidMount = () => {
        this.generateWeekDays();
    }

    getToday = async () => {
        await this.setState({
            weekDays: {
                start: moment().startOf('week').toDate(),
                end: moment().endOf('week').toDate(),
                sevenDays: []
            },
            daySelect: moment().format('YYYY-MM-DD')
        });
        this.generateWeekDays();
    }

    generateWeekDays = async () => {
        let currentDate = this.state.weekDays.start;
        while (currentDate <= this.state.weekDays.end) {
            await this.setState({
                weekDays: {
                    ...this.state.weekDays,
                    sevenDays: [
                        ...this.state.weekDays.sevenDays,
                        moment(currentDate).toDate()
                    ]
                }
            });
            currentDate = moment(currentDate).add(1, 'd');
        }
    }

    /**
     * 1 === NEXT
     * 2 === BEFORE
     */
    changeWeek = async (nType) => {
        if (1 === nType) {
            await this.setState({
                weekDays: {
                    start: moment(this.state.weekDays.start).add(7, 'd').toDate(),
                    end: moment(this.state.weekDays.end).add(7, 'd').toDate(),
                    sevenDays: []
                }
            })
        }
        else {
            await this.setState({
                weekDays: {
                    start: moment(this.state.weekDays.start).subtract(7, 'd').toDate(),
                    end: moment(this.state.weekDays.end).subtract(7, 'd').toDate(),
                    sevenDays: []
                }
            })
        }
        this.generateWeekDays();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <GestureRecognizer
                    onSwipeLeft={() => this.changeWeek(1)}
                    onSwipeRight={() => this.changeWeek(2)}
                >
                    <View style={{ padding: 10, width: '100%', justifyContent: 'center' }}>
                        <View>
                            <Text style={{
                                textAlign: 'center', fontWeight: 'bold',
                                color: GlobalSecondColor, paddingBottom: 5
                            }}>
                                {
                                    moment(this.state.weekDays.end).format('MMMM').charAt(0).toUpperCase() +
                                    moment(this.state.weekDays.end).format('MMMM').substring(1)
                                }
                            </Text>
                            <TouchableOpacity onPress={() => this.getToday()} style={{
                                position: 'absolute', right: 10
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    textAlign: 'right', color: GlobalSecondColor
                                }}>
                                    Hoy
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            {
                                this.state.weekDays.sevenDays.length > 0 &&
                                this.state.weekDays.sevenDays.map((element) =>
                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center',
                                        marginRight: 'auto',
                                        marginLeft: 'auto',
                                    }}>
                                        <Text style={{ marginBottom: 2, color: GlobalSecondColor, fontSize: 12 }}>
                                            {Days[element.getDay()]}
                                        </Text>
                                        <TouchableOpacity onPress={() => this.setState({ daySelect: moment(element).format('YYYY-MM-DD') })}
                                            style={{
                                                height: 40, width: 40, borderWidth: 2, borderRadius: 99,
                                                borderColor: GlobalSecondColor,
                                                backgroundColor: moment(element).format('YYYY-MM-DD') === this.state.daySelect ? GlobalSecondColor : 'white'
                                                , justifyContent: 'center', alignItems: 'center'
                                            }}>
                                            <Text style={{
                                                color: moment(element).format('YYYY-MM-DD') === this.state.daySelect ? 'white' : GlobalSecondColor,
                                                fontWeight: 'bold',
                                                fontSize: 16
                                            }}>
                                                {element.getDate()}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                </GestureRecognizer>
                <View style={{
                    paddingStart: 10, borderBottomWidth: 0.5,
                    borderColor: GlobalSecondColor, paddingBottom: 2
                }}>
                    <Text style={{ fontWeight: 'bold', color: GlobalSecondColor, textAlign: 'center' }}>
                        {moment(this.state.daySelect).format('LL')}
                    </Text>
                </View>
                <ScrollView style={[GlobalStyles.ScrollView, { padding: 0 }]}>
                    <View style={{
                        flexDirection: 'row', borderBottomWidth: 0.5, paddingLeft: 10, paddingRight: 10,
                        width: '100%', borderColor: GlobalSecondColor
                    }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ color: GlobalSecondColor }}>
                                8:00
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            margin: 2,
                            marginLeft: 10, padding: 5,
                            backgroundColor: GlobalPrimaryColor,
                        }}>
                            <Text style={{ color: GlobalSecondColor, fontWeight: 'bold' }}>
                                Federico Mendez
                            </Text>
                            <Text style={{ color: GlobalSecondColor, fontSize: 12 }}>
                                Corte de pelo
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        flexDirection: 'row', borderBottomWidth: 0.5,
                        width: '100%', borderColor: GlobalSecondColor, paddingLeft: 10, paddingRight: 10,
                    }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ color: GlobalSecondColor }}>
                                8:30
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            margin: 2,
                            marginLeft: 10, padding: 5,
                            backgroundColor: '#2E9F46',
                        }} onPress={() => { this.props.showDetails("asasdas") }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                Federico Mendez
                            </Text>
                            <Text style={{ color: 'white', fontSize: 12 }}>
                                Corte de pelo
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'row', borderBottomWidth: 0.5,
                        width: '100%', borderColor: GlobalSecondColor, paddingLeft: 10, paddingRight: 10,
                    }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ color: GlobalSecondColor }}>
                                9:00
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            margin: 2,
                            marginLeft: 10, padding: 5,
                            backgroundColor: 'transparent',
                        }}>
                            <Text style={{ color: GlobalSecondColor, fontWeight: 'bold' }}>

                            </Text>
                            <Text style={{ color: GlobalSecondColor, fontSize: 12 }}>

                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'row', borderBottomWidth: 0.5,
                        width: '100%', borderColor: GlobalSecondColor, paddingLeft: 10, paddingRight: 10,
                    }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ color: GlobalSecondColor }}>
                                9:30
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            margin: 2,
                            marginLeft: 10, padding: 5,
                            backgroundColor: GlobalPrimaryColor,
                        }}>
                            <Text style={{ color: GlobalSecondColor, fontWeight: 'bold' }}>
                                Federico Mendez
                            </Text>
                            <Text style={{ color: GlobalSecondColor, fontSize: 12 }}>
                                Corte de pelo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ViewForDay;