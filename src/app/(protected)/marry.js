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
       "It's a beautiful night.",
"We're looking for something dumb to do.",
"Hey, baby.",
"I think I wanna marry you.",
" ",
"Is it the look in your eyes?",
"Or is it this dancing juice?",
"Who cares, baby?",
"I think I wanna marry you.",
" ",
"Well, I know this little chapel.",
"On the boulevard.",
"We can go.",
"No one will know.",
"Oh, come on, girl.",
" ",
"Who cares if we're trashed?",
"Got a pocket full of cash we can blow.",
"Shots of Patron.",
"And it's on, girl.",
" ",
"Don't say no, no, no, no, no.",
"Just say yeah, yeah, yeah, yeah, yeah.",
"And we'll go, go, go, go, go.",
"If you're ready, like I'm ready.",
" ",
"'Cause it's a beautiful night.",
"We're looking for something dumb to do.",
"Hey, baby.",
"I think I wanna marry you.",
" ",
"Is it the look in your eyes?",
"Or is it this dancing juice?",
"Who cares, baby?",
"I think I wanna marry you, oh.",
" ",
"I'll go get a ring.",
"Let the choir bells sing like: Ooh.",
"So what you wanna do?",
"Let's just run, girl.",
" ",
"And if we wake up.",
"And you wanna break up, that's cool.",
"No, I won't blame you.",
"It was fun, girl.",
" ",
"Don't say no, no, no, no, no.",
"Just say yeah, yeah, yeah, yeah, yeah.",
"And we'll go, go, go, go, go.",
"If you're ready, like I'm ready.",
" ",
"'Cause it's a beautiful night.",
"We're looking for something dumb to do.",
"Hey, baby.",
"I think I wanna marry you.",
" ",
"Is it the look in your eyes?",
"Or is it this dancing juice?",
"Who cares, baby?",
"I think I wanna marry you.",
" ",
"Just say: I do.",
"Tell me right now, baby.",
"Tell me right now, baby, baby.",
"Just say: I do.",
"Tell me right now, baby.",
"Tell me right now, baby, baby, oh.",
" ",
"It's a beautiful night.",
"We're looking for something dumb to do.",
"Hey, baby.",
"I think I wanna marry you.",
" ",
"Is it the look in your eyes?",
"Or is it this dancing juice?",
"Who cares, baby?",
"I think I wanna marry you."
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
                <Image style={{ width: 385, height: 280 }} source={require('../../assets/images/marry.png')} />
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
    backgroundColor: "#fff",
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