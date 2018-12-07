import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Drawer from 'react-native-drawer';

<<<<<<< HEAD
import Expo from 'expo';
=======
import * as Expo from "expo";
>>>>>>> 00d14a41b4369d24d9f24071087891e3f12ae5d0

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
  state = {
    location: null
  };
  getLocation = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Location not granted');
      return;
    } else {
      let location = await Expo.Location.getCurrentPositionAsync({});
      // console.log(location);
      this.setState({
        location: location
      });
    }
  };

  render() {
    //return a blank screen before the location loads
    if (!this.state.location) {
      return <View />;
    }
    return (
      <>
        <Text>
          {console.log(this.state.location.coords.latitudeDelta, "fired")}
        </Text>
        <Expo.MapView
          style={{ flex: 1 }}
          provider={Expo.MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: this.state.location.coords.latitudeDelta,
            longitudeDelta: this.state.location.coords.longitudeDelta
          }}
        />
      </>
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
