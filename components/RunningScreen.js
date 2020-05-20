import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import App from '../App.js'


export default class RunningScreen extends Component {
  render() {
    return (
        <TouchableWithoutFeedback onPress={App.addBeat} style={styles.master}>
          <View style={styles.container}>
            <Text style={styles.title}>Time: {App.state.timer}</Text>
            <Text style={styles.title}>Recorded Beats: {App.state.beats}</Text>
            <Text style={styles.description}>Tap anywhere when you feel a pulse (except the reset button of course)</Text>
            <Button
              title="Reset"
              onPress={App.reset}
            />
          </View>
        </TouchableWithoutFeedback>
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