import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class RunningScreen extends Component {
  render() {
    return (
        <TouchableWithoutFeedback onPress={() => addBeat()} style={styles.master}>
          <View style={styles.container}>
            <Text style={styles.title}>Time: {timer}</Text>
            <Text style={styles.title}>Recorded Beats: {beats}</Text>
            <Text style={styles.description}>Tap anywhere when you feel a pulse (except the reset button of course)</Text>
            <Button
              title="Reset"
              onPress={() => reset()}
            />
          </View>
        </TouchableWithoutFeedback>
      );
  }
}