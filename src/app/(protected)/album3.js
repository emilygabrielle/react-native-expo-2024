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
                onPress={() => navigation.navigate('our')}
                style={styles.button} >
                <Text>Ir para Our First Time</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('baby')}
                style={styles.button} >
                <Text>Ir para Runaway Baby</Text>
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
                onPress={() => navigation.navigate('moon')}
                style={styles.button} >
                <Text>Ir para Talking To The Moon</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('blues')}
                style={styles.button} >
                <Text>Ir para Liquor Store Blues</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => navigation.navigate('count')}
                style={styles.button} >
                <Text>Ir para Count On Me </Text>
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