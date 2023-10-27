import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function TodoItem({item, press}) {

    return (
        <TouchableOpacity onPress={() => press(item.key)}>
            <View style={styles.item}>
             <Text style={styles.text}>{item.text}</Text>
             <AntDesign name="delete" size={24} color="black" />
            </View>
            
        </TouchableOpacity>
    )
    
}

const  styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})