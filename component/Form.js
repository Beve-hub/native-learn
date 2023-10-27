import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput,  View } from 'react-native';

export default function Form({ submit}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
      setText(val)
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submit(text)} title='add todo' color='coral' />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        margineButton: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
    }
})