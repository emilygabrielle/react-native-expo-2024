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

        "Standing at this liquor store",  
        "Whiskey coming through my pores",  
        "Feeling like I ran this whole block",
        "Loto ticket, cheap beer", 
        "That's why you can catch me here",  
        "Trying to scratch my way up to the top",  
        " ",
        "'Cause my job's got me going no where",  
        "So I ain't got a thing to lose",  
        "Take me to a place where I don't care",  
        "This is me and my liquor store blues",  
        " ",
        "I'll take one shot for my pain" , 
        "One drag for my sorrow"  ,
        "Get messed up today"  ,
        "I'll be okay tomorrow" , 
        " ",
        "One shot for my pain"  ,
        "One drag for my sorrow" , 
        "Get messed up today"  ,
        "I'll be okay tomorrow" , 
        " ",
        "Me and my guitar tonight"  ,
        "Singing to the city lights"  ,
        "Trying to live with more than what I got"  ,
        "'Cause 68 cents just"  ,
        "Ain't gon' pay the rent so"  ,
        "I'll be out until they call the cops"  ,
        
        "'Cause my job's got me going no where"  ,
        "So I ain't got a thing to lose",  
        "Take me to a place where I don't care"  ,
        "This is me and my liquor store blues"  ,
        
        "I'll take one shot for my pain"  ,
        "One drag for my sorrow"  ,
        "Get messed up today"  ,
        "I'll be okay tomorrow"  ,
        " ",
        "(Damian's part)  ",
        "Here comes Junior Gong"  ,
        "I'm flying high like a superman"  ,
        "And thinking that I ran the whole block"  ,
        "I don't know if it is just because",  
        "Pineapple kush between my jaws"  ,
        "Has got me feeling like I'm on top"  ,
        "Feeling like I wouldn't stand up to the cops",  
        "And stand up to the big guys, because"  ,
        "All of them are saps"  ,
        "All the talk them a talk and them fly make no drop"  ,
        "Enough ghetto youth cannot escape the trap"  ,
        " ",
        "Give me this, one shot for my pain"  ,
        "One drag for my sorrow"  ,
        "Get messed up today"  ,
        "I'll be okay tomorrow"  ,
        " ",
        "One shot for my pain"  ,
        "One drag for my sorrow"  ,
        "Get messed up today"  ,
        "I'll be okay tomorrow"  
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
                require("../../assets/audio/moon.mp3"),
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
