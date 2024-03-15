import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/authScreen/signUp/SignUp';
import SignIn from './screens/authScreen/signIn/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home/Home';
import { BottomStack } from './stack/bottomStack/BottomStact';
import Chat from './screens/chatScreen/chatScreen';
import AddArticle from './screens/Addarticle/AddArticle';
import PublicationCard from './composant/card/card';
import ZoomphotoScreen from './screens/ZoomphotoScreen/ZoomphotoScreen';
import { BLUE, GREEN } from './assets/COLORS/color';
import ProfileComponent from './screens/Profil/Profil';

const Stack =  createStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen name='chat' component={Chat}/>
        <Stack.Screen name="profile" component={ProfileComponent}
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name = "Home" component={BottomStack}
       options={{ headerShown:false}}
        />
        <Stack.Screen name='Login' component={SignIn}
        options={
          {
            headerShown:false
          }
        }/>
        <Stack.Screen name='Signup' component={SignUp}
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Add article' component={AddArticle}/>
        <Stack.Screen name='card' component={PublicationCard}/>
        <Stack.Screen name='imageZoom' component={ZoomphotoScreen}  options={
         {
          headerStyle:{
            backgroundColor:BLUE,
          },
         }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
