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

       "Today I don't feel like doing anything",
"I just wanna lay in my bed",
"Don't feel like picking up my phone",
"So leave a message at the tone",
"'Cause today I swear I'm not doing anything",

"I'm gonna kick my feet up then stare at the fan",
"Turn the TV on, throw my hand in my pants",
"Nobody's gon' tell me I can't",
" ",
"I'll be lounging on a couch, just chilling in my snuggie",
"Click to MTV so they can teach me how to dougie",
"'Cause in my castle I'm the freaking man",
" ",
"Oh, yes, I said it",
"I said it",
"I said it, 'cause I can",

"Today I don't feel like doing anything",
"I just wanna lay in my bed",
"Don't feel like picking up my phone",
"So leave a message at the tone",
"'Cause today I swear I'm not doing anything",
"Nothing at all",
"Nothing at all",
" ",
"Tomorrow I'll wake up",
"Do some P90X",
"Meet a really nice girl",
"Have some really nice sex",
"And she's gonna scream out: This is great",
"(Oh my God, this is great)",
" ",
"Yeah",
"I might mess around",
"And get my college degree",
"I bet my old man will be so proud of me",
"But, sorry, pops, you'll just have to wait",
" ",
"Oh, yes, I said it",
"I said it",
"I said it, 'cause I can",
" ",
"Today I don't feel like doing anything",
"I just wanna lay in my bed",
"Don't feel like picking up my phone",
"So leave a message at the tone",
"'Cause today I swear I'm not doing anything",
" ",
"No, I ain't gonna comb my hair",
"'Cause I ain't going anywhere",
"No, no, no, no, no, no, no, no, no",
" ",

"I'll just strut in my birthday suit",
"And let everything hang loose",
"Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah",
" ",
"Oh, today I don't feel like doing anything",
"I just wanna lay in my bed",
"Don't feel like picking up my phone",
"So leave a message at the tone",
"'Cause today I swear I'm not doing anything",
" ",
"Nothing at all",
"Nothing at all",
"Nothing at all"
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
                require("../../assets/audio/lazy.mp3"),
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
