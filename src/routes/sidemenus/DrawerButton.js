import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export const DrawerButton = (props) => {
    return (
        <TouchableOpacity onPress={() => { props.navigation.openDrawer() }} >
            <Icon
                name="ios-menu"
                size={30}
                style={styles.icon}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        paddingLeft: 15,
        paddingRight: 15
    }
});