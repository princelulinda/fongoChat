import React from 'react';
import { GREENBTN } from '../../assets/COLORS/Color';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './Btn';
import { BOXSHADOW } from '../BoxShadow/Boxshadow';
const  BtnBlue = ({ navigation, title, backgroundColor,navigateComponent }) => {
    return (
      <TouchableOpacity style={[styles.BtnBlue, BOXSHADOW.boxShadow]} onPress= {()=>navigation.navigate(navigateComponent)}>
        <Text style={{ color:"#fff", fontSize:20, fontWeight:"bold"}}>{title}</Text>
      </TouchableOpacity>
    );
  };
  export default BtnBlue;