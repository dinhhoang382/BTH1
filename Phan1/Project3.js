import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Project3 = () => {
  return (
    <View style={{...styles.container}}>
        <View style={styles.view1}>
        <Button title='Say Hello!'
        onPress={()=>alert("Hello!")}></Button>
        </View>
        <Button title='Say Goodbye!' 
        onPress={()=>alert("Goodbye!")}
        color={'#f00'}
        touchSoundDisabled={false}></Button>
    </View>
  )
}

export default Project3

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 10,
    },
    view1:{
        margin: 10,
    }
})