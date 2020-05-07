import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { GlobalStyles, GlobalSecondColor, GlobalPrimaryColor } from '../../Styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import moment from "moment/min/moment-with-locales";
import { Days } from '../../Constants';
import { connect } from 'react-redux';
import { actionGetScheduleList } from '../../redux/actions/ScheduleActions';

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
        this.getScheduleList();
    }

    getScheduleList = () => {
        this.props.getScheduleList({
            date: this.state.daySelect,
            token: this.props.propsLogin.session.account.remember_token
        });
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

    getDay = async (element) => {
        await this.setState({
            daySelect: moment(element).format('YYYY-MM-DD')
        });
        this.getScheduleList();
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
                                    <BubbleDay press={() => this.getDay(element)}
                                        element={element} daySelect={this.state.daySelect}
                                    />
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
                    {
                        this.props.propsSchedule.scheduleList.map(element =>
                            <View style={{
                                flexDirection: 'row', borderBottomWidth: 0.5, paddingLeft: 10, paddingRight: 10,
                                width: '100%', borderColor: GlobalSecondColor
                            }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={{ color: GlobalSecondColor }}>
                                        {element.time}
                                    </Text>
                                </View>
                                {
                                    element.reservation ?
                                        <TouchableOpacity onPress={() => { this.props.showDetails(element) }}
                                            style={{
                                                margin: 2, flex: 1,
                                                marginLeft: 10, padding: 5,
                                                backgroundColor: element.reservation.isFinished ? '#2E9F46' : GlobalPrimaryColor,
                                            }}>
                                            <Text style={{
                                                color: element.reservation.isFinished ? 'white' : GlobalSecondColor,
                                                fontWeight: 'bold'
                                            }} numberOfLines={1}>
                                                {element.reservation.customer.name}
                                            </Text>
                                            <Text style={{
                                                color: element.reservation.isFinished ? 'white' : GlobalSecondColor,
                                                fontSize: 12
                                            }} numberOfLines={1}>
                                                {element.reservation.services.map(
                                                    (service, index) => `${index !== 0 ? ', ' : ''}${service.name}`
                                                )}
                                            </Text>
                                        </TouchableOpacity> :
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.props.navigation.navigate('AddEditReservation', {
                                                    date: this.state.daySelect,
                                                    time: `${this.state.daySelect} ${element.time}`
                                                })
                                            }}
                                            style={{
                                                height: 42, flex: 1,
                                                marginLeft: 10,
                                                backgroundColor: 'transparent'
                                            }}>
                                        </TouchableOpacity>
                                }
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        );
    }
}

const BubbleDay = (props) => (
    <View style={bubbleDayStyles.view}>
        <Text style={bubbleDayStyles.textDay}>
            {Days[props.element.getDay()]}
        </Text>
        <TouchableOpacity onPress={props.press}
            style={[bubbleDayStyles.touchable, {
                backgroundColor: moment(props.element).format('YYYY-MM-DD') === props.daySelect ?
                    GlobalSecondColor : 'white'
            }]}>
            <Text style={[bubbleDayStyles.textBubbleDay, {
                color: moment(props.element).format('YYYY-MM-DD') === props.daySelect ?
                    'white' : GlobalSecondColor,
            }]}>
                {props.element.getDate()}
            </Text>
        </TouchableOpacity>
    </View >
);

const bubbleDayStyles = StyleSheet.create({
    view: {
        justifyContent: 'center', alignItems: 'center',
        marginRight: 'auto', marginLeft: 'auto',
    },
    textDay: {
        marginBottom: 2, color: GlobalSecondColor,
        fontSize: 12
    },
    touchable: {
        height: 40, width: 40, borderWidth: 2, borderRadius: 99,
        borderColor: GlobalSecondColor, justifyContent: 'center',
        alignItems: 'center'
    },
    textBubbleDay: {
        fontWeight: 'bold', fontSize: 16
    }
});

const day = [
    {
        time: '08:00',
        reservation: {
            id: 29,
            name: 'Federico Martin Mendez Lopez',
            serviceName: 'Corte de pelo clasico',
            isFinished: true
        }
    },
    {
        time: '08:30',
        reservation: null
    },
    {
        time: '09:00',
        reservation: {
            id: 33,
            name: 'Sofia Guerra',
            serviceName: 'Lavado y tinta 30m',
            isFinished: false
        }
    },
    {
        time: '10:00',
        reservation: null
    }
]

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsSchedule: state.reducerScheduleGets
})

const mapDispatchToProps = dispatch => ({
    getScheduleList: (data) => {
        dispatch(actionGetScheduleList(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewForDay);