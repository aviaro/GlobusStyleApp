import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function App() {
  const [height, setheight] =useState(0);
  const [weight, setweight] = useState(0);
  const [result, setresult] = useState(0);
  const calbmi =() =>{
    const hightformatter = height/100;
    const bmi = weight /(hightformatter*hightformatter); ;
    bmi = bmi.toFixed(2)
    setResult(bmi)
  }

  return (
    <View style={styles.container}>
      <Text>please enter your heightin cm</Text>
      <TextInput style={styles.inputstyle}
      value={height}
      onChangeText={text => setheight(text)}
      />
      <Text>PLEASE enter your weight</Text>
      <TextInput style={styles.inputstyle}
      value={weight}
      onChangeText={text => setweight(text)}
        
      />
      <Text>{height}</Text>
     <TouchableOpacity onPress={calbmi} style={styles.calbutton}>calculate</TouchableOpacity>
     <text>{result}</text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputstyle:{
    backgroundColor:'#0ED0F9',
    width:'100%',
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical: 10,
    margintop:6,
    fontsize:16,
    textalign:'center'
  },
  calbutton:{
    fontsize:26,
    backgroundColor: 'yellow'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'30%'
  },
});
