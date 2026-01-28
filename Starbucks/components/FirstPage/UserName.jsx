import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const UserName = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (username) {
      navigation.navigate('HomePage', { username }); // Pass the username to HomePage
    }
    setUsername('')
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default UserName;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
});