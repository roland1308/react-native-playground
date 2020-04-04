import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
export default class App extends React.Component {
  onPressButton1() {
    Alert.alert(
      'Alert Title',
      'Alert Message',
    )
  }
  onPressButton2() {
    Alert.alert(
      'Alert Title',
      'Alert Message with Buttons',
      [
        { text: 'Button 1', onPress: () => console.log('Button 1 pressed') },
        { text: 'Button 2', onPress: () => console.log('Button 2 pressed') },
        {
          text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style:
            'cancel'
        },
      ],
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressButton1}
          title="Button 1"
          color="#841584"
          accessibilityLabel="Learn more about Button 1"
        />
        <Button
          onPress={this.onPressButton2}
          title="Button 2"
          color="#841584"
          accessibilityLabel="Learn more about Button 2"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});