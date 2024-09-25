import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
    const [page, setPage] = useState(0);

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    }
  return (
  <View style={styles.container}>
    <PagerView initialPage={0} style={styles.content} onPageSelected={onPageSelected}>
        <View key="1" style={styles.page}>
          <Image source={require('../../assets/images/banner1.png')} style={{width: 500, height: 220, marginLeft: 40,}}/>
        </View>

        <View key="2" style={styles.page}>
          <Image source={require('../../../src/assets/images/banner2.png')} style={{width: 400, height: 220}}/>
        </View>

        <View key="3" style={styles.page}>
        <Image source={require('../../../src/assets/images/banner3.png')} style={{width: 400, height: 220, marginLeft:20,}}/>
        </View>
    </PagerView>
    <View style={styles.bullteContent}> 
        <View style={[styles.bullte, page === 0 && styles.activeBullte]}></View>
        <View style={[styles.bullte, page === 1 && styles.activeBullte]}></View>
        <View style={[styles.bullte, page === 2 && styles.activeBullte]}></View>
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content:{
        marginTop: 10,
        height: 220,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    page: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
    },
    bullteContent:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }, 
    bullte:{
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: "#999",
        margin: 10,
    },
     activeBullte:{
        backgroundColor: "#000",
     },
     text:{
         fontSize: 15,
         fontFamily: "bold",
     }
     
});