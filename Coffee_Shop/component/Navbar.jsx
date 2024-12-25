import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 50, height: 50}} />
        <Text style={styles.buttonText}>order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 50, height: 50}} />
        <Text style={styles.buttonText}>activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 50, height: 50}} />
        <Text style={styles.buttonText}>e-code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 50, height: 50}} />
        <Text style={styles.buttonText}>store</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    flex: 1,
    // padding: 10,

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