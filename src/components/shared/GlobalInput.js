import React from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalSecondColor } from '../../Styles';
import Icon from "react-native-vector-icons/Ionicons";

export const GlobalInput = (props) => {
    return (
        <View>
            {
                undefined !== props.title &&
                <Text style={styles.textTitle}>{props.title}</Text>
            }
            <TextInput style={styles.textInput} placeholder={props.ph} placeholderTextColor={GlobalSecondColor}
                onChangeText={props.change} autoCapitalize="none"
                value={props.value} keyboardType={props.type && 'numeric'} />
        </View>
    );
}

export const GlobalInputEmail = (props) => {
    return (
        <View>
            <Text style={styles.textTitle}>{props.title}</Text>
            <TextInput style={styles.textInput} placeholder={props.ph} placeholderTextColor={GlobalSecondColor}
                onChangeText={props.change} autoCapitalize="none"
                keyboardType={'email-address'} value={props.value} />
        </View>
    );
}

export const GlobalInputPassword = (props) => {
    return (
        <View>
            <Text style={styles.textTitle}>{props.title}</Text>
            <TextInput style={styles.textInput} placeholder={props.ph} placeholderTextColor={GlobalSecondColor}
                onChangeText={props.change} autoCapitalize="none"
                value={props.value} secureTextEntry={true} />
        </View>
    );
}

export const GlobalInputSearch = (props) => {
    return (
        <View>
            <TextInput style={[styles.textInput, { borderRadius: 5 }]} placeholder="Buscar"
                placeholderTextColor={GlobalSecondColor}
                onChangeText={props.change} autoCapitalize="none"
                value={props.value} keyboardType={props.type && 'numeric'} />
            <Icon size={24} name="ios-search" color={GlobalSecondColor} style={styles.iconSearch} />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textTitle: {
            paddingStart: 15
        },
        textInput: {
            color: 'black',
            backgroundColor: 'white',
            borderColor: GlobalSecondColor,
            borderWidth: 1,
            height: 40,
            borderWidth: 1,
            borderRadius: 15,
            paddingStart: 10,
            marginBottom: 15
        },
        iconSearch: {
            position: 'absolute',
            right: 10,
            top: 7
        }
    });

