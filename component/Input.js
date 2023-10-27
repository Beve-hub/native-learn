import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input() {
  const [name, setName] = useState('mario');
  const [age, setAge] = useState('30')

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
      multiline
       style={styles.input}
       placeholder='Entername'
       onChangeText={(val) => setName(val)}/>

      <Text>Enter age:</Text>
      <TextInput
      keyboardType='numeric'
       style={styles.input}
       placeholder='Enterage'
       onChangeText={(val) => setAge(val)}/>

     <Text>name: {name}, age: {age}  </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding:20,
    margin: 8,
    width:200,
  }
});
