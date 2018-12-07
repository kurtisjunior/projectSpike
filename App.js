import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import * as Expo from 'expo';
import { Drawer } from 'native-base';
import ProfileScreen from './components/ProfileScreen';
import MapScreen from './components/MapScreen';
import Sidebar from './components/Sidebar';

class HomeScreen extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={
            <Sidebar navigator={this.navigator} onPress={this.closeDrawer} />
          }
          onClose={() => this.closeDrawer()}
        >
          <Text onPress={() => this.openDrawer()}>Hello</Text>
        </Drawer>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
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
        </View>
      </>
    );
  }
}

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

//function that returns react component. It takes a route configuration object. The only required configuration for a route is the screen component.
//this.props.navigation: the navigation prop is passed in to every screen component in stack navigator

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

//consider performance optimisations for live phone app
