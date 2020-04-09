import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { GlobalStyles, GlobalSecondColor } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import ReactNativePickerModule from 'react-native-picker-module';
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalInput } from '../../components/shared/GlobalInput';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewFor: 0,
            viewType: [
                {
                    index: 0,
                    label: 'DÍA'
                },
                {
                    index: 1,
                    label: 'SEMANA'
                }
            ]
        }
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <View style={{
                    padding: 10, borderBottomColor: GlobalSecondColor,
                    borderBottomWidth: 0.5
                }}>
                    <Text style={{ color: GlobalSecondColor, paddingStart: 10 }}>Vista por</Text>
                    <View style={[styles.comboSelect]}>
                        <TouchableOpacity
                            onPress={() => { this.pickerFitnnesLevel.show() }}
                            style={{
                                flexDirection: 'row',
                                height: '100%', justifyContent: 'center', alignItems: 'center'
                            }}>
                            <Text style={{ color: GlobalSecondColor, fontSize: 16, fontWeight: 'bold' }}>
                                {
                                    this.state.viewType[this.state.viewFor].label
                                }
                            </Text>
                            <Icon name="md-arrow-dropdown" size={32} style={styles.iconSelect} />
                        </TouchableOpacity>
                    </View>

                    <ReactNativePickerModule
                        pickerRef={e => this.pickerFitnnesLevel = e}
                        title={"Vista por"}
                        items={this.state.viewType.map(element => element.label)}
                        onValueChange={(value, index) => this.setState({ viewFor: index })} />

                </View>
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
        },
        comboSelect: {
            backgroundColor: 'white',
            borderColor: GlobalSecondColor,
            borderWidth: 1,
            height: 40,
            borderWidth: 1,
            borderRadius: 10
        },
        iconSelect: {
            color: GlobalSecondColor,
            position: 'absolute',
            right: 5,
            top: 2
        }
    });