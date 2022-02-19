import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screen/HomeScreen';
import { StackNavigator } from './src/components/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App