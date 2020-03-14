import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { PlaceholderColor, SignUpColor } from '../../Styles';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { actionUserSessionClose } from '../../redux/actions/AccountActions';

class LoggedSideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    navigatePage = (sPage) => {
        this.props.navigation.navigate(sPage);
        this.props.navigation.closeDrawer()
    }

    render() {
        return (
            <ScrollView style={{ width: '100%', height: '100%' }}>
                <View style={[styles.viewTouchable, { alignItems: 'center' }]}>
                    <Image
                        style={{ width: 120, height: 110, marginTop: 40, marginBottom: 5 }}
                        source={require('../../../assets/logo.png')}
                    />
                    <Text>Versión 1.0.0</Text>
                </View>
                <View style={styles.viewTouchable}>
                    <TouchableOpacity onPress={() => this.navigatePage('Home')}>
                        <View style={styles.viewText}>
                            <Icon name="ios-paper" size={22} color={SignUpColor} />
                            <Text style={styles.textButton}>Home</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouchable}>
                    <TouchableOpacity onPress={() => this.navigatePage('ListCustomer')}>
                        <View style={styles.viewText}>
                            <Icon name="ios-people" size={22} color={SignUpColor} />
                            <Text style={styles.textButton}>Clientes</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouchable}>
                    <TouchableOpacity onPress={() => this.navigatePage('ListService')}>
                        <View style={styles.viewText}>
                            <Icon name="md-basket" size={22} color={SignUpColor} />
                            <Text style={styles.textButton}>Servicios</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouchable}>
                    <TouchableOpacity onPress={() => this.navigatePage('ListIncome')}>
                        <View style={styles.viewText}>
                            <Icon name="ios-trending-up" size={22} color={SignUpColor} />
                            <Text style={styles.textButton}>Ingresos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouchable}>
                    <TouchableOpacity onPress={() => this.navigatePage('ListEgress')}>
                        <View style={styles.viewText}>
                            <Icon name="ios-trending-down" size={22} color={SignUpColor} />
                            <Text style={styles.textButton}>Egresos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouchable}>
                    <TouchableOpacity onPress={() => this.props.logout()}>
                        <View style={styles.viewText}>
                            <Icon name="ios-log-in" size={22} color={SignUpColor} />
                            <Text style={styles.textButton}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    viewTitle: {
        marginTop: 10,
        paddingLeft: 10
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10
    },
    viewTouchable: {
        borderBottomWidth: 0.5,
        borderBottomColor: PlaceholderColor
    },
    viewText: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 16,
        marginLeft: 10,
        paddingTop: 15,
        paddingBottom: 15
    }
});

const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(actionUserSessionClose());
    }
})

export default connect(null, mapDispatchToProps)(LoggedSideMenu);