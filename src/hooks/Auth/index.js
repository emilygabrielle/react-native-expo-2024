import { createContext, useContext, useEffect, useState } from "react";
import { useUsersDatabase } from "../../database/useUsersDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER",
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        autenticated: null,
        user: null,
        role: null,
    });

    const { authUser } = useUsersDatabase();

    useEffect(() => {
        const loadStorageData = async () => {
            const storageUser = await AsyncStorage.getItem("@payment:user");
            if (storageUser) {
                setUser({
                    autenticated: true,
                    user: JSON.parse(storageUser),
                    role: JSON.parse(storageUser).role,
                });
            }else{
                setUser({
                    autenticated: false,
                    user: null,
                    role: null,
                });
            }
        };

        loadStorageData();
    },[]);

    useEffect(() => {
        console.log("AuthProvider: ", user);
    }, [user]);

    const signIn = async ({ email, password }) => {
        const response = await authUser({ email, password });
        console.log(response);

        if (!response) {
            setUser({
                autenticated: false,
                user: null,
                role: null,
            });
            throw new Error("Usuário ou senha inválidos");
        }

        await AsyncStorage.setItem("@payment:user", JSON.stringify(response));

        setUser({
            autenticated: true,
            user: response,
            role: response.role,
        });

    };

    const signOut = async () => {
        await AsyncStorage.deleteItem("@payment:user");
        setUser({});
    };

    useEffect(() => {
        console.log('AuthProvider: ', user);
    }, [user]);



    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}