import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { GlobalButton } from '../../components/shared/GlobalButton';
import { GlobalInput, GlobalInputEmail, GlobalInputPassword } from '../../components/shared/GlobalInput';
import { GlobalStyles } from '../../Styles';
import { connect } from "react-redux";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirmation: '',
            errorRegister: '',
            loading: false
        }
    }

    register = async () => {
        await this.setState({ loading: true });
        if (await this.validateFields()) {

        }
        else {
            await this.setState({ loading: false });
        }
    }

    validateFields = async () => {
        await this.setState({ errorRegister: '' });
        if ('' === this.state.name) {
            await this.setState({ errorRegister: 'El nombre no puede ser vacio' });
            return false;
        }
        if ('' === this.state.email) {
            await this.setState({ errorRegister: 'El email no puede ser vacio' });
            return false;
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
            await this.setState({ errorRegister: 'El email no tiene un formato válido' });
            return false;
        }
        if ('' === this.state.phone) {
            await this.setState({ errorRegister: 'El teléfono no puede ser vacio' });
            return false;
        }
        if ('' === this.state.password) {
            await this.setState({ errorRegister: 'La contraseña no puede ser vacia' });
            return false;
        }
        if ('' === this.state.passwordConfirmation) {
            await this.setState({ errorRegister: 'La confirmación de la contraseña no puede ser vacia' });
            return false;
        }
        if (this.state.password !== this.state.passwordConfirmation) {
            await this.setState({ errorRegister: 'Las contraseñas deben coincidir' });
            return false;
        }
        return true;
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={GlobalStyles.ViewBackgroundOpacity}>
                    <Text style={{ textAlign: 'center' }}>
                        REGISTRO
                    </Text>
                </View>
                <View style={GlobalStyles.ViewBackgroundOpacity}>
                    <GlobalInput title="Nombre" ph="Nombre"
                        change={text => this.setState({ name: text })} value={this.state.name} />
                    <GlobalInputEmail title="Email" ph="Email"
                        change={text => this.setState({ email: text })} value={this.state.email} />
                    <GlobalInput title="Celular" ph="Celular"
                        change={text => this.setState({ phone: text })} value={this.state.phone} />
                    <GlobalInputPassword title="Contraseña" ph="Contraseña"
                        change={text => this.setState({ password: text })} value={this.state.password} />
                    <GlobalInputPassword title="Repetir contraseña" ph="Repetir contraseña"
                        change={text => this.setState({ passwordConfirmation: text })} value={this.state.passwordConfirmation} />
                    <Text style={GlobalStyles.textError}>{this.state.errorRegister}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <GlobalButton title="Registrar" press={() => { this.register() }}
                            loading={this.state.loading} />
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



export default connect(null, null)(Register);