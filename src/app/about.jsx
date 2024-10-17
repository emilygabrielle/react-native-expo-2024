import { router } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function About() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Versos Vivos📜</Text>
            <Text style={styles.sub}>"Bruno Mars Music: Cante, Conecte e Explore a Música!"</Text>
            <Text style={styles.texto}>
                Apresentamos o Bruno Mars Music, um aplicativo exclusivo para os fãs que desejam curtir as músicas de Bruno Mars enquanto acompanham as letras de cada canção.
                Com um design simples e eficiente, o aplicativo é ideal para quem ama cantar junto ou explorar os versos de seus hits favoritos.
            </Text>
            <Text style={styles.texto}>Funcionalidades principais:</Text>
            <Text style={styles.texto}>• Catálogo Completo de Letras: O aplicativo contém todas as letras das músicas de Bruno Mars, desde seus primeiros álbuns até os lançamentos mais recentes.</Text>
            <Text style={styles.texto}>• Biografia e Discografia: Além das letras, o aplicativo oferece uma breve biografia do artista e uma lista de todos os seus álbuns, com detalhes sobre os singles lançados.</Text>
            <Text style={styles.texto}>• Análises e Interpretações: O app também oferece análises das letras, ajudando os usuários a entender melhor as mensagens e temas abordados nas músicas.</Text>
            <Text style={styles.texto}>• Playlist Personalizadas: Os usuários podem criar playlists de suas músicas favoritas diretamente no app, facilitando a experiência de ouvir e cantar.</Text>
            <Button title="Voltar" onPress={() => { router.back() }} color="#e6b372" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        marginTop: 100,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
    },
    sub: {
        fontSize: 16,
        fontStyle: "italic",
        marginBottom: 20,
        textAlign: "center",
    },
    texto: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: "justify",
    },
});