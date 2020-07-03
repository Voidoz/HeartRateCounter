import React, { Component, useContext } from 'react';
import { Button, View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
// ! import GLOBAL from '../global.js'

const redux = require('../redux.js')

// ! import Timer from '../contexts/Timer'
// ! import Beats from '../contexts/Beats'


export default class RunningScreen extends Component {
  /*constructor(props) {
    super(props);
      GLOBAL.timer = this;
      GLOBAL.beats = this;
  }*/
    // ! const [timer, setTimer] = useContext({Timer});
    // ! const [beats, setBeats] = useContext({Beats});
  render() {
    return (
        <TouchableWithoutFeedback onPress={null} style={styles.master}>
          <View style={styles.container}>
            <Text style={styles.title}>Time: {redux.Timer.subscribe(() => redux.Timer.getState)}</Text>
            <Text style={styles.title}>Recorded Beats: {redux.Beats.subscribe(() => redux.Beats.getState)}</Text>
            <Text style={styles.description}>Tap anywhere when you feel a pulse (except the reset button of course)</Text>
            <Button
              title="Reset"
              onPress={null}
            />
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }

/*function addBeat() {
  GLOBAL.timer.setState({
    var: GLOBAL.timer++
  })

  GLOBAL.beats.setState({
    var: GLOBAL.beats++
  })
};*/

/*function reset() {
  GLOBAL.timer.setState({
    var: 15
  })

  GLOBAL.beats.setState({
    var: 0
  })
}*/

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