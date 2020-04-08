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