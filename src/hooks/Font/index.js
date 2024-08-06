import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator } from "react-native";

const FontContext = createContext({});

export function FontProvider({ children }) {

    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
        bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
        black: require("../../assets/fonts/Montserrat-Black.ttf"),
        semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
        light: require("../../assets/fonts/Montserrat-Light.ttf"),
    });
    if (!loaded && !error) {
        return <ActivityIndicator/>
      }

    return <FontContext.Provider value={{}}>{children}</FontContext.Provider>
}

export function useFont(){
    const context =useContext(FontContext);
    if (!context){
        throw new Error("useFont must be used within a FontProvider");
     }
     return context;
}