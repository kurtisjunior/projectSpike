import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
  // DrawerNavigator
} from 'react-navigation';
import { Drawer, Thumbnail, Button, Icon } from 'native-base';
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
  toggleDrawer = () => {
    this.drawer._root.toggle();
  };
  allNav = screen => {
    this.props.navigation.navigate(screen);
  };
  render() {
    const drawerStyles = {
      drawer: {
        // shadowColor: '#000000',
        // shadowOpacity: 0.8,
        // shadowRadius: 3,
        // opacity: 0,
        backgroundColor: 'transparent',
        height: 100
      },
      main: {
        paddingLeft: 3,
        backgroundColor: 'transparent'
      },
      drawerOverlay: { opacity: 0, backgroundColor: 'transparent' },
      mainOverlay: { opacity: 0, backgroundColor: 'transparent' }
    };
    //Check here for styles: https://github.com/root-two/react-native-drawer
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red'
          }}
        >
          <Drawer
            type="overlay"
            // openDrawerOffset={0.25}
            styles={drawerStyles}
            side="top"
            // tweenHandler={Drawer.tweenPresets.parallax}
            ref={ref => {
              this.drawer = ref;
            }}
            content={
              <Sidebar
                navigator={this.navigator}
                allNav={this.allNav}
                onPress={this.closeDrawer}
                closer={this.closeDrawer}
              />
            }
            onClose={() => this.closeDrawer()}
          >
            <Button
              iconLeft
              transparent
              onPress={() => this.toggleDrawer()}
              width={50}
            >
              <Icon type="FontAwesome" name="bars" />
            </Button>
            <Text>Home Screen</Text>
          </Drawer>
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
