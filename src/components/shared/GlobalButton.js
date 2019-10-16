import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalPrimaryColor } from '../../Styles';

export const GlobalButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={props.press}>
                <Text>{props.title}</Text>
            </TouchableOpacity>
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

