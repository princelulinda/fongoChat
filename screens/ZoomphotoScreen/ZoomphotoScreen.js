import { Image, View } from "react-native";
import { GREEN, RED } from "../../assets/COLORS/color";

export default function ZoomphotoScreen({route}) {
    console.log(route.params.image);
  return (
   <View style={{flex:1, alignItems:"center", padding:0, backgroundColor:"black"}}>
    <Image source={{ uri: route.params.image}} style={{ width: 370, height: 400,margin:0, marginTop:40}} />
   </View>
  )
}
 