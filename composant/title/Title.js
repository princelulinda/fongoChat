import { View,Text,StyleSheet } from "react-native"
import { BLUE } from "../../assets/COLORS/color"


export default function Title({title}){
    return(
        <View >
            <Text style = {styles.title}>
              {title}
            </Text>

            </View>
    )
}
const styles = StyleSheet.create({
  title:{
    fontSize:32,
    fontWeight:"bold",
     color:BLUE,
      marginBottom:20
  }
})