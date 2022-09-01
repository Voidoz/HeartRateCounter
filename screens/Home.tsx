import React from 'react';
import {Button, Dimensions, StyleSheet, View, Text} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParams} from "../types";

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
        flex: 1,
        textAlign: 'center'
    },
    description: {
        fontSize: 20,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1,
        textAlign: 'center'
    },
    button: {
        fontSize: 10,
    }
})

export default function Home() {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Heart Rate Counter!</Text>
            <Text style={styles.description}>An easy way to use the 15-second method to record your heart rate!</Text>
            <Button
                title="Start"
                onPress={() => navigation.navigate('Running')}
            />
        </View>
    )
}