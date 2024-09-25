import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
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
      router.replace("/");
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);

    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../src/assets/images/logo.png')} style={{width: 270, height: 220}}/>
      <Text style={styles.title}>Versos Vivos</Text>
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

      <Button 
      style={styles.button}
      title="Entrar" 
      onPress={handleEntrarSuper}
      color="#e6b372" 
      />
      <Button 
      title="Sobre" 
      onPress={() => router.push("/about")} 
      color="#e6b372" 
      />
      <Button
       title="Sair do Aplicativo" 
       onPress={() => BackHandler.exitApp()}
       color="#e6b372"  
       />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontFamily: "regular",
    fontSize: 25,
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
  },
  emailinput: {
    flex: 1,
    fontFamily: "light",
    fontSize: 20,
  },
  button:{
    width: "100%",
    height: 40,

  }
});
