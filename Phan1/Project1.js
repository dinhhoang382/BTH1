import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Project1 = () => {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    )
}

export default Project1

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: 'lightseagreen',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
    }
})