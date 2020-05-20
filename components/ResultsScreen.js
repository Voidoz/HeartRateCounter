import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Dimensions } from 'react-native';

export default class ResultsScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Results Screen</Text>
          <Button
            title="Restart"
            onPress={() => this.props.navigation.navigate('Running')}
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