import React from 'react';
import { GlobalSecondColor } from '../../Styles';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const Pagination = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.prev} disabled={props.page === 1 && true}>
                <Icon
                    name="ios-arrow-dropleft"
                    size={36} color={GlobalSecondColor} style={[styles.iconPrev,
                    props.page === 1 && styles.disabled]} />
            </TouchableOpacity>
            {
                props.page - 1 !== 0 &&
                <TouchableOpacity style={styles.page} onPress={props.prev}>
                    <Text style={styles.number}>{props.page - 1}</Text>
                </TouchableOpacity>
            }
            <View style={styles.pageActive}>
                <Text style={styles.numberActive}>{props.page}</Text>
            </View>
            {
                props.page + 1 <= props.pages &&
                <TouchableOpacity style={styles.page} onPress={props.next}>
                    <Text style={styles.number}>{props.page + 1}</Text>
                </TouchableOpacity>
            }
            <TouchableOpacity onPress={props.next} disabled={props.page === props.pages && true}>
                <Icon
                    name="ios-arrow-dropright"
                    size={36} color={GlobalSecondColor} style={[styles.iconNext,
                    props.page === props.pages && styles.disabled]} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent: 'center', padding: 10
    },
    pageActive: {
        marginRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: 36, width: 36, borderRadius: 50, backgroundColor: GlobalSecondColor
    },
    numberActive: {
        color: 'white', fontSize: 16, fontWeight: 'bold'
    },
    page: {
        marginRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: 36, width: 36, borderRadius: 50, borderColor: GlobalSecondColor, borderWidth: 2
    },
    number: {
        color: GlobalSecondColor, fontSize: 16, fontWeight: 'bold'
    },
    iconPrev: {
        textAlign: 'center', marginRight: 10
    },
    iconNext: {
        textAlign: 'center'
    },
    disabled: {
        opacity: 0.5
    }
});

export default Pagination;