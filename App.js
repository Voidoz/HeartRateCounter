import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/components/HomeScreen';
import RunningScreen from './src/components/RunningScreen';
import ResultsScreen from './src/components/ResultsScreen';
import { GlobalContextProvider } from './src/GlobalContext';

class App extends Component {
  render() {
    return (
      <GlobalContextProvider>
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
      </GlobalContextProvider>
    );
  }
}

const Stack = createStackNavigator();

export default App;