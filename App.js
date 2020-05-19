import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
	<NavigationContainer>
		<View style={styles.container}>
		<Text>Heart Rate Counter!</Text>
		<Text>An easy way to use the 15-second method to record your heart rate</Text>
		<Button
			onPress={onPressStart}
			title="Start"
			color="#841584"
			accessibilityLabel="Press this button to start!"
		/>
		</View>
	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function onPressStart()
{
	Alert.alert('Started')
}
