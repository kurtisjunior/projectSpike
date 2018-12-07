import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

class Sidebar extends Component {
  render() {
    return (
      <View>
        <Text>Sidebar</Text>
        <Button title="Map" onPress={() => this.props.allNav('Map')} />
        <Button title="Inbox" onPress={() => this.props.allNav('Inbox')} />
        <Button title="Logout" onPress={() => this.props.allNav('Logout')} />
      </View>
    );
  }
}

export default Sidebar;
