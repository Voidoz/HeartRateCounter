import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParams} from "../types";
import {Button, TouchableWithoutFeedback, View, StyleSheet, Text, Dimensions} from "react-native";
import {useContext, useEffect} from "react";
import AppContext from "../AppContext";

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
})

export default function Results() {
    const { timer, beats, resetValues, complete, addBeat } = useContext(AppContext);

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const registerBeat = () => {
        if (complete) navigation.navigate('Results');
        else addBeat();
    }

    useEffect(() => {
        resetValues()
    }, []);

    return (
        <TouchableWithoutFeedback onPress={registerBeat} style={styles.master}>
            <View style={styles.container}>
                <Text style={styles.title}>Time: {timer}</Text>
                <Text style={styles.title}>Recorded Beats: {beats}</Text>
                <Text style={styles.description}>Tap anywhere when you feel a pulse (except the reset button of course)</Text>
                <Button
                    title="Reset"
                    onPress={resetValues}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}