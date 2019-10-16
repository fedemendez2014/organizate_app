import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text>HOME</Text>
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