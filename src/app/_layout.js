import { Stack, useSegments, router } from "expo-router";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";
import { useEffect } from "react";



const StackLayout = () => {    
    const { user } = useAuth();

    useEffect(() => {

        if (!user?.authenticated) {
            router.replace("signIn")
        }
        else {
            router.replace("(protected)/list");
        }
    }, [user]);
   return (
   <Stack>
        <Stack.Screen name="signIn" options={{headerShown: false}} />
        <Stack.Screen name="about" options={{headerShown: false}} />
        <Stack.Screen name="(protected)" options={{headerShown: false}} />
    </Stack>
    );
}
export default function Layout () {


    return (
     <AppProvider>
        <StackLayout/>
    </AppProvider>
    );
}