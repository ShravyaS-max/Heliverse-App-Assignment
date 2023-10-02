import React from 'react';
import { View, Text, Image } from 'react-native';

function TeamMember({ member }) {
  return (
    <View>
      <Image source={{ uri: member.avatar }} style={{ width: 50, height: 50 }} />
      <Text>Name: {`${member.first_name} ${member.last_name}`}</Text>
      <Text>Email: {member.email}</Text>
      <Text>Domain: {member.domain}</Text>
      <Text>Gender: {member.gender}</Text>
    </View>
  );
}

export default TeamMember;
