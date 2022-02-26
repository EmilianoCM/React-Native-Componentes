import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/appInterfeace'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props {
    menuItem:MenuItem
}

export const FlatListMenuItem = ({menuItem}:Props) => {
    
    return (
    <TouchableOpacity
        activeOpacity={0.8}
        //as any
    >
    
      <View style={style.container}>

          <Icon
            name={menuItem.Icon}
            color="gray"
            size={ 23 }
          />

          <Text>{ menuItem.name } - { menuItem.Icon }</Text>
          
          <View style = {{flex:1}} />

          <Icon
              name="chevron-forward-outline"
              color="gray"
              size={ 23 }
            />
         

      
      </View>
    
    </TouchableOpacity>
);

}


const style = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    itemText:{

    }
})
