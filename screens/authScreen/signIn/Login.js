import { StyleSheet, View, TextInput, Button, Image,Text, TouchableOpacity, ScrollView } from 'react-native';
import { auth } from '../../../firebaseServises/firebaseConfing/firebase.config';
import { signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect } from 'react';
import useAuthentification from '../../../Hooks/Islogger';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Home/Home';
import { BLUE } from '../../../assets/COLORS/color';
import { BOXSHADOW } from '../../../composant/BoxShadow/Boxshadow';
import { AntDesign,Feather  } from '@expo/vector-icons';


const Stack =  createStackNavigator()

const SignIn= ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
 const logger = useAuthentification(user)


  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
      });

      return () => unsubscribe();
  }, [auth]);

  async function  Login() {

   await signInWithEmailAndPassword(auth,email, password)
   .then(user => {
    if(logger){
      console.log("success");
        navigation.navigate(("Home"))
        
      }
      else{
      }
   })
   .catch(error => {
    console.log(error.code);
    if(error.code =="auth/email-already-in-use"){
    }
    if (error.code == "auth/invalid-email") {
      setmessage("email incorect")
      
    }
    if (error.code == "auth/weak-password") {
      setmessage("votre mot de passe va contenir au moin 6 caractere")
      
    }
   });
}

  const handleSubmit = () => {
    Login()
    setEmail(email)
    setPassword(password)
    
  };

  return (
<ScrollView>
<View style = {styles.container}>
  <Image source={require('../../../assets/fongolachat-high-resolution-logo-transparent.png')} style = {{
    resizeMode: 'contain',
    width: 200, height: 100
  }}/>
  <Text style={{fontSize:18, fontWeight:"bold", marginLeft:-80, color:"#3c3d3c"}}>
    Connecter vous a votre compte
  </Text>
      <TextInput
        style={[BOXSHADOW,styles.formInput]}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[BOXSHADOW,styles.formInput]}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.submitButton}>
          <Text style = {{color:"#fff", fontWeight:"bold"}}>
          S'inscrire
          </Text>
        </TouchableOpacity>
        <Text>

        connecter avec -
        </Text>
        <View style ={styles.containerIcons}>
           <TouchableOpacity style = {[BOXSHADOW,styles.Icon]}>
          <AntDesign name="google" size={24} color={"#3c3d3c"} />
           </TouchableOpacity>
           <TouchableOpacity style = {[BOXSHADOW,styles.Icon]}>
          <Feather name="facebook" size={24} color={"#3c3d3c"} />
           </TouchableOpacity>
           <TouchableOpacity style = {[BOXSHADOW,styles.Icon]}>
          <AntDesign name="twitter" size={24} color={"#3c3d3c"} />
           </TouchableOpacity>
        </View>
        <Text style={{marginTop:30}}>
          tu n'as pas un compte? <TouchableOpacity style={{color:BLUE, fontWeight:"bold"}}>S'inscrire</TouchableOpacity>
        </Text>
    </View>
</ScrollView>
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
    marginTop: 20,
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
export default SignIn;
