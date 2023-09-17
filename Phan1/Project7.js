import { Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { Appbar } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Project7 = () => {
    const [name, setName] = useState("");
    const checkTextInput = () => {
        if (!name.trim()) {
            alert("Please input name!");
            return;
        }
        else {
            alert(`Hello ${name}!`);
            setName("");
        }
    }
    return (
        <SafeAreaProvider>
            <Appbar.Header>
                <Appbar.Content title="Text input" mode='medium' />
            </Appbar.Header>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text1}> What is your name!</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Dinh Hoang'
                    value={name}
                    onChangeText={(name) => setName(name)} />
                <Button
                    title='Press me'
                    onPress={checkTextInput} />
            </View>
        </SafeAreaProvider>
    )
}

export default Project7

const styles = StyleSheet.create({
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        padding: 5
    },
    textInput: {
        height: 50,
        width: '90%',
        borderWidth: 1,
        borderColor: '#f88',
        borderRadius: 20,
        marginVertical: 10,
        padding: 10,
        backgroundColor:'#fff',
    }
})