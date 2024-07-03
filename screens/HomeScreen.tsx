import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { RootStackParamsList } from "../App";

type HomeScreenNavigationProps=StackNavigationProp<RootStackParamsList,'Home'>

type Props = {
    navigation: HomeScreenNavigationProps;
  };

function HomeScreen({navigation}:Props) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{
          color:'red'
        }}>Home Screen</Text>
        <Button title='Go to about' onPress={()=>navigation.navigate('About')}/>
      </View>
    );
  }

  export default HomeScreen