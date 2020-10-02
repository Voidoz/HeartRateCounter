import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Dimensions } from 'react-native';
import { withGlobalContext } from '../GlobalContext';

class ResultsScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Your BPM is {this.props.global.beats * 4}</Text>
          <Button
            title="Restart"
            onPress={() => this.props.navigation.navigate('Running')}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
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
  }
})

export default withGlobalContext(ResultsScreen);