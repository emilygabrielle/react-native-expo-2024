import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function List() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Álbum 4</Text>
           
            <TouchableOpacity 
                onPress={() => navigation.navigate('girls')}
                style={styles.button} >
                <Text>Ir para Young Girls</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('heaven')}
                style={styles.button} >
                <Text>Ir para Locked Out Of Heaven</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('treasure')}
                style={styles.button} >
                <Text>Ir para Treasure</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('man')}
                style={styles.button} >
                <Text>Ir para When I Was Your Man</Text>
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