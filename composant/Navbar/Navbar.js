
import { TouchableOpacity, View } from "react-native";
import Title from "../title/Title";
import { Header } from "react-native-elements";
import { BOXSHADOW } from "../BoxShadow/Boxshadow";
export default function Navbar({title}){
    return(
        <Header
        placement="left"
        leftComponent={{ text: `${title}`,style: { color: '#fff', fontSize:25, fontWeight:"bold"} }}
        rightComponent={{ icon: 'search', color: '#fff'}}
        containerStyle={[BOXSHADOW.boxShadow, {
            backgroundColor: '#1F319D',
            height:"15vh",
            paddingHorizontal:20,
            
          }]}
         

      />
    )

}