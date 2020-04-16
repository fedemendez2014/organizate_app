import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalSecondColor } from '../../Styles';

export const CardList = (props) => (
    <Swipeable
        renderRightActions={() =>
            <TouchableOpacity style={[styles.buttonDelete, styles.shadow]}
                onPress={props.deletePress}>
                <Icon name="ios-trash" size={24} color="white" />
            </TouchableOpacity>
        }>
        <TouchableOpacity
            onPress={props.press}>
            <View style={[styles.touchable, styles.shadow]}>
                <View style={{ width: '90%' }}>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={styles.textTitle} numberOfLines={1}>
                            {props.title}
                        </Text>
                    </View>
                    <View>
                        {
                            props.price ?
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textDescriptionWithPrice}
                                        numberOfLines={1}>
                                        {props.description}
                                    </Text>
                                    <Text style={styles.textPrice} numberOfLines={1}>
                                        {props.price}
                                    </Text>
                                </View>
                                :
                                <Text style={styles.textDescription} numberOfLines={1}>
                                    {props.description}
                                </Text>
                        }
                    </View>
                </View>
                <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Icon size={34} name="ios-arrow-forward" style={{ marginTop: 4 }}
                        color={GlobalSecondColor} />
                </View>
            </View>
        </TouchableOpacity>
    </Swipeable>
)

const styles = StyleSheet.create({
    buttonDelete: {
        width: 50,
        backgroundColor: GlobalSecondColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 10, borderRadius: 5,
        flexDirection: 'row', marginBottom: 10
    },
    touchable: {
        padding: 10, borderRadius: 5, height: 60,
        flexDirection: 'row', marginBottom: 10, backgroundColor: 'white'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5
    },
    textTitle: {
        fontWeight: 'bold', color: GlobalSecondColor
    },
    textDescription: {
        width: '100%', color: GlobalSecondColor
    },
    textPrice: {
        width: '30%', textAlign: 'right', color: GlobalSecondColor
    },
    textDescriptionWithPrice: {
        width: '70%', color: GlobalSecondColor
    }
})