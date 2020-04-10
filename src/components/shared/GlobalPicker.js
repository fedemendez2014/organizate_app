import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalSecondColor } from '../../Styles';
import Icon from "react-native-vector-icons/Ionicons";
import ReactNativePickerModule from 'react-native-picker-module';

export default class GlobalPicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.viewPicker}>
                <Text style={styles.textTitle}>{this.props.title}</Text>
                <View style={styles.comboSelect}>
                    <TouchableOpacity
                        onPress={() => { this.picker.show() }}
                        style={styles.touchable}>
                        <Text style={styles.textValue}>
                            {this.props.value}
                        </Text>
                        <Icon name="md-arrow-dropdown" size={32} style={styles.iconSelect} />
                    </TouchableOpacity>
                </View>
                <ReactNativePickerModule
                    pickerRef={e => this.picker = e}
                    title={this.props.title}
                    items={this.props.items}
                    onValueChange={this.props.change} />
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
            padding: 10, borderBottomColor: GlobalSecondColor,
            borderBottomWidth: 0.5
        }
    });