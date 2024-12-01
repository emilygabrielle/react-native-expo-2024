import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Details() {
    const {id} = useLocalSearchParams
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"
        }}>
            <Text>Details - {id ? id : "Sem id"}</Text>
        </View>
    )
}