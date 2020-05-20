import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


// Back-End
var timer = 15;
var beats = 0;

function reset() {
  timer = 15;
  beats = 0;
}

function addBeat() {
  beats++;
  console.log(beats);
}


// Front-End
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
      <View style={styles.container}>
        <Text style={styles.title}>Time: {timer}</Text>
        <Text style={styles.title}>Recorded Beats: {beats}</Text>
        <Text style={styles.description}>Tap anywhere when you feel a pulse (except the reset button of course)</Text>
      </View>
      <View style={styles.beatButtonLayer}>
        <Button
            style={styles.beatButton}
            title="Add Beat"
            onPress={() => addBeat()}
        />
      </View>
      <View style={styles.resetButton}>
        <Button
          title="Reset"
          onPress={() => reset()}
        />
      </View>
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
    flex: 3,
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
  beatButtonLayer: {
    position: "absolute",
  },
  beatButton: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  resetButton: {
    flex: 1,
  },
})

export default App;