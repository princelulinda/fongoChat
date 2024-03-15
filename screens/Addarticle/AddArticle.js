import React, { useState,useEffect} from 'react';
import { Image, StyleSheet, TextInput, Button, View, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { BLUE } from '../../assets/COLORS/color';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { auth } from '../../firebaseServises/firebaseConfing/firebase.config';
import { db } from '../../firebaseServises/firebaseConfing/firebase.config';
import { collection, addDoc, doc, updateDoc, serverTimestamp, increment } from "firebase/firestore";

const AddArticle = () => {
  const [text, setText] = useState('');
  const [charactersRemaining, setCharactersRemaining] = useState(280);
  const [imageUri, setImageUri] = useState(''); // Use imageUri instead of image_

  const article = {
    text,
    image: '', // Will be filled after image upload
    user: {
      uid: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      photo: auth.currentUser.photoURL,
    },
    datePublication: new Date(),
  };

  // Handle potential errors during image upload gracefully
  useEffect(() => {
    const handleImageError = (error) => {
      console.error("Error fetching image URL:", error);
      // Display an error message to the user (consider using a UI component)
    };

    return () => {
      // Cleanup function (optional)
    };
  }, []);

  const handleAddArticle = async () => {
    const newArticleId = `article-${Date.now()}`;

    try {
      article.image = imageUri;
      await addDoc(collection(db, "Publication"), {
        ...article,
        createdAt: serverTimestamp(),
      });

      console.log("Article added successfully!", "success");
      setText("");
      setImageUri("");
      setCharactersRemaining(280);
    } catch (error) {
      console.error("Error adding article:", error);
      // Handle adding article error (consider displaying an error message)
    }
  };

  const handleTextChanged = (text) => {
    setText(text);
    setCharactersRemaining(280 - text.length);
  };

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
      }
    } catch (error) {
      console.error("Error opening image picker:", error);
      // Handle image picker error (consider displaying an error message)
    }
  };
console.log(imageUri);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        maxLength={280}
        onChangeText={handleTextChanged}
        value={text}
      />
       <View  style ={styles.buttonIcon}>

            <TouchableOpacity onPress={openImagePicker}>
            <Entypo name="camera" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>

              <Entypo name="video-camera" size={24} color="black" />
            </TouchableOpacity>
              
        </View>
      <View>
        {imageUri? <Image source={{ uri: imageUri}} style={{ width: 200, height: 150 }} />: ""}
      
      </View>
      <View style={styles.footer}>
      <TouchableOpacity
      onPress={handleAddArticle}
      style={[styles.button]}>
      <Text style={styles.buttonText} >publier</Text>
    </TouchableOpacity>
      </View>
      <Text style={styles.charactersRemaining}>{charactersRemaining} caractères restants</Text>
    </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    height: 100,
    borderColor: BLUE,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonIcon:{
    display:"flex",
    flexDirection:"row",
    gap:10
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  charactersRemaining: {
    fontSize: 12,
    color: BLUE,
  },
  button: {
    backgroundColor: BLUE,
    borderRadius: 5,
    padding: 15,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddArticle;

// { uri:articles.user.photo? articles.user.photo: ""}