import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Expo from 'expo';
export default class App extends Component {
  state = {
    location: null,
    oldTrafford: null,
    Arsenal: null,
    where: null
  };
  getlocation = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== 'granted') {
      console.error('Location denied');
      return;
    }
    let location = await Expo.Location.getCurrentPositionAsync({});
    let oldTrafford = (await Expo.Location.geocodeAsync(
      'Sir Matt Busby Way'
    ))[0];
    let Arsenal = (await Expo.Location.geocodeAsync(
      ' Hornsey Rd, London N7 7AJ'
    ))[0];
    let where = (await Expo.Location.reverseGeocodeAsync(location.coords))[0];
    this.setState({
      location: location,
      oldTrafford: oldTrafford,
      Arsenal: Arsenal,
      where: where
    });
  };
  render() {
    if (!this.state.location) {
      return <View />;
    }
    return (
      <Expo.MapView
        style={{ flex: 1 }}
        provider={Expo.MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Expo.MapView.Marker
          coordinate={this.state.location.coords}
          title="you are here: "
          description={this.state.where.name}
          pinColor="blue"
        />
        <Expo.MapView.Marker
          coordinate={this.state.oldTrafford}
          title="theatre of garbage"
          pinColor="red"
        />
        <Expo.MapView.Marker
          coordinate={this.state.Arsenal}
          title="theatre of invicibles"
          pinColor="gold"
        />
      </Expo.MapView>
    );
  }
  componentDidMount() {
    this.getlocation();
  }
}
