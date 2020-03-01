import React from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";

export const GlobalInput = (props) => {
    return (
        <View>
            {
                undefined !== props.title &&
                <Text style={styles.textTitle}>{props.title}</Text>
            }
            <TextInput style={styles.textInput} placeholder={props.ph}
                onChangeText={props.change} autoCapitalize="none"
                value={props.value} keyboardType={props.type && 'numeric'} />
        </View>
    );
}

export const GlobalInputEmail = (props) => {
    return (
        <View>
            <Text style={styles.textTitle}>{props.title}</Text>
            <TextInput style={styles.textInput} placeholder={props.ph}
                onChangeText={props.change} autoCapitalize="none"
                keyboardType={'email-address'} value={props.value} />
        </View>
    );
}

export const GlobalInputPassword = (props) => {
    return (
        <View>
            <Text style={styles.textTitle}>{props.title}</Text>
            <TextInput style={styles.textInput} placeholder={props.ph}
                onChangeText={props.change} autoCapitalize="none"
                value={props.value} secureTextEntry={true} />
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
            height: 40,
            borderWidth: 1,
            borderRadius: 15,
            paddingStart: 15,
            marginBottom: 15
        }
    });

