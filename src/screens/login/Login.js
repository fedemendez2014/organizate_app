import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { GlobalInput, GlobalInputEmail } from '../../components/shared/GlobalInput';
import { GlobalButton } from '../../components/shared/GlobalButton';

export default class Login extends Component {
    constructor(props){
        super(props);
    }

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
                    <GlobalInputEmail title="Email" ph="Email" />
                    <GlobalInput title="Contraseña" ph="Contraseña" />
                    <View style={{ alignItems: 'center' }}>
                        <GlobalButton title="Ingresar" 
                            press={() => {this.props.navigation.navigate('Home')}} />
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
                            <Text style={{ marginTop: 15 }}>
                                ¿No tienes cuenta? Registrate
                            </Text>
                        </TouchableOpacity>
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