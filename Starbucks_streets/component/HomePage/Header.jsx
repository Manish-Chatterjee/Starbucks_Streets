import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import the icon set
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Header = ({header}) => {
  return (
    <View style={styles.header}>
      <FontAwesome name="bell" size={24} color="black" />
      <Text style={styles.headerText}>{header}</Text>
      <SimpleLineIcons name="options-vertical" size={24} color="black" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerText: {
      textAlign: 'center',
      fontSize: 30,
      color: '#04643c',
      fontWeight: 700
  },
})