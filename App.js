import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import { Drawer } from 'native-base';
import MapScreen from './components/MapScreen';
import Sidebar from './components/Sidebar';
import LogoutScreen from './components/LogoutScreen';
import InboxScreen from './components/InboxScreen';

class HomeScreen extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  allNav = screen => {
    this.props.navigation.navigate(screen);
  };
  render() {
    return (
      <>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={
            <Sidebar
              navigator={this.navigator}
              allNav={this.allNav}
              onPress={this.closeDrawer}
            />
          }
          onClose={() => this.closeDrawer()}
        >
          <Button title="menu" onPress={() => this.openDrawer()}>
            Menu
          </Button>
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
    Inbox: {
      screen: InboxScreen
    },
    Logout: {
      screen: LogoutScreen
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
