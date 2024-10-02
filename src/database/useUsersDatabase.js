import { useSQLiteContext } from "expo-sqlite";

export function useUsersDatabase() {
    const database = useSQLiteContext();

    async function authUser({ email, password }) {
       // console.log("authUser email: ", email, " - password: ", password);
        try {
            const result = await database.getFirstAsync(`
                SELECT id, nome, email, role FROM users WHERE email='${email}' and senha='${password}'
                `);
            return result
        } catch (error) {
            console.error("useUsersDatabase authUser error: ", error);
            throw error;
        }
    }

    async function create() {
        const statment = await database.prepareAsync(`
            INSERT INTO payments (user_id, user_cadastro, valor_pago, data_pagamento, observacao) 
            VALUE ($user_id, $user_cadastro, $valor_pago, @data_pagamento, $observacao);
            `)
        try {
            
        } catch (error) {
            
        }finally{

        }
    }

    return {
        authUser,
    };
}