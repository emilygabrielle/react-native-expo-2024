import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
    const navigation = useNavigation();
    
    const lyrics = [
       "Oh, oh, oh",
       " ",
"If you ever find yourself stuck in the middle of the sea",
"I'll sail the world to find you",
"If you ever find yourself lost in the dark and you can't see",
"I'll be the light to guide you",
" ",
"We find out what we're made of",
"When we are called to help our friends in need",
" ",
"You can count on me like one, two, three, I'll be there",
"And I know when I need it",
"I can count on you like four, three, two, and you'll be there",
"'Cause that's what friends are supposed to do, oh, yeah",
"Ooh, ooh",
"Ooh, ooh, yeah, yeah",
" ",
"If you're tossing and you're turning and you just can't fall asleep",
"I'll sing a song beside you",
"And if you ever forget how much you really mean to me",
"Everyday I will remind you, oh",
" ",
"We find out what we're made of",
"When we are called to help our friends in need",
" ",
"You can count on me like one, two, three, I'll be there",
"And I know when I need it",
"I can count on you like four, three, two, and you'll be there",
"'Cause that's what friends are supposed to do, oh, yeah",
" ",
"Ooh, ooh",
"Ooh, ooh, yeah, yeah",
" ",
"You'll always have my shoulder when you cry",
"I'll never let go, never say goodbye",
"You know you can",
" ",
"Count on me like one, two, three, I'll be there",
"And I know when I need it",
"I can count on you like four, three, two, and you'll be there",
"'Cause that's what friends are supposed to do, oh, yeah",
" ",
"Ooh, ooh",
"Ooh, ooh",
" ",
"You can count on me 'cause I can count on you."
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
            const { sound } = await Audio.Sound.createAsync(
                require("../../assets/audio/count.mp3"),
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
        
            <Image style={{width: 385, height: 280,}}/>
            <View style={{marginTop: 180, position: 'absolute'}}>
               
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
        flexGrow: 1,
        fontSize: 16,
    },
    iconButton:{
        alignItems: 'center',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
});
