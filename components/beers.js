import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
// import {Button} from 'react-native-elements';

export default class Beers extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Details"
          onPress={() => navigate('BeerDetails', {name: 'Kingfisher'})}/>
      </View>
    );
  }
} 