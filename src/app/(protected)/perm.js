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
       "Now look at you, been walking in here",
"Looking all pretty and angry",
"And mean and good",
"Ha, ha",
"Now, I know you didn't get your hair done",
"So you could just sit down and just sit still",
"Aye, we tryna have a good time tonight",
"Let's go over here!",
" ",
"It's my birthday",
"No, it's not",
"But I still look good though",
"High comb hot",
"I bet you want an autograph",
"For you and your friends",
"Gotta do it in the penthouse",
"That's where I keep my pen",
" ",
"What, you can't dance? Ain't got rhythm?",
"What, you got a man? I don't see you with him",
"Put your phone down, let's get it",
"Forget your Instagram and your Twitter",
"Got me like, woah, wait a minute",
"You need to take a minute",
"Loosen them shoulders up",
"Pour it up, let's work",
"Throw some perm on your attitude",
"Girl, you gotta relax, ooh",
"Let me show you what you got to do",
"You gotta lay it back",
"Matter of fact?",
"Band, show her how to lay it back!",
"Show her how to lay it back",
"Show her how to lay it back",
"Show her how to lay it back",
"Alright!",
" ",
"Come on, baby, I love you",
"No, you don't",
"You never know, I might though",
"Can't say I won't, ah",
"There's that smile I'm looking for",
"Was that so hard?",
"If you ever need to smile again, girl, take my card",
" ",
"Razzle-dazzle, never gon' stop",
"What you want is what I got",
"You wanna get down? You gotta get up",
"Don't be stingy with your big ol' butt",
"You got a booty like, woah, wait a minute",
"I'm just playing with you",
"Loosen them shoulders up",
"Pour it up, let's work",
" ",
"Throw some perm on your attitude",
"Girl, you gotta relax, ooh",
"Let me show you what you got to do",
"You gotta lay it back",
"Matter of fact?",
"Band, show her how to lay it back!",
"Show her how to lay it back",
"Show her how to lay it back",
"Show her how to lay it back",
"Alright!",
" ",
"Hey, now you got it, baby",
"You tryna have some fun tonight",
"You just gotta follow these simple instructions, you ready?",
" ",
"You need to activate your sexy",
"(Activate your sexy)",
"Silky, smooth and snap",
"(Silky, smooth and snap)",
"Now lean with it (lean)",
"Throw a lil sheen in it (sheen)",
"Then pat, pat, pat, till it's flat",
"One more time, you need to activate your sexy",
"(Activate your sexy)",
"Silky, smooth and snap",
"(Silky, smooth and snap)",
"Now lean with it (lean)",
"Throw a lil sheen in it (sheen)",
"Then pat, pat, pat, till it's flat",
" ",
"I say it again",
"Throw some perm on your attitude",
"Girl, you gotta relax, ooh",
"Let me show you what you got to do",
"You gotta lay it back",
"Matter of fact?",
"Band, show her how to lay it back!",
"Show her how to lay it back",
"Show her how to lay it back",
"Show her how to lay it back",
"Alright!"
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
                require("../../assets/audio/perm.mp3"),
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
