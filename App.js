import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Phan1/HomeScreen'
import Project1 from './Phan1/Project1'
import Project2 from './Phan1/Project2'
import Project3 from './Phan1/Project3'
import Project4 from './Phan1/Project4'
import Project5 from './Phan1/Project5'
import Project6 from './Phan1/Project6'
import Project7 from './Phan1/Project7'
import Project8 from './Phan1/Project8'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Calculator from './Phan2/Calculator'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'BTH1_Đinh Thế Hoàng' }} />
      <Drawer.Screen name='Project1' component={Project1} options={{ title: 'Bài 1' }} />
      <Drawer.Screen name='Project2' component={Project2} options={{ title: 'Bài 2' }} />
      <Drawer.Screen name='Project3' component={Project3} options={{ title: 'Bài 3' }} />
      <Drawer.Screen name='Project4' component={Project4} options={{ title: 'Bài 4' }} />
      <Drawer.Screen name='Project5' component={Project5} options={{ title: 'Bài 5' }} />
      <Drawer.Screen name='Project6' component={Project6} options={{ title: 'Bài 6' }} />
      <Drawer.Screen name='Project7' component={Project7} options={{ title: 'Bài 7' }} />
      <Drawer.Screen name='Project8' component={Project8} options={{ title: 'Bài 8' }} />
      <Drawer.Screen name='Calculator' component={Calculator} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={false} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null
          }}>
          <Stack.Screen name='Root' component={Root} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App