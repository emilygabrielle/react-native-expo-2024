import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/Auth/index';

function CustomDrawerContent(props) {
  const { user, signOut} = useAuth();

  return (
    <View style={{ flex: 1}}>
      <View style={{marginTop: 20, justifyContent:"center", alignItems: "center", backgroundColor: "	#B22222" }}>

      <Image source={require('../../../src/assets/images/usuario.png')} style={{width: 132,
            height: 132, borderRadius: 55, marginTop: 10,}}/>

        <Text style={{textAlign: "center", fontSize: 16, fontFamily: "regular",}}>
          {user?.user?.nome}</Text>
      </View>
      <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
     </DrawerContentScrollView>
     <TouchableOpacity onPress={()=>signOut()}
     style={styles.button}>
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
            name="album1" 
            options={{drawerLabel: "Álbum 1", 
            headerTitle:"Álbum 1",  
            drawerIcon: ()=> <Ionicons name="disc" size={20} color="black"/>}} />

            <Drawer.Screen 
            name="album2" 
            options={{drawerLabel: "Álbum 2", 
            headerTitle:"Álbum 2",  
            drawerIcon: ()=> <Ionicons name="disc" size={20} color="black"/>}} />

           <Drawer.Screen 
            name="album3" 
            options={{drawerLabel: "Álbum 3", 
            headerTitle:"Álbum 3",  
            drawerIcon: ()=> <Ionicons name="disc" size={20} color="black"/>}} />

           <Drawer.Screen 
            name="album4" 
            options={{drawerLabel: "Álbum 4", 
            headerTitle:"Álbum 4",  
            drawerIcon: ()=> <Ionicons name="disc" size={20} color="black"/>}} />

             <Drawer.Screen 
            name="itwillrain" 
            options={{drawerLabel: "It Will Rain", 
            headerTitle:"It Will Rain",  
            drawerIcon: ()=> <Ionicons name="heart" size={20} color="black"/>}} />
            
            <Drawer.Screen 
            name="favoritos" 
            options={{drawerLabel: "Favoritos", 
            headerTitle:"Favoritos",  
            drawerIcon: ()=> <Ionicons name="heart" size={20} color="red"/>}} />

         
           <Drawer.Screen 
            name="list" 
            options={{drawerLabel: "Listagem", headerTitle:"Listagem",  
              drawerIcon: ()=> <Ionicons name="list" size={20} color="black"/> 
            }} />

           <Drawer.Screen 
            name="payment" 
            options={{drawerLabel: "Pagamentos", 
            headerTitle:"Pagamentos",  
            drawerIcon: ()=> <Ionicons name="cash-outline" size={20} color="black"/>}} />
          </Drawer>
        </GestureHandlerRootView>
      );
}

export default function Layout() {
  return DrawerLayout();
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    marginBottom: 40,
    marginLeft: 13,
  },
})
