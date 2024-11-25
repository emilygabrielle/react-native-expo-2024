import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { useNavigation } from 'expo-router';

export default function List() {
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const isMounted = useRef(true);
    const [loading, setLoading] = useState(true); // Indica se o áudio está sendo carregado
    const navigation = useNavigation();
    
    const lyrics = [
       "Tonight",
"I just want to take you higher",
"Throw your hands up in the sky",
"Let's set this party off right",
" ",
"Players, put your pinky rings up to the Moon",
"Girls, what y'all trying to do?",
"Twenty-four karat magic in the air",
"Head to toe, so player",
"Uh, look out, uh",
" ",
"Pop pop, it's show time (show time)",
"Show time (show time)",
"Guess who's back again?",
"Oh, they don't know? (Go on, tell 'em)",
"Oh, they don't know? (Go on, tell 'em)",
"I bet they know soon as we walk in (showin' up)",
" ",
"Wearing cuban links (ya)",
"Designer minks (ya)",
"Inglewood's finest shoes (whoop, whoop)",
"Don't look too hard",
"Might hurt ya'self",
"Known to give the color red the blues",
"Oh, shit",
" ",
"I'm a dangerous man",
"With some money in my pocket (keep up)",
"So many pretty girls around me",
"And they waking up the rocket (keep up)",
"Why you mad? Fix ya face",
"Ain't my fault that y'all be jocking (keep up)",
" ",
"Players only, come on",
"Put your pinky rings up to the Moon",
"Girls, what y'all trying to do?",
"Twenty-four karat magic in the air",
"Head to toe, so player",
"Uh, look out, uh",
" ",
"Second verse for the hustlas (hustlas)",
"Gangstas (gangstas)",
"Bad bitches and ya ugly ass friends (haha)",
"Can I preach? (Uh-oh) can I preach? (Uh-oh)",
"I gotta show 'em how a pimp get it in",
" ",
"First",
"Take your sip (sip), do your dip (dip)",
"Spend your money like money ain't shit (whoop, whoop)",
"We too fresh",
"Got to blame it on Jesus",
"Hashtag blessed",
"They ain't ready for me, uh",
" ",
"I'm a dangerous man",
"With some money in my pocket (keep up)",
"So many pretty girls around me",
"And they waking up the rocket (keep up)",
"Why you mad? Fix ya face",
"Ain't my fault that y'all be jocking (keep up)",
"Players only, come on",
" ",
"Put your pinky rings up to the Moon",
"Hey, girls, what y'all trying to do?",
"What y'all trying to do?",
"Twenty-four karat magic in the air (air, air)",
"Head to toe so player (mmm)",
"Uh, look out, uh",
" ",
"Wooh",
"Everywhere I go they be like",
"Oh, so player",
"Oh, everywhere I go they be like",
"Oh, so player",
"Oh, uh, everywhere I go they be like",
"Oh, so player",
"Oh",
"Now, now, now",
" ",
"Watch me break it down like (uh)",
"Twenty-four karat, twenty-four karat magic",
"What's that sound?",
"Twenty-four karat, twenty-four karat magic",
"Come on now",
"Twenty-four karat, twenty-four karat magic",
"Don't fight the feeling",
"Invite the feeling",
" ",
"Just put your pinky rings up to the Moon",
"Girls, what y'all trying to do?",
"Tell me, what y'all trying to do?",
"Twenty-four karat magic in the air (in the air)",
"Head to toe, so player, hey",

"Put your pinky rings up to the Moon"
    ];

 
    /* Tocar, Pausar e verifica se está tocando*/
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
            setLoading(true); // Inicia o carregamento
            const { sound } = await Audio.Sound.createAsync(
                require("../../assets/audio/magic.mp3"),
                { shouldPlay: false }
            );
            setSound(sound);
            const status = await sound.getStatusAsync();
            if (isMounted.current) {
                setDuration(status.durationMillis);
                setLoading(false); // Finaliza o carregamento
            }
        } catch (error) {
            console.error("Error loading audio:", error);
            setLoading(false); // Finaliza o carregamento em caso de erro
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
            }, 500); // Intervalo reduzido para melhorar a resposta do slider
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
            {/* Adicione o ícone de carregamento enquanto o áudio não é carregado */}
            {loading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <>
                    <Image style={{ width: 385, height: 280 }} source={require('../../assets/images/magic.png')} />
                    <View style={{ marginTop: 180, position: 'absolute' }}>
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
                            <Ionicons name={isPlaying ? "pause" : "play"} size={40} color="#000000" />
                        </TouchableOpacity> 
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
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
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "white",
        backgroundColor: "white",
    },
    lyricLine: {
        color: "black",
        textAlign: "center",
        flex: 1,
        fontSize: 16,
        padding: 6,
    },
    iconButton: {
        alignItems: 'center',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
});