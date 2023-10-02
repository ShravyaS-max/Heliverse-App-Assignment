import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TeamMember from '../components/TeamMember';

function TeamScreen({ route }) {
  const { teamData } = route.params;

  return (
    <View>
      <Text>Team Details:</Text>
      <FlatList
        data={teamData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TeamMember member={item} />
        )}
      />
    </View>
  );
}

export default TeamScreen;
