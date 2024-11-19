import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function List() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Álbum 2</Text>
           
            <TouchableOpacity 
                onPress={() => navigation.navigate('count')}
                style={styles.button} >
                <Text>Ir para Count On Me</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('moon')}
                style={styles.button} >
                <Text>Ir para Talking to the Moon</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('somewhere')}
                style={styles.button} >
                <Text>Ir para Somewhere in Brooklyn</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('side')}
                style={styles.button} >
                <Text>Ir para The Other Side</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: '#e6b372',
        padding: 10,
        borderRadius: 5,
    },
})