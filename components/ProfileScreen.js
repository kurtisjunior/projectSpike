import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

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

export default ProfileScreen;
