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
"I've made mistakes"  ,
"I could've treated you better"  ,
"I let you get away"  ,
"There goes my happily ever after"  ,
" ",
"Tell me why, why can't we try and start again?"  ,
"This can't be how our story ends"  ,
"You're more than my girl, you're my best friend"  ,
"Tell me you remember when"  ,
"Ooooh, I was your man and you were my girl"  ,
"It was you and me against the world"  ,
" ",
"Baby, ain't nobody gonna love me like the way you do"  ,
"And you ain't never gonna find a love like mine"  ,
"Tell me what can I do to make it up to you?"  ,
"'Cause what we got's too good to say goodbye, goodbye"  ,
" ",
"Yeah, I'm still in love with you darlin'"  ,
"I know you feel the same"  ,
"Oh, what's the point of both of us being broken hearted?"  ,
"I pray it's never too late"  ,
" ",
"Tell me why, why can't we try and start again?"  ,
"This can't be how our story ends"  ,
"You're more than my girl, you're my best friend"  ,
"Tell me you remember when"  ,
"I was your man and you were my girl"  ,
"It was you and me against the world"  ,
" ",
"Baby, ain't nobody gonna love me like the way you do"  ,
"And you ain't never gonna find a love like mine"  ,
"Tell me what can I do to make it up to you?"  ,
"'Cause what we got's too good to say goodbye, goodbye"  ,
" ",
"Oh, don't you give up"  ,
"Girl won't you listen?"  ,
"Oh, don't you give up"  ,
"It's you that I'm missin'"  ,
"Oh, don't you give up"  ,
"Take my hand, I wanna go, I wanna go"  ,
"All the way"  ,
"If we're gonna fight this fight for better days"  ,
"I know we're gonna make it"  ,
"This is the chance, let's take it"  ,
" ",
"Baby, ain't nobody gonna love me like the way you do"  ,
"No, no, no, no"  ,
"And you ain't never gonna find a love like mine"  ,
"Oh, tell me"  ,
"Tell me what can I do to make it up to you?"  ,
"'Cause what we got's too good to say goodbye"  ,
"Come on, come on", "goodbye" ,
"(oh baby, baby) " ,
" ",
"Baby, ain't nobody gonna love me like the way you do"  ,
"And you ain't never gonna find a love like mine"  ,
"Oh, tell me"  ,
"Tell me what can I do to make it up to you?" , 
"'Cause what we got's too good to say goodbye, goodbye"
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
                    <Image style={{ width: 385, height: 280 }} source={require('../../assets/images/too.png')} />
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