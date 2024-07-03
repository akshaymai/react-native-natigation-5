import {NavigationContainer} from '@react-navigation/native';
import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
 
type RootStackParamsList={
Home:undefined,
About:undefined,
Profile:undefined,
Dashboard:undefined,
}

type HomeScreenNavigationProps=StackNavigationProp<RootStackParamsList,'Home'>
type AboutScreenNavigationProp=StackNavigationProp<RootStackParamsList,'About'>
type ProfileScreenNavigationProp=StackNavigationProp<RootStackParamsList,'Profile'>
type DashboardScreenNavigationProp=StackNavigationProp<RootStackParamsList,'Dashboard'>


type HomeProps={
  navigation:HomeScreenNavigationProps
}
type AboutProps={
  navigation:AboutScreenNavigationProp
}
type ProfileProps={
  navigation:ProfileScreenNavigationProp
}
type DashboardProps={
  navigation:DashboardScreenNavigationProp
}


function HomeScreen({navigation}:HomeProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{
        color:'red'
      }}>Home Screen</Text>
      <Button title='Go to about' onPress={()=>navigation.navigate('About')}/>
    </View>
  );
}
function AboutScreen({navigation}:AboutProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Screen</Text>
      <Button title='Go to Profile' onPress={()=>navigation.push('Profile')}/>

    </View>
  );
}

function ProfileScreen({navigation}:ProfileProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button title='Go to About' onPress={()=>navigation.goBack()}/>

    </View>
  );
}
function DashboardScreen({navigation}:DashboardProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dashboard Screen</Text>
      <Button title='Go to home' onPress={()=>navigation.popToTop()}/>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle:{
          backgroundColor:'#009387' 
         },
         headerTintColor:'#fff',
         headerTitleStyle:{
          fontWeight:'bold'
         }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
        

        }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
