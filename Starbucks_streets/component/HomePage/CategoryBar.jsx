import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryBar = () => {
  return (
    <View>
      <Text style={styles.categoryBarText}>CategoryBar</Text>
      <ScrollView horizontal style={styles.categoryBar}>
        <Text style={styles.categoryItem}>Coffee</Text>
        <Text style={styles.categoryItem}>Tea</Text>
        <Text style={styles.categoryItem}>Nom Nom</Text>
      </ScrollView>
    </View>
  )
}

export default CategoryBar

const styles = StyleSheet.create({
  categoryBar: {
    marginBlock: 10
  },
  categoryItem: {
    marginInline: 10, // Add some spacing between items
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    fontWeight: 'bold',
  },
  categoryBarText: {
    fontWeight: 'bold'
  }
})