import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Project2 = () => {
    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#3ac', width: 100, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 10, })}
                onPress={() => alert('Hello!')}>
                <Text style={{color:'#fff'}}>Button 1</Text>
            </Pressable>
        </View>
    )
}

export default Project2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})