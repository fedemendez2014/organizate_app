import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const GlobalPrimaryColor = '#f1a803';
export const GlobalSecondColor = '#D30000';

export const GlobalStyles = StyleSheet.create(
    {
        ViewBackgroundOpacity:
        {
            backgroundColor: 'rgba(250, 250, 250, 0.20)',
            width: '100%',
            marginTop: 20,
            paddingTop: 30,
            paddingBottom: 30,
            padding: 20,
            justifyContent: 'center'
        },
        textError: {
            color: 'red',
            textAlign: 'center'
        },
        ViewBackground: {
            backgroundColor: '#E6E9F0',
            flex: 1
        },
        logoWithLetter: {
            maxWidth: 200,
            maxHeight: 200
        },
        scrollViewHeight: {
            height: '100%', paddingTop: 0
        },
        ScrollView: {
            padding: 10
        }
    });

export const GlobalModal = StyleSheet.create({
    viewContentPosition: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.50)',
    },
    viewHead: {
        borderBottomWidth: 0.5,
        borderBottomColor: GlobalSecondColor
    },
    viewContent: {
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 40,
        flex: 1
    },
    headTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 15,
        fontSize: 16,
        color: GlobalSecondColor
    },
    buttonRight: {
        position: 'absolute',
        right: 10,
        padding: 15,
        color: GlobalSecondColor
    },
    buttonLeft: {
        zIndex: 1,
        position: 'absolute',
        left: 10,
        padding: 15
    },
    titleButton: {
        fontSize: 18,
        color: GlobalSecondColor
    }
})