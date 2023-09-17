import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Project4 = () => {
    const [count, setCount] = useState(0)
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text> You've pressed the button: {count} time(s)</Text>
            <Button
                title='Press me!'
                onPress={() => setCount(count + 1)} />
        </View>
    )
}

export default Project4
