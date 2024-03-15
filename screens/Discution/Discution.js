
import Navbar from '../../composant/Navbar/Navbar'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Image, ScrollView } from 'react-native';
import { data } from '../../assets/MOCK_DATA ';
import { TouchableOpacity } from 'react-native';
console.log(data[0].avatar);
export default function Discution({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress style={{ borderWidth: 1,
       borderColor: '#ccc',
        padding: 10, display:"flex",
         flexDirection:"row",
         alignItems:"center"
          }}>
        <View>
        <Image source={{ uri: item.avatar}} style={{ width: 80, height: 80, borderRadius:50}} />
        </View>
        <Text style={{ fontSize: 18 }}>{item.first_name}</Text>
        <Text>{item.last_name}</Text>
      </TouchableOpacity>
    );
  };

  return (

    <ScrollView>
        <Navbar title={"Discution"}/>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 18,
  },
  number: {
    fontSize: 16,
    color: '#666',
  },
});