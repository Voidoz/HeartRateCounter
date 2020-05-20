import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ResultsScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Results Screen</Text>
          <Button
            title="Restart"
            onPress={() => navigation.navigate('Running')}
          />
        </View>
      );
  }
}