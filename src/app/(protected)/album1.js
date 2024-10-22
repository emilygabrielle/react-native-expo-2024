import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function List() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Álbum 1</Text>
            <Button

                title="Ir para It Rain"
                onPress={() => navigation.navigate('itwillrain')}
                style={StyleSheet.button} 
            
            />
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