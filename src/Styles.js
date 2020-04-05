import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const GlobalPrimaryColor = '#f1a803';
export const GlobalSecondColor = '#D30000';

export const GlobalStyles = StyleSheet.create(
    {
        ViewBackgroundOpacity:
        {
            backgroundColor: 'rgba(250, 250, 250, 0.75)',
            width: '100%',
            marginTop: 20,
            padding: 15
        },
        textError: {
            color: 'red',
            textAlign: 'center'
        },
        ViewBackground: {
            backgroundColor: '#E6E9F0',
            flex: 1,
            padding: 10
        }
    });