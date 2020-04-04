import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from
  'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { storedText: '', inputBoxText: '' }
  }
  async componentDidMount() {
    this.setState({ storedText: await this.retrieveData() });
  }
  onPressSave = async () => {
    try {
      await AsyncStorage.setItem('@AsyncStorageExample:someKey', this.
        state.inputBoxText);
      this.setState({ storedText: this.state.inputBoxText });
      this.setState({
        inputBoxText: ''
      })
    } catch (error) {
      console.log("Error in saving data");
    }
  }

  onPressClear = async () => {
    try {
      await AsyncStorage.clear()
      alert('Storage successfully cleared!')
      this.setState({ storedText: await this.retrieveData() });
    } catch (e) {
      alert('Failed to clear the async storage.')
    }
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@AsyncStorageExample:someKey');
      return value;
    } catch (error) {
      console.log("Error in Fetching Data")
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textField}
          placeholder="Type here!"
          value={this.state.inputBoxText}
          onChangeText={(text) => this.setState({ inputBoxText: text })}
        />
        <Button
          onPress={this.onPressSave}
          title="Save"
          color="blue"
          accessibilityLabel="Click will save to database"
        />
        <Text style={styles.header}>
          Text from local Storage:
          </Text>
        <Text style={styles.text}>
          {this.state.storedText}
        </Text>
        <Button
          onPress={this.onPressClear}
          title="Clear"
          color="red"
          accessibilityLabel="Click will clear database"
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    paddingTop: 10,
  },
  textField: {
    height: 40,
    width: 300,
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
  }
});