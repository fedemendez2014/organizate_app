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
                    <Text style={styles.text}>{props.title}</Text>
                </TouchableOpacity>}
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
        }
    });

