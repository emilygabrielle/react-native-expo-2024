import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/Auth/index';

function CustomDrawerContent(props) {
  const { user, signOut} = useAuth();

  return (
    <View style={{ flex: 1}}>
      <View style={{marginTop: 20, justifyContent:"center", alignItems: "center", backgroundColor: "#e6b372" }}>

      <Image source={require('../../../src/assets/images/usuario.png')} style={{width: 110,
            height: 110, borderRadius: 55, marginTop: 20,}}/>

        <Text style={{textAlign: "center", fontSize: 16, fontFamily: "regular",}}>
          {user?.user?.nome}</Text>
      </View>
      <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
     </DrawerContentScrollView>
     <TouchableOpacity onPress={()=>signOut()}
     style={{justifyContent: "center", alignItems: "center", 
     height: 50, margin: 10, backgroundColor: "#e6b372", borderRadius: 5, }}>
      <Text style={{color: "white", fontFamily: "bold",}}>Deslogar</Text>
     </TouchableOpacity>

    </View>
    
  );
}

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer drawerContent={(props) => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen 
            name="index" 
            options={{drawerLabel: "Principal", headerTitle:"Principal", 
              drawerIcon: ()=> <Ionicons name="home" size={20} color="black" /> }} />
            
            <Drawer.Screen 
            name="humor" 
            options={{drawerLabel: "Poemas de Humor", 
            headerTitle:"Poemas de Humor",  
            drawerIcon: ()=> <Ionicons name="happy" size={20} color="black"/>}} />

             <Drawer.Screen 
            name="romance" 
            options={{drawerLabel: "Poemas de Romance", 
            headerTitle:"Poemas de Romance",  
            drawerIcon: ()=> <Ionicons name="flower-outline" size={20} color="black"/>}} />
            
            <Drawer.Screen 
            name="favoritos" 
            options={{drawerLabel: "Favoritos", 
            headerTitle:"Favoritos",  
            drawerIcon: ()=> <Ionicons name="heart" size={20} color="red"/>}} />

           <Drawer.Screen 
            name="meus" 
            options={{drawerLabel: "Meus Poemas", 
            headerTitle:"Meus Poemas",  
            drawerIcon: ()=> <Ionicons name="pencil" size={20} color="black"/>}} />

           <Drawer.Screen 
            name="list" 
            options={{drawerLabel: "Listagem", headerTitle:"Listagem",  
              drawerIcon: ()=> <Ionicons name="list" size={20} color="black"/> 
            }} />

           <Drawer.Screen 
            name="payment" 
            options={{drawerLabel: "Pagamentos", 
            headerTitle:"Pagamentos",  
            drawerIcon: ()=> <Ionicons name="code-download-sharp" size={20} color="black"/>}} />
          </Drawer>
        </GestureHandlerRootView>
      );
}

export default function Layout() {
  return DrawerLayout();
}