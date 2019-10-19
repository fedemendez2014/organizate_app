import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const GlobalPrimaryColor = '#FFBC17';

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
        }
    });
