import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

export default function App() {
  const { signIn, signOut } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);


  const tooglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  }


  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password});
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);

    }
  }

  return (
    <ImageBackground source={require('../assets/images/fundo.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
       <Ionicons 
       name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
       size={20} color="black" 
       onPress={tooglePasswordVisibility}/>
      </View>

      <TouchableOpacity style={styles.button}
      title="Entrar" 
      onPress={handleEntrarSuper}>
        <Text>Entrar</Text>
      </TouchableOpacity>
     
    
      <TouchableOpacity    title="Sobre" 
      onPress={() => router.push("about")} style={styles.button} >
        <Text>Sobre</Text>
      </TouchableOpacity>
   
      <TouchableOpacity title="Sair do Aplicativo" 
       onPress={() => BackHandler.exitApp()} style={styles.sair}>
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
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
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
sair:{
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
});
