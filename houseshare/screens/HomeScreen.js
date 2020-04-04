import React from 'react';
import { StyleSheet, Image, TouchableHighlight, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.topBox} onPress={() =>
                    navigate('HomeListScreen')}>
                    <Image
                        style={styles.homeBanner}
                        source={require('../assets/house.png')}
                    />
                </TouchableHighlight>
                <View style={styles.bottomBox} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topBox: {
        flex: 1,
        backgroundColor: '#C0C0C0'
    },
    bottomBox: {
        flex: 2,
        backgroundColor: '#fff'
    },
    homeBanner: {
        bottom: 0,
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    }
});