import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Drawer, Button, Icon } from 'native-base';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

class Sidebar extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: 'white',
          opacity: 0.8,
          width: 150,
          flex: 0.5
        }}
      >
        <Content>
          <Button
            iconLeft
            transparent
            primary
            style={{ height: 50, width: 50, left: 3 }}
            onPress={() => this.props.closer()}
          >
            <Icon type="FontAwesome" name="bars" />
          </Button>

          <Button
            iconLeft
            transparent
            primary
            title="Map"
            onPress={() => this.props.allNav('Map')}
          >
            <Icon type="FontAwesome" name="map" />
            <Text style={{ left: 5, color: 'darkblue' }}>Map</Text>
          </Button>
          <Button
            iconLeft
            transparent
            primary
            title="Inbox"
            onPress={() => this.props.allNav('Inbox')}
          >
            <Icon type="FontAwesome" name="envelope" />
            <Text style={{ left: 5, color: 'darkblue' }}>Inbox</Text>
          </Button>
          <Button
            iconLeft
            transparent
            primary
            title="Logout"
            onPress={() => this.props.allNav('Logout')}
          >
            <Icon type="FontAwesome" name="times" />
            <Text style={{ left: 5, color: 'darkblue' }}>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Sidebar;
