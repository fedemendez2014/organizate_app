import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { GlobalInput, GlobalInputEmail, GlobalInputPassword } from '../../components/shared/GlobalInput';
import { GlobalButton } from '../../components/shared/GlobalButton';
import { GlobalStyles } from '../../Styles';
import { connect } from 'react-redux';
import { actionLogin } from '../../redux/actions/AccountActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorLogin: '',
            loading: false
        }
    }

    login = async () => {
        await this.setState({ loading: true });
        if (await this.validate()) {
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        }
        else {
            await this.setState({ loading: false });
        } 
    }

    validate = async () => {
        await this.setState({ errorLogin: '' });
        if ('' === this.state.email) {
            await this.setState({ errorLogin: 'Debe ingresar el email' });
            return false;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
            await this.setState({ errorLogin: 'El email no tiene un formato válido' });
            return false;
        }
        if ('' === this.state.password) {
            await this.setState({ errorLogin: 'Debe ingresar la contraseña' });
            return false;
        }
        return true;
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
                    <GlobalInputEmail title="Email" ph="Email"
                        value={this.state.email} change={text => this.setState({ email: text })} />
                    <GlobalInputPassword title="Contraseña" ph="Contraseña"
                        value={this.state.password} change={text => this.setState({ password: text })} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={GlobalStyles.textError}>{this.state.errorLogin}</Text>
                        <GlobalButton title="Ingresar"
                            press={() => { this.login() }} loading={false} />
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }}>
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

const mapDispatchToProps = dispatch => ({
    login: (data) => {
        dispatch(actionLogin(data));
    }
})

export default connect(null, mapDispatchToProps)(Login);