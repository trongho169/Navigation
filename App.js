import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Components/HomeScreen';
import DetailScreen from './src/Components/DetailScreen';

const Stack = createStackNavigator();
const App = () =>{
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
}
export default App;
