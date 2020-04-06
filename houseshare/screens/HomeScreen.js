import React from 'react';
import { StyleSheet, Image, TouchableHighlight, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.topBox}
                    onPress={() => navigate('HomeListScreen')}>
                    <Image
                        style={styles.homeBanner}
                        source={require('../assets/house.png')}
                    />
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                    onPress={() => navigate('AddNewProperty')}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Add New Property</Text>
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
    },
    button: {
        flex: 1,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'stretch',
        justifyContent: 'center',
        margin: 10
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    }
});