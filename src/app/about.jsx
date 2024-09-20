import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function About () {
    return (
        <View style={styles.container}> 
        <Text style={styles.titulo}>Versos Vivos</Text>
        <Text style={styles.sub}>O App que faz a Poesia ganhar Vida!</Text>
            <Text style={styles.texto}>
            Olá! É um prazer te apresentar o Versos Vivos, o aplicativo ideal para todos que têm uma paixão 
            pela poesia. Aqui, você encontrará um espaço para explorar, criar e compartilhar versos com pessoas 
            que, assim como você, amam a arte das palavras.</Text>
            <Text style={styles.texto}>No Versos Vivos, você pode navegar por uma extensa coleção de poemas, que inclui tanto clássicos 
            atemporais quanto novas vozes da literatura. A busca é fácil e intuitiva, permitindo que você encontre 
            obras por tema, autor ou estilo, tudo para inspirar sua própria escrita.</Text>
            <Text style={styles.texto}>Se você se sentir inspirado, pode usar nossa ferramenta de criação para dar vida aos seus próprios poemas. Com 
            sugestões de temas ao seu dispor, escrever se torna uma experiência prazerosa e descomplicada.</Text>
            <Button title="Voltar" onPress={() => {router.replace("/")}} color="skyblue"  />
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
        padding: 6,
        
    }
})