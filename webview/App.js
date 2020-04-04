import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from "react-native-webview";
export default class App extends Component {
  render() {
    return (
      <WebView
        style={{ marginTop: 20 }}
        source={{ uri: "https://www.wikipedia.org" }}
      />);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});