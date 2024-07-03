import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { ProfileScreen } from './screens/Profile';
import { AboutScreen } from './screens/AboutScreen';
import { DashboardScreen } from './screens/Dashboard';
 
export type RootStackParamsList={
Home:undefined,
About:undefined,
Profile:undefined,
Dashboard:undefined,
}

const Stack = createStackNavigator<RootStackParamsList>();

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
