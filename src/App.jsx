import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import UserForm from './views/UserForm';
import UserList from './views/UserList';
import { Button, Icon } from '@rneui/base';
import { UsersProvider } from './context/UsersContext';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <>
      <StatusBar style="auto" />
      <UsersProvider>
        <NavigationContainer>
          <Stack.Navigator // Navigator
            initialRouteName="UserList"
            screenOptions={screenOptions}
          >
            <Stack.Screen // tela onde ficam listados os usuarios cadastrados
              name="UserList"
              component={UserList}
              options={({ navigation }) => {
                return {
                  title: 'Lista de Usuários',
                  headerRight: () => (
                    // Adicionando navegação no header
                    <Button
                      onPress={() => navigation.navigate('UserForm')}
                      type="clear"
                      icon={<Icon name="add" size={25} color="white" />}
                    />
                  ),
                };
              }}
            />

            <Stack.Screen // tela de cadastro ou modificação dos usuarios
              name="UserForm"
              component={UserForm}
              options={{
                title: 'Formulario de Usuários',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UsersProvider>
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
