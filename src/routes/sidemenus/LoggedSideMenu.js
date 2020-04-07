import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { GlobalPrimaryColor, GlobalSecondColor, GlobalStyles } from '../../Styles';
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
            <View style={styles.content}>
                <View style={[styles.viewTouchable, { alignItems: 'center', marginTop: 40 }]}>
                    <View>
                        <Image resizeMode='stretch' style={GlobalStyles.logoWithLetter}
                            source={require('../../../assets/logoWithBackgroundWhite.png')}
                        />
                    </View>
                    <Text style={styles.textVersion}>
                        Versión 1.0.0
                    </Text>
                </View>
                <ScrollView>
                    <OptionMenu press={() => this.navigatePage('Home')} icon="paper" title="Agenda" />
                    <OptionMenu press={() => this.navigatePage('ListCustomer')} icon="people" title="Clientes" />
                    <OptionMenu press={() => this.navigatePage('ListService')} icon="basket" title="Servicios" />
                    <OptionMenu press={() => this.navigatePage('ListIncome')} icon="trending-up" title="Ingresos" />
                    <OptionMenu press={() => this.navigatePage('ListEgress')} icon="trending-down" title="Egresos" />
                    <OptionMenu press={() => this.props.logout()} icon="log-in" title="Logout" />
                </ScrollView>
            </View >
        );
    }
}

const OptionMenu = (props) =>
    (
        <View style={styles.viewTouchable}>
            <TouchableOpacity onPress={props.press}>
                <View style={styles.viewText}>
                    <Icon name={Platform.OS === 'android' ? `md-${props.icon}` : `ios-${props.icon}`}
                        size={24} color={GlobalSecondColor} />
                    <Text style={styles.textButton}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )


const styles = StyleSheet.create({
    content: {
        width: '100%', height: '100%', backgroundColor: GlobalPrimaryColor
    },
    viewTouchable: {
        borderBottomWidth: 1, borderBottomColor: GlobalSecondColor
    },
    viewText: {
        paddingLeft: 10, flexDirection: 'row', alignItems: 'center'
    },
    textButton: {
        fontSize: 16, marginLeft: 10, paddingTop: 15,
        paddingBottom: 15, color: GlobalSecondColor, fontWeight: 'bold'
    },
    textVersion: {
        color: GlobalSecondColor, fontSize: 14, marginTop: 10
    }
});

const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(actionUserSessionClose());
    }
})

export default connect(null, mapDispatchToProps)(LoggedSideMenu);