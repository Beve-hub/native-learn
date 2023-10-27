import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Array() {
  const [people, setPeople] = useState([
    { name: 'ogadimma', id: '1'},
    { name: 'victor', id: '2'},
    { name: 'emma', id: '3'},
    { name: 'chiemezie', id: '4'},
    { name: 'nnamdi', id: '5'},
    { name: 'maxwell', id: '6'},
    { name: 'emeka', id: '7'},
    { name: 'emeka', id: '8'},
    { name: 'emeka', id: '9'}
  ])

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
     return prevPeople.filter( person => person.id != id)
    })
  }
  return (
    <View style={styles.container}>


    {/* <ScrollView>
     {people.map((item) => {
    return (
      <View key={item.key}>
        <Text style={styles.item}>
          {item.name}
          </Text>
      </View>
    ) 
   })}
     </ScrollView>*/}

     <FlatList 
     numColumns={2}
     keyExtractor={(item) => item.id}
      data={people}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() =>pressHandler(item.id) }>
        <Text style={styles.item}>
          {item.name}
          </Text>
        </TouchableOpacity>
      )}
     />

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
  item: {
    marginTop: 60,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    
  }
});
