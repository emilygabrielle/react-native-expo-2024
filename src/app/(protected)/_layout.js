import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/Auth/index';
import { useNavigation } from '@react-navigation/native'; // Importando o hook useNavigation

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#B22222" }}>
        <Image source={require('../../../src/assets/images/usuario.png')} style={{ width: 132, height: 132, borderRadius: 55, marginTop: 10 }} />
        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "regular" }}>
          {user?.user?.nome}
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={() => signOut()} style={styles.button}>
        <Text style={{ color: "white", fontFamily: "bold" }}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Principal",
            headerTitle: "Principal",
            drawerIcon: () => <Ionicons name="home" size={20} color="black" />
          }}
        />
        <Drawer.Screen
          name="album1"
          options={{
            drawerLabel: "Álbum 1",
            headerTitle: "Álbum 1",
            drawerIcon: () => <Ionicons name="disc" size={20} color="black" />
          }}
        />
        <Drawer.Screen
          name="album2"
          options={{
            drawerLabel: "Álbum 2",
            headerTitle: "Álbum 2",
            drawerIcon: () => <Ionicons name="disc" size={20} color="black" />
          }}
        />
        <Drawer.Screen
          name="album3"
          options={{
            drawerLabel: "Álbum 3",
            headerTitle: "Álbum 3",
            drawerIcon: () => <Ionicons name="disc" size={20} color="black" />
          }}
        />
        <Drawer.Screen
          name="album4"
          options={{
            drawerLabel: "Álbum 4",
            headerTitle: "Álbum 4",
            drawerIcon: () => <Ionicons name="disc" size={20} color="black" />
          }}
        />
      <Drawer.Screen
          name="itwillrain"
          options={({ navigation }) => ({
            drawerLabel: "it will rain",
            headerTitle: "it will rain",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album1')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Drawer.Screen
          name="24kmagic"
          options={({ navigation }) => ({
            drawerLabel: "24K Magic",
            headerTitle: "24K Magic",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album1')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        
        <Drawer.Screen
          name="die"
          options={({ navigation }) => ({
            drawerLabel: "Die With A Smile",
            headerTitle: "Die With A Smile",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album1')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

    <Drawer.Screen
          name="man"
          options={({ navigation }) => ({
            drawerLabel: "When I Was Your Man",
            headerTitle: "When I Was Your Man",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album4')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />


        <Drawer.Screen
          name="that"
          options={({ navigation }) => ({
            drawerLabel: "That's what  i like",
            headerTitle: "That's what  i like",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album1')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />

       <Drawer.Screen
          name="versace"
          options={({ navigation }) => ({
            drawerLabel: "Versace on the floor",
            headerTitle: "Versace on the floor",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album1')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />

       <Drawer.Screen
          name="count"
          options={({ navigation }) => ({
            drawerLabel: "Count On Me",
            headerTitle: "Count On Me",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album2')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>


            ),
          })}
        />


     <Drawer.Screen
          name="somewhere"
          options={({ navigation }) => ({
            drawerLabel: "Somewhere in Brooklyn",
            headerTitle: "Somewhere in Brooklyn",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album2')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />


       <Drawer.Screen
          name="grenade"
          options={({ navigation }) => ({
            drawerLabel: "Grenade",
            headerTitle: "Grenade",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album3')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />

      <Drawer.Screen
          name="just"
          options={({ navigation }) => ({
            drawerLabel: "Just The Way You Are",
            headerTitle: "Just The Way You Are",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album3')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />

        <Drawer.Screen
          name="lazy"
          options={({ navigation }) => ({
            drawerLabel: "The Lazy Song",
            headerTitle: "The Lazy Song",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album3')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />

     <Drawer.Screen
          name="marry"
          options={({ navigation }) => ({
            drawerLabel: "Marry You",
            headerTitle: "Marry You",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album3')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />

        <Drawer.Screen
          name="moon"
          options={({ navigation }) => ({
            drawerLabel: "Talking to the Moon",
            headerTitle: "Talking to the Moon",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album2')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />

   <Drawer.Screen
          name="blues"
          options={({ navigation }) => ({
            drawerLabel: "Liquor Store Blues",
            headerTitle: "Liquor Store Blues",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album3')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />



<Drawer.Screen
          name="girls"
          options={({ navigation }) => ({
            drawerLabel: "Young Girls",
            headerTitle: "Young Girls",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album4')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />

    <Drawer.Screen
          name="treasure"
          options={({ navigation }) => ({
            drawerLabel: "Treasure",
            headerTitle: "Treasure",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album4')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />


      <Drawer.Screen
          name="heaven"
          options={({ navigation }) => ({
            drawerLabel: "Locked Out Heaven",
            headerTitle: "Locked Out Heaven",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album4')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
        />


        <Drawer.Screen
          name="favoritos"
          options={{
            drawerLabel: "Favoritos",
            headerTitle: "Favoritos",
            drawerIcon: () => <Ionicons name="heart" size={20} color="red" />
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Listagem",
            headerTitle: "Listagem",
            drawerIcon: () => <Ionicons name="list" size={20} color="black" />
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Pagamentos",
            headerTitle: "Pagamentos",
            drawerIcon: () => <Ionicons name="cash-outline" size={20} color="black" />
          }}
        />
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
});
