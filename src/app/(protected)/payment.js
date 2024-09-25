import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Payment() {
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugetoes] = useState([{
        "id": 1,
        "nome": "Westley Lyngsted"
      }, {
        "id": 2,
        "nome": "Ronna Matskiv"
      }, {
        "id": 3,
        "nome": "Bethanne Hindge"
      }, {
        "id": 4,
        "nome": "Johny McLeod"
      }, {
        "id": 5,
        "nome": "Antons Taggart"
      }, {
        "id": 6,
        "nome": "Sheppard Cruess"
      }, {
        "id": 7,
        "nome": "Johannes Thowless"
      }, {
        "id": 8,
        "nome": "Roland Lantiffe"
      }, {
        "id": 9,
        "nome": "Danna Bramwell"
      }, {
        "id": 10,
        "nome": "Jessica McCormick"
      }, {
        "id": 11,
        "nome": "Tabb Aronstam"
      }, {
        "id": 12,
        "nome": "Randee Balentyne"
      }, {
        "id": 13,
        "nome": "Grange Opy"
      }, {
        "id": 14,
        "nome": "Osgood Limer"
      }, {
        "id": 15,
        "nome": "Catha Robrose"
      }, {
        "id": 16,
        "nome": "Bernhard O' Mullan"
      }, {
        "id": 17,
        "nome": "Eric Lindores"
      }, {
        "id": 18,
        "nome": "Flori Sprankling"
      }, {
        "id": 19,
        "nome": "Elnore Sellen"
      }, {
        "id": 20,
        "nome": "Andeee Drinkhill"
      }, {
        "id": 21,
        "nome": "Patrica McBeith"
      }, {
        "id": 22,
        "nome": "Bridget Calbreath"
      }, {
        "id": 23,
        "nome": "Jarrad Lonnon"
      }, {
        "id": 24,
        "nome": "Nerti Trubshaw"
      }, {
        "id": 25,
        "nome": "Rudy Jaan"
      }, {
        "id": 26,
        "nome": "Emlynn Duiguid"
      }, {
        "id": 27,
        "nome": "Maynard Jados"
      }, {
        "id": 28,
        "nome": "Cleve Montague"
      }, {
        "id": 29,
        "nome": "Odelle Beasant"
      }, {
        "id": 30,
        "nome": "Benedicta Bugge"
      }, {
        "id": 31,
        "nome": "Alla Rome"
      }, {
        "id": 32,
        "nome": "Gamaliel Demaine"
      }, {
        "id": 33,
        "nome": "Keenan Canner"
      }, {
        "id": 34,
        "nome": "Royal Jewks"
      }, {
        "id": 35,
        "nome": "Cathrine Di Angelo"
      }]
      );
      const [id, setId] = useState(1);
      const [data, setData] = useState(new Date());
      const [viewCalendar, setViewCalendar] = useState(false);
      const [observacao, setObservacao] = useState("");

      const handleCalendar = (event, selectedDate)=>
        {setViewCalendar(false);
          setData(selectedDate)
        };

    return (
        <View style={styles.content}>
          <Text>Inserir Pagamento</Text>
            <View style={styles.inputView}>
                <Ionicons name="cash-outline" size={24} color="black" />
                <TextInput placeholder="Valor" keyboardType="decimal-pad" style={styles.inputValor} value={valor} onChangeText={setValor}/>
            </View>
            <View style={styles.inputView}>
                <Picker selectedValue={id} onValueChange={(itemValue, index)=>{setId(itemValue)}}
                    style={{width: '100%'}}
                    >
                    {sugestoes?.map((item) => {
                        return( <Picker.Item key={item.id} label={item.nome} value={item.id}/>);
                    })

                    }
                    </Picker>
            </View>
            <View style={styles.inputView}>
                <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
                  {data.toLocaleDateString().split("T")[0]}</Text>
                {
                    viewCalendar && (
                        <DateTimePicker value={data} 
                        onChange={handleCalendar}
                        mode="date" testID="dateTimePicker"
                        />
                    )
                }

                
            </View>
            <View style={styles.inputView}>
                <TextInput placeholder="Observações" style={styles.inputObservacao} value={observacao} onChangeText={setObservacao} multiline={true}/>
            </View>
            <View style={styles.contentButtons}>
                <Button title="Salvar" color="#e6b372" />
                <Button title="Continuar" color="#e6b372" />
                <Button title="Cancelar" onPress={() => router.back()} color="#e6b372" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    content:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 10,
    },
    inputView: {
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
        width: "80%",
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
    },
    contentButtons: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
        marginBottom: 20,
    },
    inputValor:{
    flex: 1,
    textAlign: "right",
    padding: 10,
    },
    inputData:{
      width: "100%",
      textAlign: "center",
      fontFamily: "regular",
      fontSize: 16,
      padding: 10,
    },
    inputObservacao:{
      flex: 1,
      fontFamily: "regular",
      fontSize: 16,
      lineHeight: 20,
    }
})