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


"Same bed, but it feels just a little bit bigger now"  ,
"Our song on the radio, but it don't sound the same"  ,
"When our friends talk about you, all it does is just tear me down"  ,
"'Cause my heart breaks a little when I hear your name"  ,
" ",
"It all just sounds like, ooh"  ,
" ",
"Mm, too young, too dumb to realize"  ,
"That I should've bought you flowers and held your hand"  ,
"Should've gave you all my hours when I had the chance"  ,
"Take you to every party, 'cause all you wanted to do was dance"  ,
"Now my baby is dancing, but she's dancing with another man"  ,
" ",
"My pride, my ego, my needs and my selfish ways"  ,
"Caused a good strong woman like you to walk out my life"  ,
"Now I'll never, never get to clean up the mess I made, oh"  ,
"And it haunts me every time I close my eyes"  ,
" ",
"It all just sounds like, ooh"  ,
" ",
"Mm, too young, too dumb to realize"  ,
"That I should've bought you flowers and held your hand"  ,
"Should've gave you all my hours when I had the chance"  ,
"Take you to every party, 'cause all you wanted to do was dance"  ,
"Now my baby is dancing, but she's dancing with another man"  ,
" ",
"Although it hurts"  ,
"I'll be the first to say that I was wrong"  ,
"Oh, I know I'm probably much too late"  ,
"To try and apologize for my mistakes"  ,
"But I just want you to know"  ,
" ",
"I hope he buys you flowers, I hope he holds your hand",  
"Give you all his hours when he has the chance"  ,
"Take you to every party"  ,
"'Cause I remember how much you loved to dance"  ,
" ",
"Do all the things I should've done"  ,
"When I was your man"  ,
"Do all the things I should've done",  
"When I was your man"  
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
                <Image style={{ width: 385, height: 280 }} source={require('../../assets/images/man.png')} />
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