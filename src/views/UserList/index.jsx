import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button } from '@rneui/themed';
import UsersContext from '../../context/UsersContext';

export default (props) => {
  const { state, dispatch } = useContext(UsersContext);

  function confirmUserDelete(user) {
    Alert.alert('Excluir Usuários', 'Deseja excluir o usuários?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getButtonEdit(user) {
    return (
      <Button
        containerStyle={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#f4f4f4',
        }}
        type="clear"
        icon={{
          name: 'archive-outline',
          type: 'material-community',
        }}
        onPress={() => props.navigation.navigate('UserForm', user)}
      />
    );
  }

  function getButtonDelete(user) {
    return (
      <Button
        containerStyle={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#f4f4f4',
        }}
        type="clear"
        icon={{ name: 'delete-outline' }}
        onPress={() => confirmUserDelete(user)}
      />
    );
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem.Swipeable
        leftWidth={80}
        rightWidth={90}
        minSlideWidth={40}
        key={user.id}
        bottomDivider
        // leftContent={() => getButtonEdit(user)} // Quando deslizado da esquerda para a direita
        rightContent={() => getButtonDelete(user)} // Quando deslizado da direita para a esquerda
        onPress={() => props.navigation.navigate('UserForm', user)}
      >
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
