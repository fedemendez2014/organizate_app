import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalButton } from '../../components/shared/GlobalButton';
import { StyleSheet, View, Text } from 'react-native';
import { GlobalSecondColor } from '../../Styles';

function ModalMessage(props) {
    if (props.message) {
        return (
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Icon
                        name={`${props.status ? 'ios-checkmark-circle-outline' : 'ios-close-circle-outline'}`}
                        size={92} color={GlobalSecondColor} style={{ textAlign: 'center' }} />
                    <Text style={styles.modalText}>
                        {props.message}
                    </Text>
                    <GlobalButton title={props.buttonText} style={styles.modalButton}
                        press={props.press} />
                </View>
            </View>
        );
    }
    return null;
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', justifyContent: 'center', alignItems: 'center',
        right: 0, top: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal: {
        backgroundColor: 'white', padding: 15, borderRadius: 15,
        borderColor: GlobalSecondColor, borderWidth: 2, width: '80%', alignItems: 'center'
    },
    modalText: {
        fontSize: 20, marginBottom: 30, marginTop: 10, color: GlobalSecondColor,
        textAlign: 'center'
    },
    modalButton: {
        paddingLeft: 20, paddingRight: 20
    }
});

export default ModalMessage;