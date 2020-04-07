import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { GlobalButton } from '../../components/shared/GlobalButton';
import { GlobalInput, GlobalInputEmail, GlobalInputPassword } from '../../components/shared/GlobalInput';
import { GlobalStyles, GlobalPrimaryColor, GlobalSecondColor } from '../../Styles';
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
                    <Text style={{ textAlign: 'center', fontSize: 36, color: GlobalSecondColor }}>
                        REGISTRO
                    </Text>
                </View>
                <View style={GlobalStyles.ViewBackgroundOpacity}>
                    <GlobalInput ph="NOMBRE" center={true}
                        change={text => this.setState({ name: text })} value={this.state.name} />
                    <GlobalInputEmail ph="EMAIL" center={true}
                        change={text => this.setState({ email: text })} value={this.state.email} />
                    <GlobalInput ph="CELULAR" center={true}
                        change={text => this.setState({ phone: text })} value={this.state.phone} />
                    <GlobalInputPassword ph="CONTRASEÑA" center={true}
                        change={text => this.setState({ password: text })} value={this.state.password} />
                    <GlobalInputPassword ph="REPETIR CONTRASEÑA" center={true}
                        change={text => this.setState({ passwordConfirmation: text })} value={this.state.passwordConfirmation} />
                    <GlobalButton title="REGISTRAR" press={() => { this.register() }}
                        loading={this.state.loading} />
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
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: GlobalPrimaryColor,
        }
    });



export default connect(null, null)(Register);