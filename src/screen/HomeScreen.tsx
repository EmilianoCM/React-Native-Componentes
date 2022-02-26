import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/appInterfeace';
import { style } from '../theme/appTheme';



const menuItems:MenuItem[] = [
  {
    name:'Animation 101',
    Icon:'cube-outline',
    components:'Animation101Screen'    
  },
  {
    name:'Animation 102',
    Icon:'albums-outline',
    components:'Animation102Screen'    
  }
]



export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();
  

  const renderListHeader = () =>{
    return(
      <View style={{marginTop: top + 20, marginBottom: 20}}>
         <Text style={style.title}>Opciones de Menú</Text>
      </View>
    )
  }

  const itemSeparator = () =>{
    return(
      <View 
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8
        }}>

      </View>
    );
  }
  
  
  return (
    <View style={{flex:1, ...style.globalMargin}}>
      
      
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} /> }
        keyExtractor={ (item) => item.name}
        ListHeaderComponent={ ()=> renderListHeader() }
        //Cuando no se envia argumentos, se pone solo la referencia a la funcion.
        ItemSeparatorComponent={ itemSeparator}
      />

    </View>
  )
}
