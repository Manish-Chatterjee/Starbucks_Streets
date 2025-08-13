import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, Modal, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Header from './HomePage/Header';
import PaymentSuccess from './HomePage/PaymentSuccess';
import { Image } from 'expo-image';

export default function TopUp() {

    const [price, setPrice] = useState('');
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false); // New state for PaymentSuccess visibility
    const [modalVisible, setModalVisible] = useState(false);
    const [number, setNumber] = useState('');
    const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    // const inputRefs = useRef([]);

    const formatPrice = (text) => {
      // Remove all non-numeric characters
      const numericText = text.replace(/[^0-9]/g, '');

      // Prevent leading zeros and only zeros
      if (numericText.length > 1 && numericText.startsWith('0')) {
          return numericText.slice(1); // Remove the leading zero
      }
      if (numericText === '0' || numericText === '') {
          return ''; // Prevent input of just "0" or empty input
      }

      // Format the number with dots
      const formattedText = numericText.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return numericText ? `Rp ${formattedText}` : '';
  };

  const handleTopUpPress = (value) => {
    setPrice(formatPrice(value));
  };

  const handlePaymentSuccess = () => {
    // Keyboard.dismiss();
    if (price !== undefined) {
        setShowPaymentSuccess(true); // Set to false if price is null or empty
    } else {
        setShowPaymentSuccess(false); // Show PaymentSuccess on button click
    }
    setPrice();
  }

  const handleClosePaymentSuccess = () => {
    setShowPaymentSuccess(false); // Close PaymentSuccess
  };

    // // Handler for modal TextInput change
    // const handleModalInputChange = (text) => {
    //   // Only allow numeric input
    //   const numericText = text.replace(/[^0-9]/g, '');
    //   setNumber(numericText);
    //   setPrice(formatPrice(numericText));
    //   setIsSubmitEnabled(numericText.length > 0);
    // };

    const handleModalInputChange = (text) => {
      // Remove all non-numeric characters
      const numericText = text.replace(/[^0-9]/g, '');
      
      // Format the number with commas as thousand separators
      const formattedText = numericText.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      
      setNumber(formattedText);
      setPrice(`Rp ${formattedText}`);
      setIsSubmitEnabled(numericText.length > 0);
      };
    

  return (
    <SafeAreaView style={styles.container}>
      <Header header="TOP UP"/>
      <View style={{marginTop: 30, gap: 20}}>
            <Text style={{fontSize: 18, fontWeight: 500, marginLeft: 30}}>Payment Method</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 30}}>
              <View style={styles.box}>
                  <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png'}} style={{  height: 50, width: '80%'}} resizeMode='contain'/>
              </View>
              <View style={styles.box}>
                  <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png'}} style={{  height: 50, width: '80%'}} resizeMode='contain'/>
              </View>
              <View style={styles.box}>
                  <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png'}} style={{  height: 50, width: '80%'}} resizeMode='contain'/>
              </View>
              <View style={styles.box}>
                  <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png'}} style={{  height: 50, width: '80%'}} resizeMode='contain'/>
              </View>
            </ScrollView>
              <Text style={{fontSize: 18, fontWeight: 500, marginLeft: 30}}>Select top-up value</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 30}}>
                  <TouchableOpacity onPress={() => handleTopUpPress('50000')}>
                      <View style={styles.topUp}>
                        <Text>Rp 50.000</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleTopUpPress('100000')}>
                      <View style={styles.topUp}>
                        <Text>Rp 100.000</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleTopUpPress('200000')}>
                      <View style={styles.topUp}>
                        <Text>Rp 200.000</Text>
                      </View>
                  </TouchableOpacity>
                  {/* <TouchableOpacity onPress={() => handleTopUpPress('500000')}>
                      <View style={styles.topUp}>
                        <Text>Rp 500.000</Text>
                      </View>
                  </TouchableOpacity> */}
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View style={styles.topUp}>
                      <Text>Specify</Text>
                    </View>
                  </TouchableOpacity>
              </ScrollView>
      </View>

      {/* Payment Confirmation Message */}
              <View style={styles.input}>
                  {/* <TextInput
                  style={{padding: 10}}
                    placeholder="Enter specific value"
                    value={price}
                    onChangeText={text => {
                      const formatted = formatPrice(text);
                      setPrice(formatted);
                    }}                    
                    keyboardType='numeric'
                    returnKeyType="done"
                  /> */}
                  <Text>{price}</Text>
              </View>
              {/* <TouchableOpacity style={styles.button} onPress={handlePaymentSuccess}>
                      <Text style={{color: "#414141", fontSize: 18, color: "white", fontWeight: 400, textAlign: 'center'}}>TOP-UP</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
  style={[styles.button, { opacity: price ? 1 : 0.5 }]}
  onPress={price ? handlePaymentSuccess : null}
  disabled={!price}
>
  <Text style={{ color: "white", fontSize: 18, fontWeight: "400", textAlign: "center" }}>
    TOP-UP
  </Text>
</TouchableOpacity>


              {showPaymentSuccess && <PaymentSuccess onClose={handleClosePaymentSuccess} points={1}/>}

<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter specific value</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your amount"
                keyboardType="numeric"
                value={number}
                onChangeText={handleModalInputChange}
                autoFocus={true}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose, { opacity: isSubmitEnabled ? 1 : 0.5 }]}
              onPress={() => {
                if (isSubmitEnabled) {
                  setNumber('');
                  setIsSubmitEnabled(false);
                  setModalVisible(false);
                  // handlePaymentSuccess();
                }
              }}
              disabled={!isSubmitEnabled}
            >
              <Text style={styles.textStyle}>Proceed</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        aspectRatio: '1.586/1',
        height: 70,
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
      topUp: {
        aspectRatio: '2/1',
        height: 70,
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
      input: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        width: '80%',
        margin: 'auto',
        marginBlock: 50
      },
      // button: {
      //   backgroundColor: '#04643c',
      //   margin: 'auto',
      //   width: '80%',
      //   paddingInline: 20,
      //   paddingBlock: 10,
      //   borderRadius: 100,
      // },     already present below

      // Modal
      modalView: {

        marginTop: "50%",

        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        // borderRadius: 20,
        // padding: 10,
        // elevation: 2,
        backgroundColor: '#04643c', // green color
        margin: 'auto',
        width: '80%',
        paddingInline: 20,
        paddingBlock: 10,
        borderRadius: 100,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#04643c',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})