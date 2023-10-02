import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import UserCard from '../components/UserCard';
import { filterData } from '../utils/filterData';
import { userData } from '../data/userData';

function UserListScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    domain: '',
    gender: '',
    availability: false,
  });

  const filteredUsers = filterData(userData, searchTerm, selectedFilters);

  // Pagination logic here

  return (
    <View>
      <TextInput
        placeholder="Search by Name"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      {/* Filter options here */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserCard user={item} addToTeam={() => {/* Implement addToTeam */}} />
        )}
        // Pagination component here
      />
      <Button
        title="View Team"
        onPress={() => navigation.navigate('TeamScreen', { teamData: teamData })}
      />
    </View>
  );
}

export default UserListScreen;
