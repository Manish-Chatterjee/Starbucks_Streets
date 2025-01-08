import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper'; // Import RadioButton
import { useNavigation } from '@react-navigation/native';


const SquareRadioButton = ({ value, selectedValue, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.squareButton,
        selectedValue && selectedValue.type === value.type && styles.selectedButton
      ]}
      onPress={() => onPress(value)}
    >
      {/* <Text style={styles.buttonText}>{value}</Text> */}
    </TouchableOpacity>
  );
};

export default function Customise({ route }) {

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState({ type: '', price: '' }); // State for radio button
  const [availableIn, setAvailableIn] = useState({ type: '', price: '' });
  const [milk, setMilk] = useState({ type: '', price: '' });
  const [espressoShot, setEspressoShot] = useState({ type: '', price: '' });
  const [finalPrice, setFinalPrice] = useState(parseFloat(price));
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const calculateFinalPrice = () => {
      let totalPrice = parseFloat(price); // Ensure base price is a number
  
  
      if (selectedSize && selectedSize.price !== 'free') {
        const selectedSizePrice = parseFloat(selectedSize.price) || 0;
        totalPrice += selectedSizePrice;
      }
  
      if (availableIn && availableIn.price !== 'free') {
        const availableInPrice = parseFloat(availableIn.price) || 0;
        totalPrice += availableInPrice;
      }
      if (milk && milk.price !== 'free') {
        const milkPrice = parseFloat(milk.price) || 0;
        totalPrice += milkPrice;
      }
      if (espressoShot && espressoShot.price !== 'free') {
        const espressoShotPrice = parseFloat(espressoShot.price) || 0;
        totalPrice += espressoShotPrice;
      }
  
      const finalPriceWithQuantity = totalPrice * quantity; // Multiply with quantity
      setFinalPrice(finalPriceWithQuantity);
    };
    calculateFinalPrice();
  }, [selectedSize, availableIn, milk, espressoShot, price, quantity]);

  useEffect(() => {
    const isSizeSelected = selectedSize.type !== '';
    const isAvailableInSelected = availableIn.type !== '';
    const isMilkSelected = milk.type !== '';
    const isEspressoShotSelected = espressoShot.type !== '';
    
    // Set form validity based on whether all required options are selected
    setIsFormValid(isSizeSelected && isAvailableInSelected && isMilkSelected && isEspressoShotSelected);
  }, [selectedSize, availableIn, milk, espressoShot]);

      // Function to increase quantity
      const increaseQuantity = () => {
        if (quantity < 6) {
          setQuantity(prevQuantity => prevQuantity + 1);
        }
      };

    // Function to decrease quantity
    const decreaseQuantity = () => {
      if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
      }
    };

    const handleAddToCart = () => {
      if (!isFormValid) return; // Do nothing if form is invalid

      const orderDetails = {
        id,
        name,
        image,
        price,
        includes,
        quantity,
        selectedSize,
        availableIn,
        milk,
        espressoShot,
        finalPrice,
      };
    
      navigation.navigate('PaymentPage1', { orderDetails });
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
                        <SquareRadioButton value={{ type: 'Tall', price: 'free' }} selectedValue={selectedSize} onPress={setSelectedSize} />
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Image source= {{ uri: 'https://t3.ftcdn.net/jpg/02/98/65/92/360_F_298659202_6y0mYN6XtC8RvhJPYnmmTwEnxJKYNozJ.jpg'}} style={{width: 100, height:100}}/>
                      <Text>Grande</Text>
                      <View style={styles.outerSquareBox}>
                      <SquareRadioButton value={{ type: 'Grande', price: '+10.000' }} selectedValue={selectedSize} onPress={setSelectedSize} />
                      </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Image source= {{ uri: 'https://t3.ftcdn.net/jpg/02/98/65/92/360_F_298659202_6y0mYN6XtC8RvhJPYnmmTwEnxJKYNozJ.jpg'}} style={{width: 100, height:100}}/>
                      <Text>Venti</Text>
                      <View style={styles.outerSquareBox}>
                      <SquareRadioButton value={{ type: 'Venti', price: '+15.000' }} selectedValue={selectedSize} onPress={setSelectedSize} />
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
                      <SquareRadioButton value={{ type: 'Hot', price: 'free' }} selectedValue={availableIn} onPress={setAvailableIn} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Hot</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>free</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value={{ type: 'Cold', price: 'free' }} selectedValue={availableIn} onPress={setAvailableIn} />
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
                      <SquareRadioButton value={{ type: 'No Fat', price: 'free' }} selectedValue={milk} onPress={setMilk} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>No Fat</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>free</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value={{ type: 'Soya Milk', price: '8.500' }} selectedValue={milk} onPress={setMilk} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Soya Milk</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>+8.500</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value={{ type: 'Almond Milk', price: '19.000' }} selectedValue={milk} onPress={setMilk} />
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
                      <SquareRadioButton value={{ type: 'no shots', price: 'free' }} selectedValue={espressoShot} onPress={setEspressoShot} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>No Espresso Shot</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>free</Text>
                </View>

                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value={{ type: 'Extra 1 Espresso Shot', price: '6.000' }} selectedValue={espressoShot} onPress={setEspressoShot} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Extra 1 Espresso Shot</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>+6.000</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value={{ type: 'Extra 2 Espresso Shot', price: '12.000' }} selectedValue={espressoShot} onPress={setEspressoShot} />
                      </View>
                    <Text style={{marginLeft: 15, fontWeight: 500}}>Extra 2 Espresso Shot</Text>
                  </View>
                  <Text style={{color: '#aaaaaa', fontSize: 12}}>+12.000</Text>
                </View>
                <View style={styles.specifications}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.outerSquareBox}>
                      <SquareRadioButton value={{ type: 'Extra 3 Espresso Shot', price: '18.000' }} selectedValue={espressoShot} onPress={setEspressoShot} />
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
                  <AntDesign 
                    name="pluscircleo" 
                    size={40} 
                    color={quantity < 6 ? "#d4c495" : "grey"} 
                    onPress={increaseQuantity} 
                    disabled={quantity >= 6} 
                  />
                </View>
              </View>

              <View style={{width: 120, marginTop: 18}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 400, textAlign: 'center', marginBottom: 10}}>Rp {finalPrice !== undefined ? finalPrice.toFixed(3) : '0.000'}</Text>
                <TouchableOpacity 
                  style={[styles.addToCart, !isFormValid && styles.disabledButton]} 
                  onPress={handleAddToCart}
                  disabled={!isFormValid}
                >
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
  },
  disabledButton: {
    borderColor: 'grey',
    opacity: 0.5,
  }
});