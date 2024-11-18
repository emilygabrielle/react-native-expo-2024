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
       "I got too many girls on hold for you to be so bold",
"Too many on my team for you to act so mean",
"You say you wanna go and have fun, well, you ain't the only one",
"If I ring, don't let it ring too long or I'm gone",
" ",
"I got Aleshia waitin', Aisha waitin'",
"All the Aisha's waitin' on me",
"So why you contemplatin'? Playa hatin'?",
"If this is how it's gonna be",
" ",
"I'm calling all my lovelies (calling all my lovelies)",
"'Cause I can't get a hold of you",
"Since you ain't thinking of me (since you ain't thinking of me)",
"Oh, look what you making me do",
"Honey pie, I'm far too fly to be on standby",
"Sendin' me straight to voicemail, suga, what the hell?",
"Oh, you ought to be ashamed, playin' these childish games",
"I don't get down like that, tell me where you at, hit me back",
" ",
"I got Aleshia waitin', Aisha waitin'",
"All the Aisha's waitin' on me",
"So why you contemplatin'? Playa hatin'?",
"If this is how it's gonna be",
" ",
"I'm calling all my lovelies (calling all my lovelies)",
"'Cause I can't get a hold of you",
"Since you ain't thinking of me (since you ain't thinking of me)",
"Oh, look what you making me do",
" ",
"Pick up the phone, pick up the phone",
"'Cause all this loving needs a home",
"Oh, no, look at what you started, baby",
"Now I'm left here brokenhearted, baby",
"There's a pain in my chest I cannot explain",
"I told myself I wasn't gon' cry",
"But somebody's gotta come dry these eyes 'cause",
" ",
"Hi, you've reached Halle Berry",
"Sorry I can't get to the phone right now",
"But if you leave your name and number, I'll get right back to you",
" ",
"I'm calling, calling, calling, calling all my lovelies",
"'Cause I can't get a hold of you",
"Oh, since you ain't thinking of me (since you ain't thinking of me, baby)",
"Look what you making me do",
" ",
"Pick up the phone, pick up the phone",
"'Cause all this loving needs a home",
"Oh"
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
                require("../../assets/audio/calling.mp3"),
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
