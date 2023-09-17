import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Square = ({ text, bgColor = '#88f' }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text>{text}</Text>
    </View>
);
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const Project6 = () => {
    return (
        <ScrollView style={styles.container}>
            {data.map((item, index) => (
                <Square key={item} text={`Square ${index + 1}`} />
            ))}
        </ScrollView>
    )
}

export default Project6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    box: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20,
    }

})