import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import UsersContext from '../../context/UsersContext';

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UsersContext);

  return (
    <View style={styled.form}>
      <Text>Nome</Text>
      <TextInput
        style={styled.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o Nome"
        value={user.name}
      />

      <Text>Email</Text>
      <TextInput
        style={styled.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe o E-Mail"
        value={user.email}
      />

      <Text>Url do Avatar</Text>
      <TextInput
        style={styled.input}
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Informe o Url do Avatar"
        value={user.avatarUrl}
      />

      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  form: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 3,
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});
