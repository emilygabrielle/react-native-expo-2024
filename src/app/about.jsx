import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function About() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
             <TouchableOpacity onPress={() => { router.back() }} style={styles.arrowContainer}>
                <Icon name="arrow-back" size={30} color="#000" />
            </TouchableOpacity>
          
            <Text style={styles.titulo}>Bruno Mars Music</Text>
            <Text style={styles.sub}>"Cante, Conecte e Explore a Música!"</Text> 
            
             <Image
                source={require("../assets/videos/pato.gif")} // Caminho do seu GIF
                style={styles.image}
            />
            
            <Text style={styles.texto}>
                Apresentamos o Bruno Mars Music, um aplicativo exclusivo para os fãs que desejam curtir as músicas de Bruno Mars enquanto acompanham as letras de cada canção.
                Com um design simples e eficiente, o aplicativo é ideal para quem ama cantar junto ou explorar os versos de seus hits favoritos.
            </Text>
            <Text style={styles.texto}>Funcionalidades principais:</Text>
            <Text style={styles.texto}>• Catálogo Completo de Letras: O aplicativo contém as letras das músicas de Bruno Mars.</Text>
            <Text style={styles.texto}>• Biografia e Discografia: Além das letras, o aplicativo oferece uma breve biografia do artista.</Text>
            <Text style={styles.texto}>• Análises e Interpretações: O app também oferece análises das letras, ajudando os usuários a entender melhor as mensagens e temas abordados nas músicas.</Text>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        marginTop: 20,
        backgroundColor: "#fff",
    },
    image: {
        width: '50%',
        height: 150,  // Ajuste o tamanho conforme necessário
        marginLeft: 70,
    },
    titulo: {
        fontSize: 30,
        fontWeight: "regular",
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center",
    },
    sub: {
        fontSize: 14,
        fontStyle: "italic",
        marginBottom: 20,
        textAlign: "center",
    },
    texto: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: "justify",
        padding: 5,
        lineHeight: 25,
    },
    button: {
        width: 200,
        height: 40,
        fontFamily: "bold",
        backgroundColor: "black",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: 75,
    },
    arrowContainer: {
        position: "relative",
        top: 10,
        left: 10,
        zIndex: 1,
    },
});
