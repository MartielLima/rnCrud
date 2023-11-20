import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const initialState = { users };
const UsersContext = createContext({});

const createID = (state) => {
  const quantUsers = state.users.length;
  if (quantUsers === 0) return 1;
  const maxIdUser = state.users[quantUsers - 1].id;
  return maxIdUser + 1;
};

export const UsersProvider = (props) => {
  function reducer(state, action) {
    const user = action.payload;

    switch (action.type) {
      case 'deleteUser':
        return {
          ...state,
          users: state.users.filter((u) => u.id !== user.id),
        };
      case 'createUser':
        user.id = createID(state);
        return {
          ...state,
          users: [...state.users, user],
        };
      case 'updateUser':
        const updated = action.payload;
        return {
          ...state,
          users: state.users.map((u) => (u.id === updated.id ? updated : u)),
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
