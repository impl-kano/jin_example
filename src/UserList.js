import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from './redux/Users/usersSaga';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onPress = () => {
    dispatch(getUser);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 28}}>あああ</Text>
      <Button title="ユーザーフェッチ" onPress={onPress} />
      {users.isLoading && <ActivityIndicator size="large" />}
      {users.data.map((user) => (
        <Text>{user.name}</Text>
      ))}
    </View>
  );
};

export default UserList;
