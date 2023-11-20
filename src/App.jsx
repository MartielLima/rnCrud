import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import UserForm from './views/UserForm';
import UserList from './views/UserList';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'Formulario de Usuarios',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
