import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Heart Rate Counter!</Text>
          <Text style={styles.description}>An easy way to use the 15-second method to record your heart rate!</Text>
          <Button
            title="Start"
            onPress={() => navigation.navigate('Running')}
            style={styles.button}
          />
        </View>
      );
  }
}