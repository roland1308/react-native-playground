import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.3230,
        longitude: -122.0322,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922,
      },
      coordinate: {
        latitude: 37.3230,
        longitude: -122.0322,
      },
    };
  }

  componentDidMount() {
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
    const { latitude, longitude } = location.coords
    this.setState({
      coordinate: { latitude, longitude },
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    });
    console.log(this.state.region)
  };


  render() {
    return (
      <MapView
        style={styles.container}
        provider="google"
        showsUserLocation={true}
        showsUserButton={true}
        region={this.state.region}
      >
        <Marker coordinate={this.state.coordinate} />
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});