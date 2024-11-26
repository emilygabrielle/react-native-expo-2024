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
                    source={require('../../assets/images/girls.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>Young Girls</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2012 </Text>
                    <Text style={styles.album}>Álbum: Unorthodox Jukebox</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(0)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 0 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 0 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}> A letra descreve um narrador que gasta seu dinheiro em luxos superficiais, como um carro caro, para impressionar mulheres jovens e atraentes. Essas 'bright eyed honeys', como são chamadas na canção, representam uma espécie de vício para o protagonista, que admite estar 'addicted' e não entender o porquê de sua constante busca por essa vida de prazeres efêmeros. </Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('girls')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/heaven.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>Locked Out Of Heaven</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2012</Text>
                    <Text style={styles.album}>Álbum: Unorthodox Jukebox</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(1)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 1 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 1 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>A letra revela uma transformação pessoal, onde o eu-lírico, que antes não acreditava no amor ou em milagres, encontra uma experiência quase espiritual ao se envolver com a pessoa amada. Essa relação é descrita como algo que renova e revigora, comparando a intimidade com um renascimento.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('heaven')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: The Lazy Song */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/smile.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>Treasure</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2012</Text>
                    <Text style={styles.album}>Álbum: Unorthodox Jukebox</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(2)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 2 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 2 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>Com uma sonoridade que remete ao funk e ao soul dos anos 70 e 80, a canção é marcada por uma energia contagiante e letras que exaltam a autoestima da pessoa a quem é dedicada. A escolha de palavras como 'treasure' (tesouro) e 'golden star' (estrela dourada) não é aleatória; elas servem para enfatizar o quão preciosa a pessoa amada é para o cantor, colocando-a em um pedestal de valor inestimável.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('treasure')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/man.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>  When I Was Your Man</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2012</Text>
                    <Text style={styles.album}>Álbum: Unorthodox Jukebox</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(3)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 3 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 3 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>A letra reflete a dor de um homem que reconhece os erros cometidos em um relacionamento passado e lamenta não ter valorizado sua parceira como ela merecia. A música é marcada por uma melodia suave ao piano, que acompanha a voz expressiva de Mars, transmitindo uma sensação de intimidade e vulnerabilidade.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('man')}
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