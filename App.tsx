import {AppProvider} from "./AppContext";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Running from './screens/Running';
import Results from './screens/Results';

const Stack = createStackNavigator();

export default function App() {
    return (
        <AppProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen name={'Home'} component={Home}/>
                    <Stack.Screen name={'Running'} component={Running}/>
                    <Stack.Screen name={'Results'} component={Results}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AppProvider>
    );
}