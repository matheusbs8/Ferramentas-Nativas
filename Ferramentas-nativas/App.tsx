import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Map from './assets/pages/Location';
import Foto from './assets/pages/Camera';
import Home from './assets/pages/Home';
const Stack = createStackNavigator()

export default function App() {

  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Localizacao' component={Map}/>
          <Stack.Screen name='Camera' component={Foto}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
