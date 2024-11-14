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