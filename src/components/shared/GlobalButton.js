import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ActivityIndicator } from "react-native";
import { GlobalPrimaryColor, GlobalSecondColor } from '../../Styles';

export const GlobalButton = (props) => {
    return (
        <View>
            {props.loading ?
                <TouchableHighlight style={[styles.button, { opacity: 0.5 }]}>
                    <ActivityIndicator size="large" color='white' size="small" />
                </TouchableHighlight>
                :
                <TouchableOpacity style={styles.button} onPress={props.press}>
                    <Text style={[styles.text, props.style]}>{props.title}</Text>
                </TouchableOpacity>}
        </View>
    );
}

export const GlobalButtonInputStyle = (props) => {
    return (
        <View>
            <Text style={styles.textTitle}>{props.title}</Text>
            <TouchableOpacity style={styles.textInput}>
                <Text style={styles.textValue}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        button: {
            borderRadius: 10,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            backgroundColor: GlobalSecondColor,
            borderColor: 'white',
            borderWidth: 1
        },
        text: {
            color: 'white',
            fontWeight: 'bold'
        },
        textTitle: {
            paddingStart: 10,
            color: GlobalSecondColor
        },
        textValue: {
            color: GlobalSecondColor,
            fontSize: 16,
            fontWeight: 'bold'
        },
        textInput: {
            color: GlobalSecondColor,
            backgroundColor: 'white',
            borderColor: GlobalSecondColor,
            borderWidth: 1,
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            paddingStart: 10,
            marginBottom: 15,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

