import { router, useLocalSearchParams } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useEffect, useState } from "react";

export default function Details() {
    const {id} = useLocalSearchParams();
    const {getPayment} = usePaymentsDatabase();
    const [payment, setPayment] = useState({})

    const fetchData = async () => {
        try {
            const data = await getPayment(id);
            setPayment(data);
        } catch (error) {
            Alert.alert("Erro ao buscar pagamento");
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <View style={styles.container}>
       
            <View>
                <Text>Nome: {payment?.nome}</Text>
                <Text>Data do Pagamento: {payment?.data_pagamento}</Text>
                <Text>Num Recibo: {payment?.numero_recibo}</Text>
                <Text>Valor Pago: {payment?.valor_pago}</Text>
                <Text>Observação: {payment?.observacao}</Text>

            </View>
            <View style={{flex: 1}}>
                <Text>Não há imagem cadastrada</Text>
            </View>
            <View style={styles.containerButtons}>
                <Button title="Editar" disabled/>
                <Button title="DEFINIR IMAGEM" />
                <Button title="REMOVER IMAGEM" />
                <Button title="VOLTAR" onPress={() => router.push("list")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
 
    },
    containerButtons: {
        flexDirection: "row",
        justifyContent: "space-between",

    }
})