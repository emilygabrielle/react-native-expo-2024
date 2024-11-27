import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Animated } from "react-native";
import { FontAwesome } from '@expo/vector-icons';  // Ícone de seta

export default function List() {
    const navigation = useNavigation();
    const [expandedIndex, setExpandedIndex] = useState(null); // Índice do item expandido

    // Função para expandir ou contrair a barra
    const toggleExpansion = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null); // Fecha se já estiver expandido
        } else {
            setExpandedIndex(index); // Expande se não estiver expandido
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Música: Grenade */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/magic.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>24K Magic</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2016 </Text>
                    <Text style={styles.album}>Álbum: 24K Magic</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(0)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 0 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 0 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}> A letra da música é uma celebração da autoconfiança, do prazer e do luxo, com Mars se apresentando como um personagem carismático e cheio de estilo, pronto para dominar a festa com sua presença magnética.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('24kmagic')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: Just The Way You Are */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/that.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>That's What I Like</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2016 </Text>
                    <Text style={styles.album}>Álbum: 24K Magic</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(1)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 1 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 1 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>A letra da música é uma narrativa onde Mars oferece a uma mulher uma experiência repleta de glamour e indulgência. Ele menciona locais como Manhattan e Miami, sugerindo uma vida de viagens e conforto. A repetição do refrão 'That's what I like' enfatiza o gosto pessoal do cantor por essas experiências luxuosas, ao mesmo tempo em que sugere que a mulher também terá prazer nessas indulgências. </Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('that')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: The Lazy Song */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/versace.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>Versace On The Floor</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2016</Text>
                    <Text style={styles.album}>Álbum: 24K Magic</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(2)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 2 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 2 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>A referência à grife Versace não é apenas um símbolo de luxo e sofisticação, mas também serve como metáfora para o ato de se despir das inibições e revelar a verdadeira essência diante do ser amado. A repetição do verso 'take it off for me' reforça o convite para que a parceira se liberte das barreiras físicas e emocionais, permitindo que a conexão entre eles se aprofunde.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('versace')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: Marry You */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/too.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>Too Good To Say Goodbye</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2016</Text>
                    <Text style={styles.album}>Álbum: 24K Magic</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(3)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 3 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 3 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}> A letra revela a dor de um homem que reconhece seus erros e implora por outra chance com a pessoa que ele considera mais do que uma parceira amorosa, mas também sua melhor amiga. Através de uma narrativa sincera, o protagonista da canção admite que poderia ter tratado sua amada melhor e lamenta tê-la deixado escapar, o que resultou na perda de seu 'felizes para sempre'.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('too')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/apt.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>APT</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2024</Text>
                    <Text style={styles.album}>Cantores: Brunos Mars e Rosé </Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(4)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 4 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 4 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}> A repetição da palavra '아파트' ('apartamento') não é apenas um refrão cativante, mas também uma alusão ao jogo de bebida coreano que leva o mesmo nome. Neste jogo, as pessoas empilham as mãos como se fossem andares de um prédio, e a pessoa que coloca a mão no número escolhido deve beber. Essa repetição cria uma atmosfera de diversão e camaradagem, típica de uma noite de festa coreana.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('apt')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

         
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        padding: 20,
    },
    musicItem: {
        flexDirection: 'row', // Coloca a imagem à esquerda e os detalhes à direita
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        elevation: 3,
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
    },
    musicDetails: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 15,
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
    expandButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    expandedInfo: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    expandedText: {
        fontSize: 14,
        color: '#666',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#000',
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