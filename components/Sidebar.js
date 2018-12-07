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
        <Button
          title="Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
        <Text>Even More Text</Text>
        <Text>More Text</Text>
      </View>
    );
  }
}

export default Sidebar;
