import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
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

function RunningScreen() {
  return (
    <View style={styles.container}>
      <Text>Running Screen</Text>
    </View>
  );
}

function ResultsScreen({ navigation }) {
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

const Stack = createStackNavigator();

function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
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
})yarn 

export default App;