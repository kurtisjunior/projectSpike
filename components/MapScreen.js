import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import * as Expo from 'expo';

class MapScreen extends Component {
  state = {
    location: null
  };
  getLocation = async () => {
    console.log('working!');
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    console.log('status', status);
    if (status !== 'granted') {
      console.log('Location not granted');
    } else {
      console.log('location prior');
      let location = await Expo.Location.getCurrentPositionAsync({});
      console.log('LOCATION', location);
      this.setState({
        location: location
      });
    }
  };

  render() {
    console.log('HERE! - location', this.state.location);
    return (
      <>
        <Expo.MapView
          style={{ flex: 1 }}
          provider={Expo.MapView.PROVIDER_GOOGLE}
        />
      </>
    );
  }

  componentDidMount() {
    this.getLocation();
  }
}

export default MapScreen;
