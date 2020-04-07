import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { GlobalInput, GlobalInputEmail, GlobalInputPassword } from '../../components/shared/GlobalInput';
import { GlobalButton } from '../../components/shared/GlobalButton';
import { GlobalStyles, GlobalPrimaryColor } from '../../Styles';
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
                <View>
                    <Image resizeMode='stretch' style={GlobalStyles.logoWithLetter}
                        source={require('../../../assets/logoWithBackgroundWhite.png')}
                    />
                </View>
                <View style={GlobalStyles.ViewBackgroundOpacity}>
                    <GlobalInputEmail ph="EMAIL" center={true}
                        value={this.state.email}
                        change={text => this.setState({ email: text })} />
                    <GlobalInputPassword ph="CONTRASEÑA" center={true}
                        value={this.state.password}
                        change={text => this.setState({ password: text })} />
                    <GlobalButton title="INGRESAR"
                        press={() => { this.login() }} loading={false} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }}
                        style={{ alignItems: 'center' }}>
                        <Text style={{ marginTop: 20, fontSize: 16, color: 'white' }}>
                            ¿OLVIDASTE LA CONTRASEÑA?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }}
                        style={{ alignItems: 'center' }}>
                        <Text style={{ marginTop: 10, fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                            REGISTRATE
                        </Text>
                    </TouchableOpacity>
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

const mapDispatchToProps = dispatch => ({
    login: (data) => {
        dispatch(actionLogin(data));
    }
})

export default connect(null, mapDispatchToProps)(Login);