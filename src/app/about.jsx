import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function About () {
    return (
        <View style={styles.container}> 
        <Text style={styles.titulo}>Versos Vivos</Text>
        <Text style={styles.sub}>O App que faz a Poesia ganhar Vida!</Text>
            <Text style={styles.texto}>
               Se você curte poesia, o "Versos Vivos" é perfeito para você! Esse app é para quem ama 
               palavras e quer se inspirar. Com uma biblioteca cheia de poemas de todos os estilos, dá pra 
               descobrir obras de grandes poetas.O legal é que você pode escrever seus próprios poemas. Depois, é só 
               compartilhar com a galera e ver o que acham!Então, venha explorar e deixar as palavras fluírem!</Text>
            <Button title="Voltar" onPress={() => {router.replace("/")}} color="steelblue" style={{marginlefth: 126,}} />
        </View>
    );
}
const styles = StyleSheet.create({

    container:{
        position: "absolute",
        flex: 1,
        margin: 13,
    },
    titulo:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
    },
    sub:{
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
        textAlign: "center",
    },
    texto:{
        fontSize: 16,
        marginBottom: 20,
        marginTop: 10,
        textAlign: "justify",
        lineHeight: 25,
    }
})