import { useNavigation } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function List() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/me.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Count On Me</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum: </Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('count')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/moon.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Talking to the Moon</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum: </Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('monn')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/in.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Somewhere in Brooklyn</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum: </Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('somewhere')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/side.png')} // Altere com o caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>The Other Side</Text>
                    <Text style={styles.artist}>Bruno Mars</Text>
                    <Text style={styles.album}>Álbum:The Other Side</Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('side')}
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
        backgroundColor: '#000', // Cor do botão
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