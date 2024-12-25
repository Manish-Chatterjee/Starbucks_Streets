import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './HomePage/Header'
import HomePage from './HomePage/HomePage'
import Navbar from './Navbar'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header header="Starbucks"/>
      <HomePage/>
      <View style={styles.navbar}>
        <Navbar/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1, // This allows the View to take the full height of the screen
  },
  navbar: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0, // This will stretch the navbar to the full width
    zIndex: 10,
    height: 80,
    alignItems: 'center', // Center the content horizontally
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    borderRadius: 10
  }
})