import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Dimensions } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Heart Rate Counter!</Text>
          <Text style={styles.description}>An easy way to use the 15-second method to record your heart rate!</Text>
          <Button
            title="Start"
            onPress={() => this.props.navigation.navigate('Running')}
            style={styles.button}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  master: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex: 1
  },
  description: {
    fontSize: 20,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex: 1
  },
  button: {
    fontSize: 10,
  },
})