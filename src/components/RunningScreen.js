import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { withGlobalContext } from '../GlobalContext';

class RunningScreen extends Component {
  registerBeat = () => {
    if (this.props.global.complete == true) {
      this.props.global.resetValues()
      this.props.navigation.navigate('Results')
    } else {
      this.props.global.addBeat()
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.registerBeat()} style={styles.master}>
        <View style={styles.container}>
          <Text style={styles.title}>Time: {this.props.global.timer}</Text>
          <Text style={styles.title}>Recorded Beats: {this.props.global.beats}</Text>
          <Text style={styles.description}>Tap anywhere when you feel a pulse (except the reset button of course)</Text>
          <Button
            title="Reset"
            onPress={() => this.props.global.resetValues()}
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

export default withGlobalContext(RunningScreen);