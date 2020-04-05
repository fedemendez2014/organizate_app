import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export const LoadingSpinner = (props) => {
    return (
        props.visible ?
            <View style={styles.Content}>
                <ActivityIndicator size="large" size='large' style={styles.ActivityIndicator} />
            </View> : null
    )
}

const styles = StyleSheet.create({
    Content: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        top: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#000',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    ActivityIndicator: {
        padding: 25
    }
});