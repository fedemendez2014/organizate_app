import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { GlobalButton } from '../../components/shared/GlobalButton';
import { GlobalInput, GlobalInputEmail } from '../../components/shared/GlobalInput';
import { GlobalStyles } from '../../Styles';

export default class Register extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={GlobalStyles.ViewBackgroundOpacity}>
                    <Text style={{textAlign: 'center'}}>
                        REGISTRO
                    </Text>
                </View>
                <View style={GlobalStyles.ViewBackgroundOpacity}>
                    <GlobalInput title="Nombre" ph="Nombre" />
                    <GlobalInputEmail title="Email" ph="Email" />
                    <GlobalInput title="Teléfono" ph="Teléfono" />
                    <GlobalInput title="Contraseña" ph="Contraseña" />
                    <GlobalInput title="Repetir contraseña" ph="Repetir contraseña" />
                    <View style={{ alignItems: 'center' }}>
                        <GlobalButton title="Registrar" press={() => {}} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFBC17',
        }
    });