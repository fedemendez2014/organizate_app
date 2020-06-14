import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalSecondColor } from '../../Styles';
import Icon from "react-native-vector-icons/Ionicons";
import DatePicker from 'react-native-datepicker';

export class GlobalDatePicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.viewPicker,
                this.props.hiddenBorder && { borderBottomWidth: 0, paddingBottom: 5 }]}>
                <Text style={styles.textTitle}>{this.props.title}</Text>
                <View style={styles.comboSelect}>
                    <TouchableOpacity
                        onPress={() => this.refs.datePicker.onPressDate()} style={{ flexDirection: 'row' }}
                        style={styles.touchable}>
                        <Text style={styles.textValue}>
                            {
                                this.props.time ?
                                    this.props.time.format("hh:mm A")
                                    : this.props.date.format("DD/MM/YYYY")
                            }
                        </Text>
                        <Icon name="md-arrow-dropdown" size={32} style={styles.iconSelect} />
                    </TouchableOpacity>
                </View>
                <DatePicker
                    style={{ opacity: 0, position: 'absolute' }}
                    customStyles={{
                        btnTextConfirm: {
                            color: GlobalSecondColor
                        }
                    }}
                    mode={this.props.time ? 'time' : 'date'}
                    minuteInterval={5}
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cerrar"
                    ref={'datePicker'}
                    onDateChange={this.props.change}
                    date={this.props.time ? this.props.time.format("hh:mm A")
                        : this.props.date.format("DD/MM/YYYY")}
                    androidMode='spinner'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        //SHARED
        textTitle: {
            paddingStart: 10,
            color: GlobalSecondColor
        },
        //ONLY PICKER
        comboSelect: {
            backgroundColor: 'white', borderColor: GlobalSecondColor,
            borderWidth: 1, height: 40, borderRadius: 10
        },
        iconSelect: {
            color: GlobalSecondColor, position: 'absolute',
            right: 10, top: 2
        },
        textValue: {
            color: GlobalSecondColor, fontSize: 16, fontWeight: 'bold'
        },
        touchable: {
            flexDirection: 'row', height: '100%',
            justifyContent: 'center', alignItems: 'center'
        },
        viewPicker: {
            borderBottomColor: GlobalSecondColor,
            borderBottomWidth: 0.5
        }
    });

