import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

const Tabs = () => {

  const handlePress = () => {
    alert('Button pressed')
  }

  return (
    <ScrollView>
      <View style={styles.items}>
        <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 'auto', height: 150}} />
        <Text style={styles.text}>Latte Macchiato</Text>
        <Text>$ 20</Text>
        <TouchableOpacity style={styles.button} onPress={() => alert('Brewed Latte Macchiato!')}>
          <Text style={styles.buttonText}>Brew it</Text>
        </TouchableOpacity>        {/* <Image source={{ uri: 'https://cdn.pickuplimes.com/cache/65/53/65533cbd82dee4f34221449c6efa9b71.jpg' }} style={{ width: 100, height: 100}} /> */}
      </View>
    </ScrollView>
  )
}

export default Tabs

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: 'white',
  //   padding: 10,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   // gap: 50,
  //   justifyContent: 'space-evenly',
  //   margin: 'auto',
  //   borderRadius: 20,
  // }

  items: {
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 'auto',
    borderRadius: 20,
    padding: 20,
    gap: 10
  },

  button: {
    marginTop: 0, // Add some space above the button
    padding: 0, // Add padding inside the button
    backgroundColor: 'transparent', // Make background transparent
  },
  buttonText: {
    color: 'brown', // Set the text color to brown
    fontSize: 16, // Optional: set font size
    textAlign: 'center', // Center the text
    padding: 5
  }
})