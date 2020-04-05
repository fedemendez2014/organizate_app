import React from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { GlobalSecondColor } from '../../Styles';
import Icon from "react-native-vector-icons/Ionicons";

export const OptionHeadButton = (props) => {
    return (
        <TouchableOpacity onPress={props.press}
            style={styles.touchable}>
            <Icon name={Platform.OS === 'android' ? `md-${props.icon}` : `ios-${props.icon}`}
                size={props.size} color={GlobalSecondColor} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchable: {
        paddingRight: 15
    }
})