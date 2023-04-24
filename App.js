import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Drower/Bangla_version';
import CustomDrawer from './Drower/CustomDrawer';
import DetalseData from './Component/DetalseData';
import BookWriter from './Drower/DrowerItem/BookWriter';
import AboutApp from './Drower/DrowerItem/AboutApp';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen 
      name="Home" 
      component={Home} 
      options={{ 
        title: 'প্রবন্ধ সংকলন ১',
        headerTitle: "প্রবন্ধ সংকলন",
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#2b5d58eb",  
        },
        drawerActiveBackgroundColor: '#74d0b2',
        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        drawerItemStyle: {
          marginVertical: 5,
          borderRadius: 8,
          backgroundColor: '#2b5d58eb',
        },
        drawerLabelStyle: {
          fontSize: 17,
          marginLeft: 10,
          fontWeight: "normal"
        },
      }} 
      />
    </Drawer.Navigator>
  );
};

export default function App({params,route}) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetalseData"
          component={DetalseData}
          options={({route})=>({
            headerTitle: route.params.selector,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#2b5d58eb",  
            }
          })}
        />
        <Stack.Screen
          name="BookWriter"
          component={BookWriter}
          options={({route})=>({
            headerTitle: "Book Writer",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#2b5d58eb",  
            }
          })}
        />
        <Stack.Screen
          name="AboutApp"
          component={AboutApp}
          options={({route})=>({
            headerTitle: "পরিচিতি",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#2b5d58eb",  
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
