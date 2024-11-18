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
      "Ooh, don't we look good together? (Together, together)",
"There's a reason why they watch all night long (all night long) (wow)",
"Yeah, I know we'll turn heads forever (forever, forever)",
"So tonight I'm gonna show you off",
" ",
"When I walk in witchu (when I walk in witchu)",
"I watch the whole room change (I watch the whole room change)",
"Baby, that's what you do (baby, that's what you do)",
"No, my baby don't play (no)",
"Blame it on my confidence or blame it on your measurements",
"Shut the shit down on sight",
"That's right",
" ",
"We out here drippin' in finesse",
"It don't make no sense",
"Out here drippin' in finesse",
"You know it, you know",
"We out here drippin' in finesse",
"It don't make no sense",
"Out here drippin' in finesse",
"You know it, you know it",
" ",
"Now slow it down for me, baby (baby, baby) (slow it down, girl)",
"'Cause I love the way it feels when we grind (when we grind) (yeah)",
"Our connection's so magnetic on the floor",
"Nothing can stop us tonight",
" ",
"When I walk in witchu (when I walk in witchu)",
"I watch the whole room change (I watch the whole room change)",
"Baby, that's what you do (baby, that's what you do)",
"No, my baby don't play (no)",
"Blame it on my confidence or blame it on your measurements",
"Shut the shit down on sight",
"That's right",
" ",
"We out here drippin' in finesse",
"It don't make no sense",
"Out here drippin' in finesse",
"You know it, you know",
"We out here drippin' in finesse",
"It don't make no sense",
"Out here drippin' in finesse",
"You know it, you know it (wow)",
" ",
"Fellas, grab your ladies if your lady fine",
"Tell her she the one, she the one for life",
"Ladies, grab your fellas and let's do this right (do this right)",
"If you're on one like me in mind",
"Wow",
" ",
"(Yeah, we got it goin' on, got it goin' on)",
"(Don't it feel so good to be us? Ayy)",
"(Yeah, we got it goin' on, got it goin' on)",
"Girl, we got it goin' on",
"(Yeah, we got it goin' on, got it goin' on) hey",
"(Don't it feel so good to be us? Ayy) it feels so good with",
"(Yeah, we got it goin' on, got it goin' on) you",
" ",
"We out here drippin' in finesse",
"It don't make no sense",
"Out here drippin' in finesse",
"You know it, you know",
"We out here drippin' in finesse (with my baby, oh, oh)",
"It don't make no sense",
"Out here drippin' in finesse",
"You know it, you know it (girl, you know we got it goin' on)",
" ",
"(Yeah, we got it goin' on, got it goin' on)",
"(Don't it feel so good to be us? Ayy)",
"(Yeah, we got it goin' on, got it goin' on)",
"You know it, you know it",
"(Yeah, we got it goin' on, got it goin' on) ooh, girl, we got it",
"(Don't it feel so good to be us? Ayy) baby",
"(Yeah, we got it goin' on, got it goin' on) wow",
"You know it, you know it"
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
                require("../../assets/audio/finesse.mp3"),
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
