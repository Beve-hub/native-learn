import { useState } from 'react';
import {FlatList,  StyleSheet, Text, View} from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 45,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    }
})