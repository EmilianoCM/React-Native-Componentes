import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface MenuItem {
  name:string;
  Icon:string;
  components:string;
}

const menuItems = [
  {
    name:'Animation 101',
    Icon:'cube-outline',
    components:'Animation101Screen'    
  }
]



export const HomeScreen = () => {
  
  const renderMenuitem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>{ menuItem.name } - { menuItem.Icon }</Text>
      </View>
    )
  }
  
  
  return (
    <View style={{flex:1}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuitem(item) }
        keyExtractor={ (item) => item.name}
      />

    </View>
  )
}
