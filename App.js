import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Map"
          onPress={() => this.props.navigation.navigate("Map")}
        />
        <Button
          title="Profile"
          //we call the navigate function (on the navigation prop) with the name of the route that we'd like to move the user to.
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Map Screen</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
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
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

//consider performance optimisations for live phone app
