import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from 'react';
import { ResizeMode, Video } from 'expo-av';

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [loading, setLoading] = useState(false);
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert("Erro", error.message || "Erro desconhecido");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={require('../assets/images/fundo.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={require('../assets/videos/Music.png')}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          shouldPlay // Vídeo inicia automaticamente
          isMuted // Opção para silenciar o vídeo
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />

        <View style={styles.inputbox}>
          <Ionicons name="mail-open-outline" size={20} color="black" />
          <TextInput
            style={styles.emailinput}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputbox}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <TextInput
            style={styles.emailinput}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={passwordVisibility}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleEntrarSuper} disabled={loading}>
          <Text>{loading ? 'Carregando...' : 'Entrar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Sobre" onPress={() => router.push("about")} style={styles.button}>
          <Text>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Sair do Aplicativo" onPress={() => BackHandler.exitApp()} style={styles.sair}>
          <Text>Sair do Aplicativo</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 310,
  },
  title: {
    fontFamily: "bold",
    fontSize: 25,
    color: "black",
  },
  inputbox: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 45,
    marginVertical: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    height: 45,
    padding: 10,
    backgroundColor: "white",
  },
  emailinput: {
    flex: 1,
    fontFamily: "light",
    fontSize: 20,
  },
  button: {
    width: 200,
    height: 40,
    fontFamily: "bold",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sair: {
    width: 200,
    height: 40,
    fontFamily: "bold",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  video: {
    width: "70%",
    height: 200,
    position: "absolute",
  }
});
