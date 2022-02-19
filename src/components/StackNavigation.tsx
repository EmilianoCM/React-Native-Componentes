import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen';


export type RootStackParams = {
HomeScreen:undefined;

}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //Para iniciar desde otra pagina que no sea la primera de la pila. 
      screenOptions={{
        headerShown:false,
        headerStyle:{
          elevation:0,
          // shadowColor:'transparent',
          backgroundColor:'white'
        },
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" options={{title:"HomeScreen"}} component={HomeScreen} />
    </Stack.Navigator>
  );
}