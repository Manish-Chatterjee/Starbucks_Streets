// SearchBar.js
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 5,
    overflow: 'hidden',
  },
  input: {
    height: 40,
    // width: '100%',
    paddingHorizontal: 10,
    borderWidth: 2, // Add border width
    borderColor: '#000000', // Add border color
    borderRadius: 100, // Optional: add border radius for rounded corners
  },
});

export default SearchBar;