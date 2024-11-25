import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/Auth/index';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Importando o hook useNavigation

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1}}>
      <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#ffff" }}>
        <Image source={require('../../../src/assets/images/usuario.png')} style={{ width: 220, height: 200, borderRadius: 55, marginTop:-5 }} />
        <Text style={{ textAlign: "center", fontSize: 20, fontFamily: "regular", marginTop: -20}}>
          {user?.user?.nome}
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={() => signOut()} style={styles.button}>
        <Text style={{ color: "white", fontSize: 15}}>Deslogar</Text>
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
            drawerIcon: () => <MaterialIcons name="my-library-music" size={24} color="#008B8B" />
          }}
        />
        <Drawer.Screen
          name="album2"
          options={{
            drawerLabel: "Álbum 2",
            headerTitle: "Álbum 2",
            drawerIcon: () =>  <MaterialIcons name="my-library-music" size={24} color="#20B2AA" />
          }}
        />
        <Drawer.Screen
          name="album3"
          options={{
            drawerLabel: "Álbum 3",
            headerTitle: "Álbum 3",
            drawerIcon: () =>  <MaterialIcons name="my-library-music" size={24} color="#48D1CC" />
          }}
        />
        <Drawer.Screen
          name="album4"
          options={{
            drawerLabel: "Álbum 4",
            headerTitle: "Álbum 4",
            drawerIcon: () => <MaterialIcons name="my-library-music" size={24} color="#40E0D0" />
          }}
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
          name="side"
          options={({ navigation }) => ({
            drawerLabel: "The Other Side",
            headerTitle: "The Other Side",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album2')} style={{ marginLeft: 10 }}>
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
          name="too"
          options={({ navigation }) => ({
            drawerLabel: "Too Good To Say Goodbye",
            headerTitle: "Too Good To Say Goodbye",
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('album1')} style={{ marginLeft: 10 }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
              </TouchableOpacity>
            ),
          })}
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
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 35,
    alignItems: "center",
    width: 200,

    marginBottom: 3,
    marginLeft: 35,
  },
});
