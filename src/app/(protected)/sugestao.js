import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Para adicionar ícones

export default function FavoriteMusic() {
    const [music, setMusic] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    // Função para adicionar música
    const handleAddMusic = () => {
        if (music.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira o nome da música.');
            return;
        }

        setLoading(true);
        const newSuggestion = { id: Date.now().toString(), music };
        setSuggestions(prevSuggestions => [...prevSuggestions, newSuggestion]);
        setMusic('');
        setEditingId(null);
        setLoading(false);

        Alert.alert('Sucesso', 'Música adicionada com sucesso!');
    };

    // Função para excluir música
    const handleDeleteSuggestion = (id) => {
        Alert.alert(
            'Confirmar',
            'Você tem certeza que deseja excluir esta sugestão?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    onPress: () => {
                        setSuggestions(prevSuggestions => prevSuggestions.filter(suggestion => suggestion.id !== id));
                        Alert.alert('Sucesso', 'Sugestão excluída com sucesso!');
                    },
                },
            ]
        );
    };

    // Função para editar sugestão
    const handleEditSuggestion = (id) => {
        const suggestion = suggestions.find(suggestion => suggestion.id === id);
        setMusic(suggestion.music);
        setEditingId(id);
    };

    // Função para atualizar sugestão
    const handleUpdateSuggestion = () => {
        if (music.trim() === '') {
            Alert.alert('Erro', 'Por favor, insira o nome da música.');
            return;
        }

        setLoading(true);
        setSuggestions(prevSuggestions => prevSuggestions.map(suggestion =>
            suggestion.id === editingId ? { ...suggestion, music } : suggestion
        ));
        setMusic('');
        setEditingId(null);
        setLoading(false);

        Alert.alert('Sucesso', 'Música atualizada com sucesso!');
    };

    // Renderizar sugestão individual
    const renderSuggestion = ({ item }) => (
        <View style={styles.suggestionItem}>
            <Text style={styles.suggestionText}>{item.music}</Text>
            <TouchableOpacity onPress={() => handleEditSuggestion(item.id)} style={styles.editButton}>
                <FontAwesome name="pencil" size={18} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteSuggestion(item.id)} style={styles.deleteButton}>
                <FontAwesome name="trash" size={18} color="white" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>Sugira uma Música!</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Digite o nome da música"
                value={music}
                onChangeText={setMusic}
            />
            <Button
                title={editingId ? "Atualizar Sugestão" : "Adicionar Sugestão"}
                onPress={editingId ? handleUpdateSuggestion : handleAddMusic}
                color="#000"
            />
            
            {loading && <ActivityIndicator size="large" color="#000" style={styles.loading} />}
 <View style={styles.fundo}>
            <FlatList
                data={suggestions}
                renderItem={renderSuggestion}
                keyExtractor={(item) => item.id}
                style={styles.suggestionsList}
            />
</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    fundo: {
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#A9A9A9',
        borderRadius: 5,
        width: 350,
        height: 500,
        borderColor: '#696969',
        borderWidth: 2,
        padding: 10
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    suggestionsList: {
        marginTop: 20,
        width: '100%',
    },
    suggestionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    suggestionText: {
        fontSize: 16,
        flex: 1,
        color: '#333',
    },
    editButton: {
        backgroundColor: '#000',
        padding: 8,
        marginLeft: 10,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: '#A9A9A9',
        padding: 8,
        marginLeft: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    loading: {
        marginTop: 20,
    },
});
