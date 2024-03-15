import React from 'react';
import { GREENBTN } from '../../assets/COLORS/Color';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BOXSHADOW } from '../BoxShadow/Boxshadow';



const Btn = ({ navigation, title, backgroundColor,navigateComponent }) => {
    return (
      <TouchableOpacity style={[styles.button, BOXSHADOW.boxShadow]} onPress={()=>navigation.navigate(navigateComponent)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };
export const  styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor:GREENBTN,
    width:"90%",
    paddingVertical:20
    
  },
  BtnBlue: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width:"90%",
    paddingVertical:20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    marginTop:10
    
  },
  title: {
    fontSize: 20,
    fontWeight:"bold"
  },
});

export default Btn;
