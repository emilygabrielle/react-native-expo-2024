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
                    source={require('../../assets/images/me.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                <Text style={styles.musicTitle}>Count On Me</Text>
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
                            <Text style={styles.expandedText}>A música captura a essência de uma verdadeira amizade, em que amor, cuidado e presença inabalável definem o relacionamento. No primeiro verso, Mars canta 'Se algum dia você se encontrar preso no meio do mar, eu velejarei pelo mundo para te encontrar', uma declaração de compromisso que mostra até onde ele está disposto a ir para estar ao lado de um amigo em necessidade. A imagem de estar perdido no mar evoca sentimentos de isolamento e incerteza, mas a promessa de 'velejar pelo mundo' destaca a força desse vínculo, assegurando que ninguém está realmente sozinho.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('count')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Música: Just The Way You Are */}
            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/moon.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Talking to the Moon</Text>
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
                            <Text style={styles.expandedText}> A letra da canção revela a dor de alguém que perdeu um ente querido e agora se encontra isolado, tentando de alguma forma restabelecer essa conexão perdida. A imagem de falar com a lua é uma metáfora para o ato de tentar alcançar alguém que está distante, seja física ou emocionalmente, e a incerteza de ser ouvido ou correspondido.</Text>

                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('moon')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/in.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>Somewhere in Brooklyn</Text>
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
                            <Text style={styles.expandedText}>A letra fala de um encontro casual em uma estação de trem, onde a conexão entre os dois é instantânea, mas interrompida pela chegada de um trem. A mulher é descrita de forma vívida, com detalhes como 'coberta de couro e ouro' e 'tênis Nike vermelhos', criando uma imagem marcante na mente do ouvinte.</Text>
                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('somewhere')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Ouvir Música</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.musicItem}>
                <Image 
                    source={require('../../assets/images/side.png')} // Substitua pelo caminho da sua imagem
                    style={styles.albumImage}
                />
                <View style={styles.musicDetails}>
                    <Text style={styles.musicTitle}>The Other Side</Text>
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
                            <Text style={styles.expandedText}>Explora a temática do desconhecido e da complexidade das experiências pessoais que são difíceis de serem compreendidas por outros. A letra sugere uma dualidade entre o eu lírico e a pessoa a quem ele se dirige, marcada pela diferença entre suas vivências e percepções do mundo.</Text>
                        </Animated.View>
                    )}

                    {/* Botão de ouvir música */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('side')}
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