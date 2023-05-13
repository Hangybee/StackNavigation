import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './screens/Search';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [name, setName] = useState("")
  const btnAction = () =>{
    console.warn('asset')
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ // will be applied to every header
          headerStyle:{
            backgroundColor:'yellow'
          }
        }}
      >
        <Stack.Screen name="Home" component={Home}
          options={{
            headerTitle:()=><Button onPress={btnAction} title='Left' />,
            headerRight:()=><Search  />,
            title: 'User logins',
            headerStyle:{
              backgroundColor:'blue'
            },
            headerTitleStyle:{
              fontSize:25
            },
            headerTintColor:'yellow'
          }} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
