
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity,StyleSheet } from 'react-native'
import { BLUE } from '../../assets/COLORS/color';
import { BOXSHADOW } from '../BoxShadow/Boxshadow';

export default function AddArticleBtn({navigation}) {
const handleArticle = ()=>{
    navigation.navigate("Add article")
}
  return (
  <TouchableOpacity style={[BOXSHADOW.boxShadow,styles.contener]} onPress={handleArticle}>
    <AntDesign name="plus" size={40} color="#fff" />
  </TouchableOpacity>
  )
}
const styles =StyleSheet.create({
    contener:{
   backgroundColor:BLUE,
   padding:20,
   borderRadius:"50%",
   width:"10vh",
   height:"10vh",
   justifyContent:"center",
   alignItems:"center",
   position:"absolute",
   top:"70vh",
   right:"10%"
    }
})