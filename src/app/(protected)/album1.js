import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function List() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Álbum 1</Text>
           
            <TouchableOpacity 
                onPress={() => navigation.navigate('itwillrain')}
                style={styles.button} >
                <Text>Ir para it will rain</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('24kmagic')}
                style={styles.button} >
                <Text>Ir para 24K magic</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('chunky')}
                style={styles.button} >
                <Text>Ir para Chunky</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('perm')}
                style={styles.button} >
                <Text>Ir para Perm</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('that')}
                style={styles.button} >
                <Text>Ir para That's what  i like</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('versace')}
                style={styles.button} >
                <Text>Ir para Versace on the floor</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('straight')}
                style={styles.button} >
                <Text>Ir para Straight Up & Down</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('calling')}
                style={styles.button} >
                <Text>Ir para Calling All My Lovelies</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('finesse')}
                style={styles.button} >
                <Text>Ir para Finesse</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('too')}
                style={styles.button} >
                <Text>Ir para Too Good To Say Goodbye</Text>
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