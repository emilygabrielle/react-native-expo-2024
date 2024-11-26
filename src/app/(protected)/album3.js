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
                    source={require('../../assets/images/grenade.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Grenade</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2010</Text>
                    <Text style={styles.album}>Álbum: Doo-Wops & Hooligans</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(0)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 0 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 0 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>A música 'Grenade', interpretada pelo talentoso Bruno Mars, é uma poderosa balada pop que explora os temas do amor não correspondido e do sacrifício extremo em nome desse sentimento. Através de uma letra carregada de emoção e metáforas intensas, Mars descreve a disposição de fazer qualquer coisa pela pessoa amada, mesmo que essa dedicação não seja recíproco.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('grenade')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: Just The Way You Are */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/olhos.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Just The Way You Are</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2010</Text>
                    <Text style={styles.album}>Álbum: Doo-Wops & Hooligans</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(1)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 1 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 1 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>Através de uma linguagem simples, mas profundamente afetuosa, Mars expressa sua admiração e amor incondicional pela pessoa amada, enfatizando que ela é perfeita em sua essência e não necessita de qualquer mudança para se adequar a padrões de beleza ou expectativas alheias.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('just')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: The Lazy Song */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/the.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>The Lazy Song</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2010</Text>
                    <Text style={styles.album}>Álbum: Doo-Wops & Hooligans</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(2)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 2 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 2 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>A canção se tornou um sucesso instantâneo, ressoando com ouvintes ao redor do mundo que se identificaram com o desejo de ter um dia de descanso absoluto. A letra descreve um dia em que o narrador decide não fazer absolutamente nada além de ficar deitado na cama, ignorar chamadas telefônicas e simplesmente relaxar em casa.</Text>
                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('lazy')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: Marry You */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/marry.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Marry You</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2010</Text>
                    <Text style={styles.album}>Álbum: Doo-Wops & Hooligans</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(3)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 3 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 3 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>A letra da música sugere uma proposta de casamento impulsiva, feita em um momento de euforia e diversão. A frase 'We're looking for something dumb to do' (Estamos procurando algo bobo para fazer) estabelece o tom da música como algo leve e espontâneo, longe de ser uma decisão séria e ponderada.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('marry')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Música: Liquor Store Blues */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/blues.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Liquor Store Blues</Text>
                    <Text style={styles.artist}>Ano de lançamento: 2010</Text>
                    <Text style={styles.album}>Álbum: Doo-Wops & Hooligans</Text>

                    <TouchableOpacity 
                        onPress={() => toggleExpansion(4)} // Altera para expandir a barra
                        style={styles.expandButton}>
                        <FontAwesome name={expandedIndex === 4 ? "angle-up" : "angle-down"} size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Barra expandível com mais informações */}
                    {expandedIndex === 4 && (
                        <Animated.View style={styles.expandedInfo}>
                            <Text style={styles.expandedText}>A letra descreve uma pessoa que se encontra em um estado de estagnação e desesperança, recorrendo ao álcool e à maconha como formas de escapismo. A referência à loja de bebidas e a sensação de álcool saindo pelos poros ilustram uma tentativa de anestesiar as dores e frustrações da vida.</Text>
                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('blues')}
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