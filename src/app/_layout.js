import { Stack, useSegments, router } from "expo-router";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";
import { useEffect } from "react";



const StackLayout = () => {    
    const { user } = useAuth();

    useEffect(() => {

        if (!user?.autenticated) {
            router.replace("signIn")
        }
        else {
            router.replace("(protected)");
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