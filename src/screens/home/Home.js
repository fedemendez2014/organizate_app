import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <ScrollView style={GlobalStyles.ScrollView}>
                    <Text>HOME</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1
        }
    });