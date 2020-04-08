import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { GlobalSecondColor } from '../../Styles';
import Icon from "react-native-vector-icons/Ionicons";

export const OptionHeadButton = (props) => {
    return (
        <TouchableOpacity onPress={props.press}
            style={styles.touchable}>
            <Icon name={props.icon}
                size={props.size} color={GlobalSecondColor} />
        </TouchableOpacity>
    );
}

export const BackHeadButton = (props) => {
    return (
        <TouchableOpacity onPress={props.press}>
            <Icon name={Platform.OS === 'android' ? "md-arrow-back" : "ios-arrow-back"}
                color={GlobalSecondColor} size={26}
                style={{ paddingLeft: 15 }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchable: {
        paddingRight: 15
    }
})