import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import coffeeItems from '../../data/coffeeItems.json'; // Adjust the path as necessary
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../HomePage/Header';
import { useNavigation } from '@react-navigation/native';

export default function Order() {

      // State to keep track of liked items
  const [likedItems, setLikedItems] = useState({});
    // State to keep track of active button
    const [activeButton, setActiveButton] = useState(null);

  // Function to toggle the liked state
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the liked state
    }));
  };

    // Function to handle button press
    const handleButtonPress = (buttonName) => {
      setActiveButton(buttonName);
    };

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Header header="Order"/>
        <View style={styles.offer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.card}>
                <Image source={{ uri: 'https://miro.medium.com/v2/resize:fit:600/1*5ripYVfVIutphv0soKBUfg.jpeg' }} style={{height: 170, aspectRatio: '2/1', borderRadius: 10, margin: 10}}/>
                <Image source={{ uri: 'https://myvancity.ca/wp-content/uploads/2023/08/SPOT-ONE1_AUG-16_EN.jpg' }} style={{height: 170, aspectRatio: '2/1', borderRadius: 10, margin: 10}}/>
                <Image source={{ uri: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-07/50-off-cold-drinks-starbucks-zz-230726-01-7b2f9e.jpg' }} style={{height: 170, aspectRatio: '2/1', borderRadius: 10, margin: 10}}/>
            </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingBottom: '10'}}>
          <TouchableOpacity onPress={() => handleButtonPress('Your Favorite')}>
            <Text style={[styles.type, activeButton === 'Your Favorite' && styles.activeText]}>Your Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Bundling')}>
            <Text style={[styles.type, activeButton === 'Bundling' && styles.activeText]}>Bundling</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Beverage')}>
            <Text style={[styles.type, activeButton === 'Beverage' && styles.activeText]}>Beverage</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('Grande Morning')}>
            <Text style={[styles.type, activeButton === 'Grande Morning' && styles.activeText]}>Grande Morning</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.coffeeContainer}>
        {coffeeItems.map((item, index) => (
            <View key={item.id || index} style={styles.item}>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                <View style={{gap: 10, marginLeft: 10, flex: 1}}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>Rp {item.price.toFixed(3)}</Text>
                    <TouchableOpacity onPress={() => toggleLike(item.id || index)} style={{width: 35, aspectRatio: 1/1, justifyContent:'center'}}>
                        <AntDesign 
                            name="heart" 
                            size={16} 
                            color={likedItems[item.id || index] ? "red" : "lightgrey"} 
                        />
                    </TouchableOpacity>

                    <View style={styles.itemDetails}>
                        <Text style={{fontSize: 10, margin: 'auto'}}>customizable</Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Customise', {
                            id: item.id || index,
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            includes: item.includes
                          })}
                        >
                          <Text style={styles.addButton}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
  coffeeContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  item: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: 'white',
    // borderRadius: 5,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,

    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgrey'
  },
  itemName: {
    fontSize: 18,
    fontWeight: 600,
    color: '#04643c'
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 600,
    color: '#d4c495',
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#d4c495',
    borderRadius: 100,
    textAlign: 'center',
    width: 70,
    paddingBlock: 2,
    color: '#04643c',
    fontWeight: 600
  },
  itemDetails: {
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  card: {
    paddingBlock: 20,
    flexDirection: 'row',
    backgroundColor: 'white',

    // // Shadow for iOS
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 4,
    // // Shadow for Android
    // elevation: 8,
  },

  offer: {
    borderBottomWidth: 5,
    borderColor: 'lightgrey',
  },

  type: {
    marginInline: 15,
    color: '#cccccc',
    fontWeight: 400
  },

  activeText: {
    color: '#04643c',
    fontWeight: 600
  }
});