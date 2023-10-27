import { useState } from 'react';
import { Alert,  FlatList,  StyleSheet,  View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './component/Header'
import TodoItem from './component/TodoItem';
import Form from './component/Form'

export default function TodoList() {
  const [todo, setTodo] = useState([])

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    
    if(text.length > 3) {
      setTodo((prevTodo) => {
      return [
        { text: text, key: Math.random().toString()},
        ...prevTodo
      ]
    })
    }else {
      Alert.alert('oops!', 'todo must be over 3 chars long ', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      {/*header*/} 
      <Header/>
      <View style={styles.content}>
        {/* to form*/}
        <Form submit={submitHandler}/>
        <View style={styles.list}>
        <FlatList
           data={todo}
           renderItem={({item}) => (
            <TodoItem item={item} press={pressHandler}/>
           )}
          />
        </View>

      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content:{
    padding: 40,
  },
  list: {
    marginTop: 60,
    
  }
});
