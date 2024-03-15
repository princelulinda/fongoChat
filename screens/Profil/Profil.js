import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Navbar from '../../composant/Navbar/Navbar'
import { BLUE,GREEN, RED } from '../../assets/COLORS/color'
import { launchImageLibrary } from 'react-native-image-picker';
import { AntDesign, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { BOXSHADOW } from '../../composant/BoxShadow/Boxshadow';
import ZoomphotoScreen from '../ZoomphotoScreen/ZoomphotoScreen';
import { Text } from 'react-native';

export default function Profil({navigation}) {
  const [imageUri, setImageUri] = useState('')

  const openImagePicker = async () => {

    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: false, // Consider including base64 if needed
        maxHeight: 2000,
        maxWidth: 2000,
      });

      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorMessage) {
        console.error('Image picker error:', result.errorMessage);
        // Handle image picker error (consider displaying an error message)
      } else {
        const { uri } = result.assets[0]; // Assuming single image selection
        setImageUri(uri);
        handleZoomPhoto
      }
    } catch (error) {
      console.error("Error opening image picker:", error);
      // Handle image picker error (consider displaying an error message)
    }
  };
  const handleZoomPhoto = ()=>{
    
    if (imageUri) {
      navigation.navigate("imageZoom", {image:imageUri})
    }
    else{
      navigation.navigate("imageZoom", {image:"../../assets/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"})
    }
    
  }
  return (
    <ScrollView>
      
<View >
<View style={[{backgroundColor:BLUE,
    marginTop:-30,
    width:"100%",
    height:200},styles.contener]}>
 
</View>
<View style={[{marginTop:-120},styles.contener]}>
<TouchableOpacity onPress={handleZoomPhoto} >
    <Image style={styles.image} source={imageUri?{uri:imageUri}:{ uri: "../../assets/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"}}
 />  
   <TouchableOpacity onPress={openImagePicker}>
  <View style={[styles.iconCamera,BOXSHADOW]}>
      <FontAwesome6 name="camera" size={24} color={BLUE} />
    </View>
  </TouchableOpacity>
  </TouchableOpacity>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>username</Text>
      <Text style={{ marginBottom: 10 }}>princelulinda@gmail.com</Text>
</View>
  <View style={{ padding: 20, borderRadius: 10}}>
      <TouchableOpacity  style={[BOXSHADOW,{backgroundColor: "white",},styles.listItem]}>
        <View style={[BOXSHADOW,{backgroundColor:RED, padding:10, borderRadius:10, marginRight:10}]}>
        <AntDesign name="edit" size={24} color="white"  />
        </View>
        <Text style={{ marginLeft: 10 }}>Editer le profil</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[BOXSHADOW,{backgroundColor: "white",},styles.listItem]}>
        <View style={[BOXSHADOW,{backgroundColor:GREEN, padding:10, borderRadius:10, marginRight:10}]}>
        <AntDesign name="setting" size={24} color="black" />
        </View>
        <Text style={{ marginLeft: 10 }}>setting</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[BOXSHADOW,{backgroundColor: "white"},styles.listItem]}>
        <View style={[BOXSHADOW,{backgroundColor:RED, padding:10, borderRadius:10, marginRight:10}]}>

      <FontAwesome6 name="question" size={24} color="black" />
        </View>
        <Text style={{ marginLeft: 10 }}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={[BOXSHADOW,{backgroundColor:BLUE},styles.listItem]}>
        <AntDesign name="logout" size={24} color="white" />
        <Text style={{ marginLeft: 10, color:"white" }}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
</View>
    </ScrollView>
     )
}
const styles = StyleSheet.create({
  contener:{
    justifyContent:"center",
    alignItems:"center",
  },
  image:{
    borderRadius:"50%",
    backgroundColor:GREEN,
    width:200,
    height:200
  },
  listItem:{
   width:"100%",
   padding:15,
   borderRadius:7,
   flexDirection: 'row', 
   alignItems: 'center', 
   marginTop:10

  },
  iconCamera:{
    backgroundColor:"white",
    borderRadius:50,
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    marginTop: -45,
    marginLeft:"60%"

  }
})
