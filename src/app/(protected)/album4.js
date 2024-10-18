import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

export default function List() {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const isMounted = useRef(true);

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

    async function playPauseAudio() {
        if (sound) {
            if (isPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    }

    async function loadAudio() {
        try {
            const { sound } = await Audio.Sound.createAsync(
                require("../../assets/audio/itwillrain.mp3"),
                { shouldPlay: false }
            );
            setSound(sound);
            const status = await sound.getStatusAsync();
            if (isMounted.current) {
                setDuration(status.durationMillis);
            }
        } catch (error) {
            console.error("Error loading audio:", error);
        }
    }

    useEffect(() => {
        isMounted.current = true;
        loadAudio();

        return () => {
            isMounted.current = false;
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    useEffect(() => {
        if (isPlaying && sound) {
            const interval = setInterval(async () => {
                const status = await sound.getStatusAsync();
                if (isMounted.current && status.isPlaying) {
                    setProgress(status.positionMillis);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isPlaying, sound]);

    const handleSliderValueChange = async (value) => {
        if (sound && duration > 0) {
            const newPosition = value * duration; 
            await sound.setPositionAsync(newPosition);
            setProgress(newPosition);
        }
    };

    const formatTime = (millis) => {
        const totalSeconds = Math.floor(millis / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>It Will Rain</Text>

            <ScrollView style={styles.text}>
                {lyrics.map((line, index) => (
                    <Text key={index} style={styles.lyricLine}>{line}</Text>
                ))}
            </ScrollView>

            <View style={styles.progressContainer}>
                <Text style={styles.timeText}>{formatTime(progress)}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={duration > 0 ? progress / duration : 0}
                    onValueChange={handleSliderValueChange}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                />
                <Text style={styles.timeText}>{formatTime(duration)}</Text>
            </View>
            <TouchableOpacity onPress={playPauseAudio} style={styles.iconButton}>
                <Ionicons name={isPlaying ? "pause" : "play"} size={82} color="#000000" />
            </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "white",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    timeText: {
        color: "#000",
        width: 50,
        textAlign: 'center',
    },
    slider: {
        flex: 1,
        height: 40,
        marginHorizontal: 10,
    },
    text: {
        flex: 1,
        maxHeight: 400,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        backgroundColor: "pink",
    },
    lyricLine: {
        color: "black",
    },
});
