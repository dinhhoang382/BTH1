import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Square=({text, bgColor ='#3ac'}) =>(
    <View style={[styles.box, {backgroundColor: bgColor}]}>
        <Text>{text}</Text>
    </View>
);
const Project5 = () => {
  return (
    <View style={styles.container}>
        <Square text="Square 1"/>
        <Square text="Square 2" bgColor='#4de'/>
        <Square text="Square 3" bgColor='#f28'/>
    </View>

  )
}

export default Project5

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box:{
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
    
})