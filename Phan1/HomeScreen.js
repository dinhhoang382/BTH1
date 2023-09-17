import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeScreen = () => {
 /*    const onPressHandle = () => {
        navigation.navigate('Project1')

    }
    return (
        <View style={styles.contaier}>
            <Button title="Project 1" onPress={onPressHandle} />
        </View>
    ) */
    return(
        <View style={styles.contaier}>
            <Text>Bài thực hành 1</Text>
            <Text>Vuốt sang trái để xem </Text>
            <Text>Code by: Đinh Thế Hoàng</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    contaier: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})