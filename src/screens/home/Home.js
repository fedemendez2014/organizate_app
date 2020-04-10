import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { GlobalStyles } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import ViewForDay from '../../components/home/ViewForDay';
import ViewForWeek from '../../components/home/ViewForWeek';
import GlobalPicker from '../../components/shared/GlobalPicker';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewFor: 1,
            viewType: [
                {
                    index: 0,
                    label: 'DIARIA'
                },
                {
                    index: 1,
                    label: 'SEMANAL'
                }
            ]
        }
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <GlobalPicker items={this.state.viewType.map(element => element.label)}
                    title="Ver de forma" value={this.state.viewType[this.state.viewFor].label}
                    change={(value, index) => this.setState({ viewFor: index })} />
                {
                    0 === this.state.viewFor ? // 0 = DIA | 1 = SEMANA
                        <ViewForDay />
                        : <ViewForWeek />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {

    });