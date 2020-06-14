import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { GlobalSecondColor } from "../../Styles";
import Icon from "react-native-vector-icons/Ionicons";

export const GenericModal = (props) => (
    <View style={styles.genericModalContainer}>
        <View style={styles.genericModalContent}>
            <View style={styles.genericModalHead}>
                <Text style={styles.genericModalHead__title}>
                    {props.title}
                </Text>
                <TouchableOpacity style={styles.genericModalHead__buttonClose} onPress={props.close}>
                    <Icon size={30} name="md-close" color={GlobalSecondColor} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {props.body}
            </ScrollView>
        </View>
    </View>
);

const styles = StyleSheet.create({
    genericModalContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0
    },
    genericModalContent: {
        backgroundColor: 'white', marginTop: 40, flex: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40
    },
    genericModalHead: {
        borderBottomWidth: 0.5, marginTop: 10, height: 30, justifyContent: 'center', borderColor: GlobalSecondColor
    },
    genericModalHead__title: {
        width: '100%', textAlign: 'center', fontSize: 18,
        color: GlobalSecondColor, fontWeight: 'bold'
    },
    genericModalHead__buttonClose: {
        position: 'absolute', justifyContent: 'center', alignItems: 'center', right: 10, top: -5, width: 40, height: 40
    }
})