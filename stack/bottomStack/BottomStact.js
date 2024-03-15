import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home/Home";
import Discution from "../../screens/Discution/Discution";
import { Entypo,AntDesign, Ionicons, FontAwesome5} from '@expo/vector-icons';
import Notification from "../../screens/Notification/Notification";
import ProfileComponent from "../../screens/Profil/Profil";
import { BOXSHADOW } from "../../composant/BoxShadow/Boxshadow";
import AddArticle from "../../screens/Addarticle/AddArticle";

const Tab =  createBottomTabNavigator()

export const BottomStack =()=>{
    return(
        <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle:[{
            shadowColor: '#1F319D',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 50.84,
            elevation: 30,
        }, {
            backgroundColor:"#FFF",
            paddingVertical:10,
            borderRadius:20,
            padding:20,
            height:"13vh",
            marginBottom:"1vh",
            width:"95%",
            marginLeft:"2.5%",
            display: "none"? route.name== "Home": "flex"
        }],
        tabBarShowLabel:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = 'home';
            size = focused ? 40 : 30
            color = focused ? "#1F319D" : "#000"
          } else if (route.name === 'message') {
            size = focused ? 40 : 30
            color = focused ? "#1F319D" : "#000"
            return(
                <AntDesign name="message1" size={size}color={color} />
            )
          } else if(route.name === "Notification"){
            size = focused ? 40 : 30
            color = focused ? "#1F319D" : "#000"
            return(
            <Ionicons name="notifications" size={size}color={color} />
            )
          }else if(route.name ==="Profil"){
            size = focused ? 40 : 30
            color = focused ? "#1F319D" : "#000"
            return(
                <FontAwesome5 name="user" size={size}color={color} />
            )
          }

        return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={Home} options={{
        headerShown:false
      }}/>
      <Tab.Screen name="message" component={Discution} 
      options={{
        headerShown:false
      }}/>
      <Tab.Screen name="Notification" component={Notification} 
      options={{
        headerShown:false,
      }}/>
      <Tab.Screen name="Profil" component={ProfileComponent} 
      options={{
        headerShown:false
      }}/>

    </Tab.Navigator>
    )
}