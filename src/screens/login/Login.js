import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default class Login extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={{
                    borderWidth: 4, borderColor: 'white',
                    padding: 20, borderRadius: 30, backgroundColor: 'white'
                }}>
                    <Image
                        style={{ width: 120, height: 110 }}
                        source={require('../../../assets/logo.png')}
                    />
                </View>
                <View style={{ backgroundColor: 'rgba(250, 250, 250, 0.75)', width: '100%', marginTop: 20, padding: 15 }}>
                    <Text style={{ paddingStart: 15 }}>Email</Text>
                    <TextInput style={{
                        color: 'black', backgroundColor: 'white', height: 40, borderWidth: 1, borderRadius: 15,
                        paddingStart: 15, marginBottom: 15
                    }} placeholder="Email" />
                    <Text style={{ paddingStart: 15 }}>Contraseña</Text>
                    <TextInput style={{
                        color: 'black', backgroundColor: 'white',height: 40, borderWidth: 1, borderRadius: 15,
                        paddingStart: 15
                    }} placeholder="Contraseña" />
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{
                            marginTop: 15, borderRadius: 15, alignContent: 'center', justifyContent: 'center',
                            alignItems: 'center', height: 40, backgroundColor: '#FFBC17', width: '30%'
                        }}>
                            <Text>INGRESAR</Text>
                        </TouchableOpacity>
                        <Text style={{ marginTop: 15 }}>
                            ¿No tienes cuenta? Registrate
                        </Text>
                        <Text style={{ marginTop: 5 }}>
                            Olvide mi contraseña
                        </Text>
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