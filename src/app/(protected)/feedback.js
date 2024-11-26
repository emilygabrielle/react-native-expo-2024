import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para ícones de estrelas

export default function FeedbackPage() {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [showGif, setShowGif] = useState(false);

    // Função para enviar feedback
    const handleSubmitFeedback = () => {
        if (comment.trim() === '' || rating === 0) {
            Alert.alert('Erro', 'Por favor, forneça uma avaliação e um comentário.');
            return;
        }

        setLoading(true);
        
        // Simular envio de feedback
        setTimeout(() => {
            setLoading(false);
            setShowGif(true);  // Mostrar o GIF de agradecimento
            setTimeout(() => {
                setShowGif(false); // Esconder o GIF após 3 segundos
            }, 3000); // O GIF ficará visível por 3 segundos

            Alert.alert('Obrigado!', 'Seu feedback foi enviado com sucesso.');
            setComment('');
            setRating(0);
        }, 2000); // Simula 2 segundos para o envio
    };

    // Renderizar as estrelas de avaliação
    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => setRating(i)}>
                    <FontAwesome 
                        name={i <= rating ? 'star' : 'star-o'} 
                        size={30} 
                        color={i <= rating ? '#f39c12' : '#ccc'}
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            <View style={styles.fundo}>
            <Text style={styles.title}>Dê seu Feedback</Text>

            <Text style={styles.subtitle}>Avaliação</Text>
            <View style={styles.starsContainer}>
                {renderStars()}
            </View>

            <Text style={styles.subtitle}>Comentário</Text>
            <TextInput
                style={styles.input}
                placeholder="Deixe um comentário..."
                multiline
                value={comment}
                onChangeText={setComment}
            />

            <TouchableOpacity onPress={handleSubmitFeedback}>
                <Text style={styles.buttonText}>Enviar Feedback</Text>
            </TouchableOpacity>
           
</View>
            {loading && <ActivityIndicator size="large" color="#fff" style={styles.loading} />}

            {/* Exibir o GIF de agradecimento após a avaliação */}
            {showGif && (
                
             <Image
             source={require("../../assets/videos/agradecimento.gif")} // Caminho do seu GIF
             style={styles.gif}
         />
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    fundo: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        width: '100%',
        backgroundColor: '#000',
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
    },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        height: 150,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        width: '100%',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    loading: {
        marginTop: 20,
    },
    gif: {
        marginTop: 20,
        width: 200,
        height: 180,
        borderRadius: 10,
    },
    buttonText:{
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',

        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        textAlign: 'center',

    }
});
