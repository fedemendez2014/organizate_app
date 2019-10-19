import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ActivityIndicator } from "react-native";
import { GlobalPrimaryColor } from '../../Styles';

export const GlobalButton = (props) => {
    return (
        <View>
            {props.loading ?
                <TouchableHighlight style={[styles.button, { opacity: 0.5 }]}>
                    <ActivityIndicator size="large" color='white' size="small" />
                </TouchableHighlight>
                :
                <TouchableOpacity style={styles.button} onPress={props.press}>
                    <Text>{props.title}</Text>
                </TouchableOpacity>}
        </View>
    );
}

const styles = StyleSheet.create(
    {
        button: {
            marginTop: 15,
            borderRadius: 15,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            backgroundColor: GlobalPrimaryColor,
            width: 100
        }
    });

