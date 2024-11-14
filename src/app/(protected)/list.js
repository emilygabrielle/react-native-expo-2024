import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatDateToBrazilian } from "../../utils/formatData";
import { formatCurrencyBRL } from "../../utils/formatCurrent";

export default function List () {
    const [data, setData] = useState([])
    const {getPayments} = usePaymentsDatabase();
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    async function fetchData() {

        if (hasMore == false) return;
        console.log(page)
        setPage(page + 1);

        const payments = await getPayments(page);

        if (payments.length < 5) setHasMore(false);
        //console.log(payments);
        setData([...data, ...payments]);
        setLoading(false);
        
    }

    useEffect(() => {
        setPage(0)
        fetchData()
    }, [])

    renderItem = ({item}) => (
        <View  style={{ flexDirection: "row", margin: 10, backgroundColor: "#fff", padding: 3}}>
            <View style={{ flex: 1, gap: 5}}>
                <Text style={{fontFamily: "bold", fontSize: 18, textTransform: "uppercase"}}>{item.nome}</Text>

                <View style={{ flexDirection:"row", gap:10}}>
                <Text style={{fontFamily:"regular"}}>{formatDateToBrazilian(item.data_pagamento || new Date())}</Text>
                <Text>{item.numero_recibo}</Text>
                </View>
                
                </View>
            <View><Text style={{flex: 1, justifyContent: "center", alignItems: "center" }}>{formatCurrencyBRL( item.valor_pago || 0)}</Text></View>
            
        </View>
        
      );


    return (
        <View style={{ flex: 1}}>
            <View style={{ flex: 1}}>
            <FlashList
            data={data}
            renderItem={renderItem}
            estimatedItemSize={50}
            onEndReached={fetchData}
            onEndReachedThreshold={0.8}
            keyExtractor={(item) => item.id.toString()}
            />
            </View>
        </View>
    )
}