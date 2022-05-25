import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TextInput,Button, View} from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';

const DATA = [
{
  id: '1',
  title: "MANHÃ",
},
{
  id: '2',  
  title: "TARDE",
},
{
  id: '3',
  title: "NOITE",
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);



const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [chosenOption, setChosenOption] = useState('MASC');
  const options = [
    { label: 'MASC', value: 'masc' },
    { label: 'FEM', value: 'fem' },
  ]
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#00FA9A" : "#7FFFD4";
    const color = item.id === selectedId ? 'white' : '#708090';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        />
      );
  };

  <View style={styles.row}>
  </View>

return (
  <SafeAreaView style={styles.container}>

    <View style={styles.container2}>
      
      <TextInput style={styles.input} placeholder="NOME"/>
      
      <View style={styles.row2}>

        <TextInput style={styles.inputMedio}  placeholder="DD/MM/AAAA"/>

        <RadioForm
          style={styles.inputMedio}
          radio_props={options}
          initial={0}
          onPress={(value) => {
            setChosenOption(value);
          }}
        />

      </View>

      <TextInput style={styles.input}  placeholder="INSTITUIÇÃO"/>

      <View style={styles.row2}>
        <TextInput style={styles.inputMedio}  placeholder="MÓDULO"/>

        <TextInput style={styles.inputMedio}  placeholder="CURSO"/>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

      <View style={styles.row2}>
        <Button
          title= 'Enviar'
          color= '#00CED1'
        />

        <Button
          title= 'Apagar'
          color= '#FF6347'
        />
      </View>

      
    </View>

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#',
  },

  container2:{
    marginHorizontal:25,
    marginVertical:30,
  },
  row:{
    flexDirection:'row',
    marginBottom:20,
    marginTop:20,
  },

  row2:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5,
    marginTop:5,
  },

  item: {
  padding: 12,
  marginVertical: 3,
  textAlign: "center",
  },

  title: {
  fontSize: 16,
  },

  input: {
    padding:15,
    fontSize:15,
    textAlign: "center",
    backgroundColor:'#87CEEB',
  },
  inputMedio: {
    width:130,
    padding:10,
    fontSize:15,
    textAlign: "center",
    backgroundColor:'#87CEEB',
  },
  });

export default App;