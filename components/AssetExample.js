import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TextInput,Button, View} from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';

const DATA = [
{
  id: '1',
  title: "Manhã",
},
{
  id: '2',  
  title: "Tarde",
},
{
  id: '3',
  title: "Noite",
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);



const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [chosenOption, setChosenOption] = useState('Masculino');
  const options = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' },
  ]
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#DCDCDC" : "#000000";
    const color = item.id === selectedId ? 'black' : 'white';

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
      
      <TextInput style={styles.input} placeholder="Nome"/>
      
      <View style={styles.row2}>

        <TextInput style={styles.inputMedio}  placeholder="XX/XX/XXXX"/>

        <RadioForm
          style={styles.inputMedio}
          radio_props={options}
          initial={0}
          onPress={(value) => {
            setChosenOption(value);
          }}
        />

      </View>

      <TextInput style={styles.input}  placeholder="Instituição"/>

      <View style={styles.row2}>
        <TextInput style={styles.inputMedio}  placeholder="Módulo"/>

        <TextInput style={styles.inputMedio}  placeholder="Curso"/>
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
          color= 'green'
        />

        <Button
          title= 'Apagar'
          color= 'red'
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
    marginHorizontal:20,
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
  padding: 6,
  marginVertical: 6,
  marginHorizontal: 12,
  textAlign: "center"
  },

  title: {
  fontSize: 16,
  },

  input: {
    padding:15,
    fontSize:13,
    textAlign: "center",
    backgroundColor:'lightblue',
  },
  inputMedio: {
    width:130,
    padding:10,
    fontSize:12,
    textAlign: "center",
    backgroundColor:'lightblue',
  },
  });

export default App;