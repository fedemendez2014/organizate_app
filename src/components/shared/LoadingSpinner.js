import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class LoadingSpinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0
        }
        this.setPosition();
    }

    setPosition = () => {
        setInterval(async () => {
            if (360 === this.state.position) {
                await this.setState({ position: 45 });
            }
            else {
                await this.setState({ position: this.state.position + 45 });
            }
        }, 250);
    }

    render() {
        return (
            this.props.visible ?
                <View style={styles.Content}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Image source={require('../../../assets/spinner/test.png')}
                            style={{ transform: [{ rotate: `${this.state.position}deg` }], marginRight: 1 }} />
                        <Image source={require('../../../assets/spinner/text.png')} />
                    </View>
                </View> : null
        )
    }
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
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    }
});