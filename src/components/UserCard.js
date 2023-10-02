import React from 'react';
import { View, Text, Image, Button } from 'react-native';

function UserCard({ user, addToTeam }) {
  return (
    <View>
      <Image source={{ uri: user.avatar }} style={{ width: 50, height: 50 }} />
      <Text>Name: {`${user.first_name} ${user.last_name}`}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Domain: {user.domain}</Text>
      <Text>Gender: {user.gender}</Text>
      <Button title="Add to Team" onPress={() => addToTeam(user)} />
    </View>
  );
}

export default UserCard;
