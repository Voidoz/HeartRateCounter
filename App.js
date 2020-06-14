import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './components/HomeScreen';
import RunningScreen from './components/RunningScreen';
import ResultsScreen from './components/ResultsScreen';


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Overview' }}
          />
          <Stack.Screen name="Running" component={RunningScreen} />
          <Stack.Screen name="Results" component={ResultsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();

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