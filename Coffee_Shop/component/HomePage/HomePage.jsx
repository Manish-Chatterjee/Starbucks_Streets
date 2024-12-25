// App.js
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeSection from './HomeSection';
import { TbBackground } from 'react-icons/tb';
import { Bar } from 'react-native-progress';

export default function HomePage({ route }) {
  const currentPoints = 21; // Current points
  const totalPoints = 100; // Total points
  const progress = currentPoints / totalPoints; // Calculate progress
  const stars = totalPoints - currentPoints;

    // const { username } = route.params; // Get the username from the route params

  return (
    <View style={{backgroundColor: "#04643c"}}>
      <View style={styles.container}>
        <View>
          <Text style={{color: 'white'}}>Good Morning</Text>
          <Text style={styles.name}>Manish</Text>
        </View>
        <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 60, height: 60, borderRadius: 100, borderWidth: 1, borderColor: 'white'}} />
      </View>


      <View style={styles.card}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: "#04643c"}}>STARBUCKS REWARD</Text>
          <Text style={{fontWeight: 'bold', color: "#4c8b66"}}>Green Card</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: "#04643c"}}>21 </Text>
          <Text style={{fontSize: 16, fontWeight: "bold", color: "#04643c"}}>/ 100 </Text>
          <AntDesign name="star" size={16} color="#d4c495" />
        </View>
          <Bar 
            progress={progress}
            width={200} 
            height={15}
            color="#04643c"
            style={styles.progressBar} 
          />
          <Text style={{fontSize: 12, fontWeight: 600, color: "#04643c"}}>{stars} Stars to Next Reward</Text>
      </View>

      <HomeSection/>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingInline: 20,
    alignItems: 'center',
    marginBlock: 20
  },

  card: {
    width: "80%",
    aspectRatio: 1.8/1,
    borderRadius: 15,

    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 'auto',
    backgroundColor: 'white',
    marginBottom: 20,

            // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
  },
  cardText: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  progressBar: {
    height: 15,
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: 'white'
  }
});