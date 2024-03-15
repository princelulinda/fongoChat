import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import { auth, db } from '../../../firebaseServises/firebaseConfing/firebase.config';
import { createUserWithEmailAndPassword, updateProfile,onAuthStateChanged} from '@firebase/auth';
import { BLUE } from '../../../assets/COLORS/color';
import { BOXSHADOW } from '../../../composant/BoxShadow/Boxshadow';
import { useNavigation } from '@react-navigation/native'; // Import for navigation
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Image } from 'react-native';

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Use camelCase for consistency
  const [user, setUser] = useState(null);
  const photoURL = "../../../assets/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521"

  const navigation = useNavigation(); // Access navigation for navigation.navigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  async function Register() {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      updateProfile(user, {
        displayName:username,
        photoURL:photoURL
      })
      if (auth.currentUser) {
        navigation.navigate("Home")
        
      }
     
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('Email déjà utilisé'); // Set appropriate error message
      } else if (error.code === 'auth/invalid-email') {
        setMessage('Email incorrect');
      } else if (error.code === 'auth/weak-password') {
        setMessage('Votre mot de passe doit contenir au moins 6 caractères');
      } else {
        console.error(error); // Log other errors for debugging
        setMessage('Une erreur est survenue'); // Generic error message for users
      }
    }
  }

  const handleSubmit = () => {
    Register();
  };


  return (
    <View style={styles.container}>
       <Image source={require('../../../assets/fongolachat-high-resolution-logo-transparent.png')} style = {{
    resizeMode: 'contain',
    width: 200, height: 100
  }}/>
      <TextInput
        style={styles.formInput}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />


      <TextInput
        style={styles.formInput}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
      />
 <Text style={{color:"red"}}> 
  {message}
 </Text>
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.submitButton}
      >
       <Text style= {{color:"#FFF", fontWeth:"bold"}}>
        Register
       </Text>
    
      </TouchableOpacity>
      <Text>

connecter avec -
</Text>
<View style ={styles.containerIcons}>
   <TouchableOpacity style = {[BOXSHADOW,styles.Icon]}>
   <AntDesign name="google" size={24} color="#3c3d3c" />
   </TouchableOpacity>
   <TouchableOpacity style = {[BOXSHADOW,styles.Icon]}>
   <Feather name="facebook" size={24} color="#3c3d3c" />
   </TouchableOpacity>
   <TouchableOpacity style = {[BOXSHADOW,styles.Icon]}>
   <AntDesign name="twitter" size={24} color="#3c3d3c" />
   </TouchableOpacity>
</View>
<Text style={{marginTop:30}}>
  tu n'as pas un compte? <TouchableOpacity style={{color:BLUE, fontWeight:"bold"}}>Se connecter</TouchableOpacity>
</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems:"center",
    marginTop:70,
    gap:15
  },
  formInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: BLUE,
    color: '#fff',
    padding: 20,
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    alignItems:"center"
    
  },
  containerIcons:{
    flexDirection:"row",
    gap:7
  },
  Icon:{
    backgroundColor:"#FFF",
    padding:20,
    borderRadius:10
  }
});

export default SignUp;