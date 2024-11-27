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
    const [loading, setLoading] = useState(true); // Indica se o áudio está sendo carregado
    const isMounted = useRef(true);
    const navigation = useNavigation();
    
    const lyrics = [
      "Easy come, easy go",
"That's just how you live, oh",
"Take, take, take it all but you never give",
"Should've known you was trouble from the first kiss",
"Had your eyes wide open",
"Why were they open?",
"  ",
"Gave you all I had and you tossed it in the trash",
"You tossed it in the trash, you did",
"To give me all your love is all I ever asked, 'cause",
"What you don't understand is",
"  ",
"I'd catch a grenade for ya (yeah, yeah, yeah)",
"Throw my hand on a blade for ya (yeah, yeah, yeah)",
"I'd jump in front of a train for ya (yeah, yeah, yeah)",
"You know I'd do anything for ya (yeah, yeah, yeah)",
"Oh, oh, I would go through all of this pain",
"Take a bullet straight through my brain",
"Yes, I would die for you, baby",
"But you won't do the same",
"No, no, no, no",
"  ",
"Black, black, black and blue",
"Beat me 'til I'm numb",
"Tell the devil I said hey when you get back to where you're from",
"Mad woman, bad woman, that's just what you are",
"Yeah, you'll smile in my face then rip the brakes out my car",
"  ",
"Gave you all I had and you tossed it in the trash",
"You tossed it in the trash, yes, you did",
"To give me all your love is all I ever asked, 'cause",
"What you don't understand is",
"  ",
"I'd catch a grenade for ya (yeah, yeah, yeah)",
"Throw my hand on a blade for ya (yeah, yeah, yeah)",
"I'd jump in front of a train for ya (yeah, yeah, yeah)",
"You know I'd do anything for ya (yeah, yeah, yeah)",
"Oh, oh, I would go through all of this pain",
"Take a bullet straight through my brain",
"Yes, I would die for you, baby",
"But you won't do the same",
"  ",
"If my body was on fire",
"Oh, you'd watch me burn down in flames",
"You said you loved me, you're a liar",
"'Cause you never, ever, ever did, baby",

"But darling, I'd still catch a grenade for ya (yeah, yeah, yeah)",
"Throw my hand on a blade for ya (yeah, yeah, yeah)",
"I'd jump in front of a train for ya (yeah, yeah, yeah)",
"You know I'd do anything for ya (yeah, yeah, yeah)",
"Oh, oh, I would go through all of this pain",
"Take a bullet straight through my brain",
"Yes, I would die for ya, baby",
"But you won't do the same",
" ",
"No, you won't do the same",
"You wouldn't do the same",
"Oh, you'd never do the same",
"No, no, no, no"
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
            require("../../assets/audio/grenade.mp3"),
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
                <Image style={{ width: 385, height: 280 }} source={require('../../assets/images/side.png')} />
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