import React from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';

export const LogoBackground = () => (
    <View style={styles.view} >
        <Image style={styles.image} source={require('../../../assets/logo.png')} />
    </View>
)

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    view: {
        position: 'absolute', alignItems: 'center', width: '100%',
        height: height - 120, justifyContent: 'center'
    },
    image: {
        opacity: 0.2
    }
})