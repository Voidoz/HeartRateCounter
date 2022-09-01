import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParams} from "../types";
import {Button, StyleSheet, View, Text} from "react-native";
import {useContext} from "react";
import AppContext from "../AppContext";

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
        flex: 1,
        textAlign: 'center'
    }
})

export default function Results() {
    const { beats } = useContext(AppContext);

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your BPM is {beats * 4}</Text>
            <Button
                title={'Restart'}
                onPress={() => navigation.navigate('Running')}
            />
        </View>
    )
}