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
       "Girl I bet your momma named you good lookin'",
"'Cause you sure look good to me",
"My attention, oh, yes, you just took it",
"You're probably the finest thing that I ever seen",
"And nobody at the party droppin' it low like the way that you do",
"You got me sayin': Damn girl, break it down for me",
" ",
"Take it nice and slow, let me watch while you turn around",
"Just back it up on me girl, right now, right now",
" ",
"I got your body rockin' side to side (straight up!)",
"I put you on and now you're feelin' right (straight up!)",
"I know exactly what is on your mind (straight up!)",
"Oh, baby we gon' have some fun tonight",
"Straight up and down",
"(Straight up, straight up, straight up)",
"Straight up and down",
"(Straight up, straight up, straight up)",
"Oh, I know exactly what is on your mind",
"Oh, baby we gon' have some fun tonight",
"Straight up and down",
" ",
"This liquor got both of us faded, so gone, so gone, so gone",
"But your booty deserve a celebration",
"And I'm gonna celebrate it all night long",
"Come on here and show me why you got the whole club starrin' at you",
" ",
"You got me sayin': Damn girl, break it down for me",
" ",
"Take it nice and slow, let me watch while you turn around",
"Just back it up on me girl, right now, right now",
" ",
"I got your body rockin' side to side (straight up!)",
"I put you on and now you're feelin' right (straight up!)",
"I know exactly what is on your mind (straight up!)",
"Oh, baby we gon' have some fun tonight",
"Straight up and down",
"(Straight up, straight up, straight up)",
"Straight up and down",
"(Straight up, straight up, straight up)",
"Oh, I know exactly what is on your mind",
"Oh, baby we gon' have some fun tonight",
"Straight up and down",
" ",
"Girl tell me when you're ready",
"Ready to go",
"Just say the word",
"And then we'll take this home",
"Don't you fight the feelin'",
"'Cause I feel it too",
"Freakin' me baby, while I'm freakin' you"
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
                require("../../assets/audio/straight.mp3"),
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
