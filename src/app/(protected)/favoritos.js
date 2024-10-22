import { Text, View, Image, StyleSheet } from "react-native";

export default function FavoriteMusic() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Música Favorita</Text>
            <Image
                source={{ uri: 'https://link-para-imagem-da-capa.com/capa.jpg' }}
                style={styles.coverImage}
            />
            <Text style={styles.songTitle}>Título da Música</Text>
            <Text style={styles.artist}>Artista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    coverImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    songTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    artist: {
        fontSize: 16,
        color: '#666',
    },
});