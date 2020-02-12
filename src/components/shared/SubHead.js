import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GlobalOrangeColor } from '../../Styles';

export const SubHead = (props) => (
    <View style={styles.viewBanner}>
        <Text style={styles.textBanner}>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    textBanner: {
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#EEEEEE',
        width: '100%',
        textAlign: 'center',
        color: GlobalOrangeColor,
        fontSize: 16,
        fontWeight: 'bold'
    },
    viewBanner: {
        borderTopWidth: 1.2,
        borderBottomWidth: 1.2,
        borderTopColor: GlobalOrangeColor,
        borderBottomColor: GlobalOrangeColor,
        flexDirection: 'row',
    }
});