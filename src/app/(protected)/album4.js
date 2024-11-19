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
                onPress={() => navigation.navigate('gorilla')}
                style={styles.button} >
                <Text>Ir para Gorilla</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('treasure')}
                style={styles.button} >
                <Text>Ir para Treasure</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('moonshine')}
                style={styles.button} >
                <Text>Ir para Moonshine</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('man')}
                style={styles.button} >
                <Text>Ir para When I Was Your Man</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('natalie')}
                style={styles.button} >
                <Text>Ir para Natalie</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('show')}
                style={styles.button} >
                <Text>Ir para Show Me</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('money')}
                style={styles.button} >
                <Text>Ir para Money Make Her Smile</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('if')}
                style={styles.button} >
                <Text>Ir para If I Knew</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('old')}
                style={styles.button} >
                <Text>Ir para Old & Crazy</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('heavenfeat')}
                style={styles.button} >
                <Text>Ir para Locked Out Of Heaven</Text>
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