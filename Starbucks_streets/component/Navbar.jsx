import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';

export default function Navbar() {
  return (
    <BlurView
      style={styles.container} // Apply BlurView to the container
      intensity={20} // Adjust blur intensity (0 to 100)
      tint="light" // Choose tint: 'light', 'dark', or 'default'
    >
      <TouchableOpacity style={styles.button} onPress={() => alert("order is still under work")}>
        <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 50, height: 50}} />
        <Text style={styles.buttonText}>order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("activity is still under work")}>
      <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 50, height: 50}} />
        <Text style={styles.buttonText}>activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("e-code is still under work")}>
      <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 50, height: 50}} />
        <Text style={styles.buttonText}>e-code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("store is still under work")}>
      <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 50, height: 50}} />
        <Text style={styles.buttonText}>store</Text>
      </TouchableOpacity>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.37)', // White background with 50% opacity
    overflow: 'hidden', // Ensures the blur effect stays within the container
    flex: 1,
    paddingInline: 10,

    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    borderRadius: 100
  },
  button: {
    // backgroundColor: 'grey',
    padding: 10,
    // marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    aspectRatio: 1/1
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
});