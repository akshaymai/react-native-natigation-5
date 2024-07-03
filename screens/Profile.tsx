import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { RootStackParamsList } from "../App";

type ProfileScreenNavigationProp=StackNavigationProp<RootStackParamsList,'Profile'>

type Props={
    navigation:ProfileScreenNavigationProp
}
export function ProfileScreen({navigation}:Props) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
        <Button title='Go to About' onPress={()=>navigation.goBack()}/>
  
      </View>
    );
  }