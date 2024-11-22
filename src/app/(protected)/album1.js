import { useNavigation } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function List() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Música: 24K Magic */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/magic.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>24K Magic</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum: </Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('24kmagic')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: That's What I Like */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/that.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>That's What I Like</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum:</Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('that')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: Versace On The Floor */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/versace.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Versace On The Floor</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum: </Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('versace')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: When I Was Your Man */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/foto.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>When I Was Your Man</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum:</Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('man')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: Die With A Smile */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/foto.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Die With A Smile</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum:</Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('die')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f3f3f3', // Cor de fundo
        padding: 20,
    },
    musicItem: {
        flexDirection: 'row', // Coloca a imagem à esquerda e as informações à direita
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        elevation: 3, // Sombra no cartão
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        width: '100%',
    },
    albumImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 15,

    },
    musicDetails: {
        justifyContent: 'center',
        flex: 1,
    },
    musicTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    artist: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    album: {
        fontSize: 14,
        color: '#999',
    },
    button: {
        marginTop: 15,
        backgroundColor: '#e6b372', // Cor do botão
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});