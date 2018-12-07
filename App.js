import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Drawer from 'react-native-drawer';

import Expo from 'expo';

const styles = StyleSheet.create({
  allScreens: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  }
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
        <Button
          title="Profile"
          //we call the navigate function (on the navigation prop) with the name of the route that we'd like to move the user to.
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button title="Tab Navigation" onPress={this.onButtonPress} />
      </View>
    );
  }
}

class MapScreen extends Component {
  getLocation = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Location not granted');
      return;
    }
    let location = await Expo.Location.getCurrentPositionAsync({});
    console.log(location);
  };

  render() {
    return (
      <Expo.MapView
        style={{ flex: 1 }}
        provider={Expo.MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }

  componentDidMount() {
    this.getLocation();
  }
}

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.allScreens}>
        <Text>Profile Screen</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

//function that returns react component. It takes a route configuration object. The only required configuration for a route is the screen component.
//this.props.navigation: the navigation prop is passed in to every screen component in stack navigator
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Map: {
      screen: MapScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const ControlPanel = props => {
  return <Text>Hiya!</Text>;
};

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    return <AppContainer />;
    {
      /* <Drawer ref={ref => (this._drawer = ref)} content={<ControlPanel />}>
        <MyMainView />
      </Drawer> */
    }
  }
}

//consider performance optimisations for live phone app
