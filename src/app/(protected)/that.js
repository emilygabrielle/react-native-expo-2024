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
       "(Ayy, ayy, ayy)",
" ",
"I got a condo in Manhattan",
"Baby girl, what's happening?",
"You and your ass invited",
"So go on and get to clapping",
" ",
"So pop it for a player",
"Pop, pop it for me",
"Turn around and drop it for a player",
"Drop, drop it for me",
" ",
"I'll rent a beach house in Miami",
"Wake up with no jammies",
"Lobster tail for dinner",
"Julio, serve that scampi",
" ",
"You got it if you want it",
"Got, got it if you want it",
"Said you got it if you want it",
"Take my wallet if you want it now",
" ",
"Jump in the Cadillac",
"Girl, let's put some miles on it",
"Anything you want",
"Just to put a smile on it",
" ",
"You deserve it, baby, you deserve it all",
"And I'm gonna give it to you",
" ",
"Gold jewelry shining so bright",
"Strawberry champagne on ice",
"Lucky for you, that's what I like",
"That's what I like",
"Lucky for you, that's what I like",
"That's what I like",
" ",
"Sex by the fire at night",
"Silk sheets and diamonds all white",
"Lucky for you, that's what I like",
"That's what I like",
"Lucky for you, that's what I like",
"That's what I like",
" ",
"I'm talking trips to Puerto Rico",
"Say the word, and we go",
"You can be my freaka",
"Girl, I'll be your fleeko, mamacita",
" ",
"I will never make a promise that I can't keep",
"I promise that your smile ain't gon' never leave",
" ",
"Shopping sprees in Paris",
"Everything 24 karats",
"Take a look in that mirror",
"Now tell me who's the fairest",
" ",
"Is it you? (Is it you?)",
"Is it me? (Is it me?)",
"Say it's us (say it's us)",
"And I'll agree, baby",
" ",
"Jump in the Cadillac",
"Girl, let's put some miles on it",
"Anything you want",
"Just to put a smile on it",
" ",
"You deserve it, baby, you deserve it all",
"And I'm gonna give it to you",
" ",
"Gold jewelry shining so bright",
"Strawberry champagne on ice",
"Lucky for you, that's what I like",
"That's what I like",
"Lucky for you, that's what I like",
"That's what I like",
" ",
"Sex by the fire at night",
"Silk sheets and diamonds all white",
"Lucky for you, that's what I like",
"That's what I like",
"Lucky for you, that's what I like",
"That's what I like",
" ",
"If you say you want a good time",
"Well, here I am, baby",
"Here I am, baby",
"Talk to me, talk to me, talk to me",
"Tell me what's on your mind (what's on your mind?)",
" ",
"If you want it, girl, come and get it",
"All this is here for you",
"Tell me, baby, tell me, tell me, baby",
"What you tryna do?",
" ",
"Gold jewelry shining so bright",
"Strawberry champagne on ice",
"Lucky for you, that's what I like",
"That's what I like",
"Lucky for you, that's what I like",
"That's what I like",
" ",
"Sex by the fire at night",
"Silk sheets and diamonds all white",
"Lucky for you, that's what I like",
"That's what I like",
"Lucky for you, that's what I like",
"That's what I like"
    ];

    /* Tocar, Pausar e verifica se está tocando*/
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
            require("../../assets/audio/that.mp3"),
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
                <Image style={{ width: 385, height: 280 }} source={require('../../assets/images/that.png')} />
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