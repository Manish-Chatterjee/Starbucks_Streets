import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper'; // Import RadioButton
import { useNavigation } from '@react-navigation/native';


const SquareRadioButton = ({ value, selectedValue, onPress }) => {
  return (
      <TouchableOpacity
          style={[styles.squareButton, selectedValue === value && styles.selectedButton]}
          onPress={() => onPress(value)}
      >
          {/* <Text style={styles.buttonText}>{value}</Text> */}
      </TouchableOpacity>
  );
};

export default function Customise({ route }) {

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(); // State for radio button
  const [availableIn, setAvailableIn] = useState();
  const [milk, setMilk] = useState();
  const [espressoShot, setEspressoShot] = useState();

      // Function to increase quantity
      const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to decrease quantity
    const decreaseQuantity = () => {
      if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
      }
    };

    // Destructure the parameters from the route
    const { id, name, image, price, includes } = route.params;

    const navigation = useNavigation();

    return (
        <View style={{backgroundColor: 'white'}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 120}}>
            <View style={styles.container}>
              <Image source={{ uri: image }} style={styles.image} />
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.includes}>{includes}</Text>



              <View style={{marginTop: 40, marginBottom: 30}}>
              <RadioButton.Group
                onValueChange={newValue => setSelectedSize(newValue)}
                value={selectedSize}
              >
                <Text style={{fontWeight: 800, fontSize: 11, marginBottom: 10}}>Size</Text>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: 'center'}}>
                      <Image source= {{ uri: 'https://t3.ftcdn.net/jpg/02/98/65/92/360_F_298659202_6y0mYN6XtC8RvhJPYnmmTwEnxJKYNozJ.jpg'}} style={{width: 100, height:100}}/>
                      <Text>Tall</Text>
                        <View style={styles.outerSquareBox}>
                        <SquareRadioButton value="Tall" selectedValue={selectedSize} onPress={setSelectedSize} />
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Image source= {{ uri: 'https://t3.ftcdn.net/jpg/02/98/65/92/360_F_298659202_6y0mYN6XtC8RvhJPYnmmTwEnxJKYNozJ.jpg'}} style={{width: 100, height:100}}/>
                      <Text>Grande</Text>
                      <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Grande" selectedValue={selectedSize} onPress={setSelectedSize} />
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Image source= {{ uri: 'https://t3.ftcdn.net/jpg/02/98/65/92/360_F_298659202_6y0mYN6XtC8RvhJPYnmmTwEnxJKYNozJ.jpg'}} style={{width: 100, height:100}}/>
                      <Text>Venti</Text>
                      <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Venti" selectedValue={selectedSize} onPress={setSelectedSize} />
                      </View>
                    </View>
                  </View>
              </RadioButton.Group>

              <Text style={{fontWeight: 800, fontSize: 11, marginTop: 25, marginBottom: 10}}>Available in</Text>
              <RadioButton.Group
                onValueChange={newValue => setAvailableIn(newValue)}
                value={availableIn}
              >
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Hot" selectedValue={availableIn} onPress={setAvailableIn} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Hot</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>free</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Cold" selectedValue={availableIn} onPress={setAvailableIn} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Cold</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>free</Text>
                </View>
              </RadioButton.Group>

              <Text style={{fontWeight: 800, fontSize: 11, marginTop: 25, marginBottom: 10}}>Milk</Text>
              <RadioButton.Group
                onValueChange={newValue => setMilk(newValue)}
                value={milk}
              >
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Nonfat" selectedValue={milk} onPress={setMilk} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>No Fat</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>free</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Soya Milk" selectedValue={milk} onPress={setMilk} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Soya Milk</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>+8.500</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Almond Milk" selectedValue={milk} onPress={setMilk} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Almond Milk</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>+19.000</Text>
                </View>
              </RadioButton.Group>

              <Text style={{fontWeight: 800, fontSize: 11, marginTop: 25, marginBottom: 10}}>Espresso Shot</Text>
              <RadioButton.Group
                onValueChange={newValue => setEspressoShot(newValue)}
                value={espressoShot}
              >
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Extra 1 Espresso Shot" selectedValue={espressoShot} onPress={setEspressoShot} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Extra 1 Espresso Shot</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>+6.000</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Extra 2 Espresso Shot" selectedValue={espressoShot} onPress={setEspressoShot} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Extra 2 Espresso Shot</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>+12.000</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value="Extra 3 Espresso Shot" selectedValue={espressoShot} onPress={setEspressoShot} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Extra 3 Espresso Shot</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>+18.000</Text>
                </View>
              </RadioButton.Group>
                

              </View>
            </View>
          </ScrollView>



            <View style={styles.quantityBottomSection}>
              <View style={{width: 120, marginTop: 20}}>
                <Text style={{textAlign: 'center', marginBottom: 10, color: 'white', fontSize: 14}}>Item quantity</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <AntDesign 
                    name="minuscircleo" 
                    size={40} 
                    color={quantity > 1 ? "#d4c495" : "grey"} // Change color if disabled 
                    onPress={decreaseQuantity} 
                    disabled={quantity <= 1} // Disable the button if quantity is 1
                  />
                  <Text style={{color: 'white', fontWeight: 600, fontSize: 18}}>{quantity}</Text>
                  <AntDesign name="pluscircleo" size={40} color="#d4c495" onPress={increaseQuantity}/>
                </View>
              </View>

              <View style={{width: 120, marginTop: 18}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 400, textAlign: 'center', marginBottom: 10}}>Rp {price.toFixed(3)}</Text>
                <TouchableOpacity style={styles.addToCart} onPress={() => navigation.navigate('PaymentPage1')}>
                  <Text style={{color: 'white', textAlign: 'center'}}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 400,
        height: 400,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#04643c'
    },
    price: {
        fontSize: 20,
        color: '#d4c495',
    },
    includes: {
      color: '#aaaaaa',
      fontWeight: 400,
      fontSize: 10,
      textAlign: 'center',
      marginInline: 30,
      marginTop: 10
    },
    quantityBottomSection: {
      backgroundColor: '#04643c',
      width: '100%',
      height: 120,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25,
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',

      justifyContent: 'space-evenly',
    },
    specifications: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    outerSquareBox: {
      borderWidth: 2, 
      borderColor: '#d4c495', 
      borderRadius: 4,
      height: 22, 
      width: 22, 
      padding: 2,
      marginBlock: 5,
    },
    squareButton: {
      width: 'auto',
      aspectRatio: 1/1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
  },
  selectedButton: {
      backgroundColor: '#d4c495',
      borderRadius: 2
  },
  buttonText: {
      color: '#000',
  },
  addToCart: {
    borderWidth: 3,
    borderColor: '#d4c495',
    borderRadius: 50,
    padding: 6,
  }
});