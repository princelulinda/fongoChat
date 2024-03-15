import { createStackNavigator } from "@react-navigation/stack";
import AddArticle from "../../screens/Addarticle/AddArticle";
import AddArticleBtn from "../../composant/ButtonADDarticle/AddarticleBtn";
import Chat from "../../screens/chatScreen/chatScreen";

const Stack = createStackNavigator()
 
 export default function NavigationStack() {
   return (
     <Stack.Navigator>
        <Stack.Screen name = "Chat" component={Chat}/>
        <Stack.Screen name='Add article' component={AddArticle}/>
     </Stack.Navigator>
   )
 }
 