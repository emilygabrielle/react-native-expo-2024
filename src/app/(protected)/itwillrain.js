import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, ScrollView, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Audio } from 'expo-av';

export default function List() {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [showLyrics, setShowLyrics] = useState(false); // Estado para mostrar/esconder letras

    async function playPauseAudio() {
        if (isPlaying) {
            await sound.pauseAsync();

        } else {
            await sound.playAsync();

        }
        setIsPlaying(!isPlaying);
    }

    async function loadAudio() {
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/audio/itwillrain.mp3")
        );
        setSound(sound);
    }

    useEffect(() => {
        loadAudio();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    const lyrics = [
        "If you ever leave me, baby",
        "Leave some morphine at my door",
        "'Cause it would take a whole lot of medication",
        "To realize what we used to have",
        "We don't have it anymore",
        "",
        "There's no religion that could save me",
        "No matter how long my knees are on the floor, oh",
        "So keep in mind all the sacrifices I'm making",
        "To keep you by my side",
        "To keep you from walking out the door",
        "",
        "'Cause there'll be no sunlight",
        "If I lose you, baby",
        "There'll be no clear skies",
        "If I lose you, baby",
        "",
        "Just like the clouds, my eyes will do the same",
        "If you walk away, everyday it'll rain, rain, rain",
        "",
        "I'll never be your mother's favorite",
        "Your daddy can't even look me in the eye, oh",
        "If I was in their shoes, I'd be doing the same thing",
        "Saying: There goes my little girl",
        "Walking with that troublesome guy",
        "",
        "But they're just afraid of something they can't understand, oh",
        "But, little darling, watch me change their minds",
        "Yeah, for you, I'll try, I'll try, I'll try, I'll try",
        "",
        "And pick up these broken pieces 'til I'm bleeding",
        "If that'll make you mine",
        "",
        "'Cause there'll be no sunlight",
        "If I lose you, baby",
        "There'll be no clear skies",
        "If I lose you, baby",
        "",
        "And just like the clouds, my eyes will do the same",
        "If you walk away, everyday it'll rain, rain, rain",
        "",
        "Oh, don't you say (don't you say)",
        "Goodbye (goodbye)",
        "Don't you say (don't you say)",
        "Goodbye (goodbye)",
        "",
        "I'll pick up these broken pieces 'til I'm bleeding",
        "If that'll make it right",
        "",
        "'Cause there'll be no sunlight",
        "If I lose you, baby",
        "And there'll be no clear skies",
        "If I lose you, baby",
        "",
        "And just like the clouds, my eyes will do the same",
        "If you walk away, everyday it'll rain, rain, rain"
    ];

    return (
        <View style={styles.container}>
            <Text>It Will Rain</Text>

            {/* Botão para mostrar ou esconder as letras */}
            <TouchableOpacity onPress={() => setShowLyrics(!showLyrics)} style={styles.button}>
                <Text style={styles.buttonText}>{showLyrics ? "Esconder Letra" : "Mostrar Letra"}</Text>
            </TouchableOpacity>

            {/* Mostrar as letras se o estado showLyrics for verdadeiro */}
            {showLyrics && (
                <ScrollView style={styles.text}>
                    {lyrics.map((line, index) => (
                        <Text key={index} style={styles.lyricLine}>{line}</Text>
                    ))}
                </ScrollView>
            )}

          
                <Button onPress={playPauseAudio} title={isPlaying ? "Pausar" : "Reproduzir"} />


            <Button title="Voltar" color="#e6b372" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "white",
    },
    text: {
        flex: 1,
        maxHeight: 600,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 2,
        padding: 15,
        backgroundColor: "brown",
    },
    lyricLine: {
        color: "white",
    },
    button: {
        backgroundColor: "#e6b372",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});