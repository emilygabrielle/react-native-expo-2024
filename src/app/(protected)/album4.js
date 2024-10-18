import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

export default function List() {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [showLyrics, setShowLyrics] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

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
            require("../../assets/audio/itwillrain.mp3"),
            { shouldPlay: false }
        );
        setSound(sound);

        // Obter duração da música
        const status = await sound.getStatusAsync();
        setDuration(status.durationMillis);
    }

    useEffect(() => {
        loadAudio();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(async () => {
                const status = await sound.getStatusAsync();
                if (status.isPlaying) {
                    setProgress(status.positionMillis);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isPlaying, sound]);

    const handleSliderValueChange = async (value) => {
        const newPosition = value * duration; // Converter para milissegundos
        await sound.setPositionAsync(newPosition);
        setProgress(newPosition);
    };

    const lyrics = [
        "If you ever leave me, baby",
        // ... (restante das letras)
    ];

    return (
        <View style={styles.container}>
            <Text>It Will Rain</Text>

            <Slider
                style={{ width: 300, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                value={duration > 0 ? progress / duration : 0}
                onValueChange={handleSliderValueChange}
                minimumTrackTintColor="#e6b372"
                maximumTrackTintColor="#000000"
            />

            <TouchableOpacity onPress={() => setShowLyrics(!showLyrics)} style={styles.button}>
                <Text style={styles.buttonText}>{showLyrics ? "Esconder Letra" : "Mostrar Letra"}</Text>
            </TouchableOpacity>

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
