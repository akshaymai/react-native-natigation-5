import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { RootStackParamsList } from "../App";

type AboutScreenNavigationProp=StackNavigationProp<RootStackParamsList,'About'>

type Props={
    navigation:AboutScreenNavigationProp
}
export function AboutScreen({navigation}:Props) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>About Screen</Text>
        <Button title='Go to home' onPress={()=>navigation.popToTop()}/>
      </View>
    );
  }
  