import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function List() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Álbum 3</Text>
           
            <TouchableOpacity 
                onPress={() => navigation.navigate('grenade')}
                style={styles.button} >
                <Text>Ir para Grenade</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('just')}
                style={styles.button} >
                <Text>Ir para Just The Way You Are</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('lazy')}
                style={styles.button} >
                <Text>Ir para The Lazy Song</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('marry')}
                style={styles.button} >
                <Text>Ir para Marry You</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                onPress={() => navigation.navigate('blues')}
                style={styles.button} >
                <Text>Ir para Liquor Store Blues</Text>
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