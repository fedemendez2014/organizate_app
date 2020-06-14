import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { GlobalSecondColor } from '../../Styles';

export const ToastQuestion = (props) => (
    null !== props.visible &&
    <View style={styles.contentToast}>
        <View style={styles.viewToast}>
            <Text style={styles.textTitle}>
                {props.title}
            </Text>
            <View style={styles.viewButton}>
                <TouchableOpacity onPress={props.pressCancel}
                    style={styles.buttonCancel}>
                    <Text style={styles.textCancel}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonConfirm} onPress={props.pressConfirm}>
                    <Text style={styles.textConfirm}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
)


const styles = StyleSheet.create({
    textTitle: {
        color: GlobalSecondColor, fontSize: 16, textAlign: 'center'
    },
    viewButton: {
        flexDirection: 'row', marginTop: 30
    },
    buttonCancel: {
        padding: 10, borderColor: GlobalSecondColor,
        borderWidth: 1, borderRadius: 5, width: 120
    },
    textCancel: {
        color: GlobalSecondColor, fontSize: 16, textAlign: 'center'
    },
    buttonConfirm: {
        padding: 10, backgroundColor: GlobalSecondColor,
        borderRadius: 5, width: 120, marginLeft: 10
    },
    textConfirm: {
        color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold'
    },
    contentToast: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center', alignItems: 'center', zIndex: 99999
    },
    viewToast: {
        maxWidth: '90%', minWidth: '80%', minHeight: 50, padding: 20,
        backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
        borderRadius: 5, borderColor: GlobalSecondColor, borderWidth: 2
    },
})