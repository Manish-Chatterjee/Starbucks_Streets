import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../HomePage/Header'
import { RadioButton } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Accordion from './Accordion';
import { useNavigation, useRoute } from '@react-navigation/native';
import Carousel from './Carousel';
import { Image } from 'expo-image';

export default function PaymentPage2() {
  const navigation = useNavigation();
  const route = useRoute();

    const [selectedPayment, setSelectedPayment] = useState({ type: '', price: '' }); // State for radio button
    const [isProceedEnabled, setIsProceedEnabled] = useState(false);

  useEffect(() => {
    setIsProceedEnabled(selectedPayment.type !== '');
  }, [selectedPayment]);

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


  // payment page 1 order details and navigate back

    const { orderDetails } = route.params || {};
  // On proceed, navigate back to PaymentPage1 passing back orderDetails and selectedPayment
  const handleProceed = () => {
    navigation.navigate('PaymentPage1', { orderDetails, selectedPayment });
  };

  return (
    <View style={styles.container}>
      <Header header="Payment Mode"/>

      {/* Set as default */}

      {/* <View style={styles.defaultSelection}>
        <Text>Set as default</Text>
      </View> */}

      <View>
        <Text style={{fontSize: 12, fontWeight: 700, color:'#04643c', marginInline: 'auto', marginBlock: 20}}>STARBUCKS CARD</Text>

        {/* <View style={styles.accordion}><Text>Accordion</Text></View> */}
        <Carousel/>
      </View>

      <Text style={{fontSize: 12, fontWeight: 700, color:'#04643c', marginInline: 'auto', marginBlock: 20}}>OR</Text>

      <View>
        <RadioButton.Group
          onValueChange={newValue => setSelectedSize(newValue)}
          value={selectedPayment}
        >
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginInline: '20'}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <View style={styles.outerSquareBox}>
              <SquareRadioButton value={{ type: 'master', price: '693.000', cardNo: '6136 **** **** 3746', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png' }} selectedValue={selectedPayment} onPress={setSelectedPayment} />
            </View>
            <View style={styles.box}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png'}} style={{  height: 50, width: '80%'}} resizeMode='contain'/>
            </View>
            </View>
            <Text style={{fontSize: 12, fontWeight: 400, color:'#04643c'}}>Rp 693.000</Text>
          </View>
          
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginInline: '20'}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <View style={styles.outerSquareBox}>
              <SquareRadioButton value={{ type: 'visa', price: '263.000', cardNo: '4716 **** **** 8295', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png' }} selectedValue={selectedPayment} onPress={setSelectedPayment} />
            </View>
            <View style={styles.box}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png'}} style={{  height: 50, width: '80%'}} resizeMode='contain'/>
            </View>
            </View>
            <Text style={{fontSize: 12, fontWeight: 400, color:'#04643c'}}>Rp 263.000</Text>
            {/* <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, color: '#d4c495'}}>activate</Text>
            <MaterialIcons name="arrow-forward-ios" size={28} color="#d4c495" />
            </View> */}
          </View>

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginInline: '20'}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <View style={styles.outerSquareBox}>
              <SquareRadioButton value={{ type: 'paypal', price: '884.000', cardNo: '7295 **** **** 9137', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png' }} selectedValue={selectedPayment} onPress={setSelectedPayment} />
            </View>
            <View style={styles.box}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png'}} style={{  height: 50, width: '80%'}} resizeMode='contain'/>
            </View>
            </View>
            <Text style={{fontSize: 12, fontWeight: 400, color:'#04643c'}}>Rp 884.000</Text>
          </View>

          {/* <View style={styles.outerSquareBox}>
          <SquareRadioButton value={{ type: 'visa' }} selectedValue={selectedPayment} onPress={setSelectedPayment} />
          </View> */}

          {/* <View><Text>opt1</Text></View>
          <View><Text>opt1</Text></View>
          <View><Text>opt1</Text></View> */}
        </RadioButton.Group>
      </View>

      <TouchableOpacity 
        style={[
          styles.button,
          { opacity: isProceedEnabled ? 1 : 0.5 }
        ]}
      // onPress={() => navigation.navigate('PaymentPage1')}
      // onPress={() => navigation.goBack()}
      // onPress={() => navigation.navigate('PaymentPage1', { ...route.params, selectedPayment })}
      onPress={handleProceed}
      disabled={!isProceedEnabled}
      >
        <Text style={{color: "#414141", fontSize: 18, color: "white", fontWeight: 400, textAlign: 'center'}}>PROCEED</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
      backgroundColor: 'white'
    },
    defaultSelection: {
      borderWidth: 1,
      borderColor: 'black',

      padding: 25
    },
    accordion: {
      padding: 20
    },

    // Radio button

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

      box: {
        aspectRatio: '1.586/1',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
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

        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      },
      button: {
        backgroundColor: '#04643c',
        margin: 'auto',
        width: '80%',
        paddingInline: 20,
        paddingBlock: 10,
        borderRadius: 100,
      },
})