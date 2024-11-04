import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() {

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Banner/>
            <View style={styles.text}>
                
            <ScrollView style={{flex: 1, width: 350}}>
                <Image source={require('../../assets/images/foto.png')} style={{width: 390, height: 190}}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', padding: 6, textAlign: "center", color: "#000"}}>Biografia</Text>
                <Text>
                    <Text  style={{ fontWeight: 'bold',}}>Bruno Mars</Text>, nome artístico de Peter Gene Hernandez, nasceu em 8 de outubro de 1985, em Honolulu, Havaí. 
                    Ele é um cantor, compositor, produtor musical e dançarino norte-americano, conhecido por sua mistura de estilos 
                    musicais que incluem pop, R&B, funk, soul, reggae e rock.
                </Text>
                <Text style={{paddingTop: 18}}>
                    Bruno Mars cresceu em uma família musical, o que influenciou seu talento precoce. Aos quatro anos, ele já se 
                    apresentava em shows de sua família, imitando Elvis Presley. Depois de se mudar para Los Angeles em 2003, ele começou 
                    sua carreira musical compondo para outros artistas, mas seu sucesso como cantor solo veio em 2010 com o álbum Doo-Wops & Hooligans. 
                    O álbum incluiu sucessos como "Just the Way You Are" e "Grenade", que o catapultaram ao estrelato internacional.
                </Text>
                <Text style={{paddingTop: 18}}>
                    Seus lançamentos subsequentes, como Unorthodox Jukebox (2012), com hits como "Locked Out of Heaven" e "When I Was Your Man", 
                    consolidaram sua posição como um dos principais nomes da música pop. Em 2016, ele lançou 24K Magic, com singles como "24K Magic" 
                    e "That's What I Like", ganhando vários prêmios, incluindo Grammys.
                </Text>
                <Text style={{paddingTop: 18,}}>
                    Mars também é conhecido por suas colaborações de sucesso, como "Uptown Funk", com Mark Ronson, uma das músicas mais tocadas dos anos 2010.
                    Sua habilidade como performer, combinada com sua versatilidade musical e danças energéticas, fazem dele um dos artistas mais completos da atualidade.
                </Text>
                <Text style={{paddingTop: 18, paddingVertical:10}}>
                    Ele também lidera a banda Silk Sonic, com o cantor Anderson .Paak, e juntos lançaram o aclamado álbum An Evening with Silk Sonic em 2021, incluindo o
                    hit "Leave the Door Open".
                </Text>
               
            </ScrollView>
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        marginTop: -180,
        flex: 1, 
        height: 300, 
        width: 320,
        textAlign: 'justify',
        marginLeft: 20,
    }
});
