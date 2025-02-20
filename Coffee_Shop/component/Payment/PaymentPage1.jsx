import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../HomePage/Header'
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PaymentSuccess from '../HomePage/PaymentSuccess';

export default function PaymentPage1({route}) {

    const [selectedOption, setSelectedOption] = useState('delivery');
    const [modalVisible, setModalVisible] = useState(false);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false); // State for PaymentSuccess visibility

    const handlePaymentSuccess = () => {
        // Logic for handling payment submission
        setShowPaymentSuccess(true); // Show PaymentSuccess on submit
    };

    const handleClosePaymentSuccess = () => {
        setShowPaymentSuccess(false); // Close PaymentSuccess
    };

    const handleChange = (text, index) => {
        const newInputValues = [...inputValues];
    
        // If backspace is pressed (text is empty)
        if (text.length === 0) {
            newInputValues[index] = '';
    
            // Move to the previous input if the current input is empty and index is greater than 0
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        } else {
            newInputValues[index] = text;
    
            // Move to the next input if the current input is filled
            if (text.length === 1 && index < 5) {
                if (inputRefs.current[index + 1]) {
                    inputRefs.current[index + 1].focus();
                }
            }
        }
    
        // Update the state
        setInputValues(newInputValues);
    
        // Check if all inputs are filled
        const allFilled = newInputValues.every(value => value.length === 1);
        setIsSubmitEnabled(allFilled); // Update the submit button state
    };
    
    // Additional logic to handle clearing multiple digits
    const handleBackspace = (index) => {
        if (inputValues[index] === '') {
            // If the current input is empty, move to the previous input
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        } else {
            // If the current input is not empty, allow backspacing
            inputRefs.current[index].focus();
        }
    };

    // const navigation = useNavigation();

    // onPress={() => navigation.navigate('TopUp')}

    const { orderDetails } = route.params;
    const {
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
    } = orderDetails;


  return (
    <View style={styles.container}>
        <Header header="Payment"/>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity 
        style={{
            width: '50%', 
            borderBottomWidth: 5,
            borderColor: selectedOption === 'delivery' ? '#d4c495' : 'white'
            }} 
            onPress={() => setSelectedOption('delivery')}>
        <Text style={{backgroundColor: 'white', paddingBlock: 5, fontSize: 16, fontWeight: 600, textAlign:'center', color: selectedOption === 'delivery' ? "#04643c" : "gray"}}>DELIVERY</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{
            width: '50%',
            borderBottomWidth: 5,
            borderColor: selectedOption === 'takeAway' ? '#d4c495' : 'white'
            }} 
            onPress={() => setSelectedOption('takeAway')}>
            <Text style={{backgroundColor: 'white', paddingBlock: 5, fontSize: 16, fontWeight: 600, textAlign:'center', color: selectedOption === 'takeAway' ? "#04643c" : "gray"}}>TAKE AWAY</Text></TouchableOpacity>
      </View>

      <ScrollView vertical showsVerticalScrollIndicator={false} style={{paddingInline: 15}}>
        {/* Address */}
        <View style={styles.addressContainer}>
            <View style={{flexDirection: 'row', paddingBlock: 8}}>

                {selectedOption === 'delivery' ?
                <View style={{alignItems: 'center', marginTop: 3}}>
                    <Feather name="coffee" size={16} color="#d4c495" />
                    <View style={{borderWidth: 1, borderStyle: 'dotted', borderColor: '#d4c495', height: 50, marginHorizontal: 5}}></View>
                    <Entypo name="location" size={16} color="#d4c495" />
                </View>
                : null}
                
                {selectedOption === 'takeAway' ? <Fontisto name="coffeescript" size={16} color="#d4c495" /> : null }
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
                        <View style={{marginLeft: 7}}>
                            <Text style={{fontWeight: 700, color:'#04643c'}}>Starbucks Plaza Indonesia 2</Text>
                            <Text style={{fontSize: 10, color: 'gray', fontWeight: 600, width: 300}}>Plaza Indonesia 4th floor, #E0231 & #E023T Jalan M.H. Thamrin Kav. 28-30, Jakarta Pusat</Text>
                        </View>
                        <Feather name="edit" size={16} color="#04643c" marginRight={10}/>
                    </View>
                    
                    {selectedOption === 'delivery' ?
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', marginTop: 18}}>
                        <View style={{marginLeft: 7}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontWeight: 700, color:'#04643c'}}>Wica's Home</Text>
                                <View style={{backgroundColor:'#d4c495', borderRadius: 50, width: 40, height: 15, justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
                                    <Text style={{fontWeight: 600, fontSize: 6, color: 'white', textAlign:'center'}}>primary</Text>
                                </View>
                            </View>
                            <Text style={{fontSize: 10, color: 'gray', fontWeight: 600, width: 300}}>JL Kebon Kacang, Tanah Abang, Jakarta Pusat</Text>
                        </View>
                        <Feather name="edit" size={16} color="#04643c" marginRight={10}/>
                    </View>
                    : null}
                </View>
            </View>
        </View>

        {/* Available at */}
        {selectedOption === 'takeAway' ?
            <View style={{marginBlock: 10, marginInline: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12, fontWeight: 700, color:'#04643c'}}>YOUR ORDER</Text>
                    <Text style={{fontSize: 12, fontWeight: 700, color:'#d4c495'}}>9.45 am</Text>
                </View>
                <Text style={{fontSize: 12, fontWeight: 700, color:'#d4c495', marginLeft: 'auto'}}>Sat, 27th Feb 2024</Text>
            </View>
        : null}

        {/* Your Order */}
        <View style={{marginBlock: 10, marginInline: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{fontSize: 12, fontWeight: 700, color:'#04643c'}}>YOUR ORDER</Text>
                <TouchableOpacity><Text style={{fontSize: 12, fontWeight: 700, color:'#d4c495'}}>add more</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center', position: 'relative'}}>
                <Image source= {{ uri: 'https://t3.ftcdn.net/jpg/02/98/65/92/360_F_298659202_6y0mYN6XtC8RvhJPYnmmTwEnxJKYNozJ.jpg'}} style={{width: 70, height: 70}}/>
                <View>
                    <Text style={{fontWeight: 700, color:'#04643c'}}>{name}</Text>
                    <Text style={{color: 'grey', fontSize: 10, fontWeight: 600}}>{selectedSize.type}, {availableIn.type}, {milk.type}</Text>
                    {espressoShot?.type !== 'no shots' && (<Text style={{color: 'grey', fontSize: 10, fontWeight: 600}}>{espressoShot.type}</Text>)}
                    <Text style={{color: '#d4c495', fontWeight: 600, marginTop: 5}}>Rp {finalPrice.toFixed(3)}</Text>
                </View>
                <View style={{position: 'absolute', bottom: 0, right: 0, zIndex: 2, width: 80, height: 40, justifyContent: 'space-evenly', alignItems: 'center', flexDirection:"row"}}>
                    <View style={{aspectRatio:1/1, width: 25, borderRadius: 100, backgroundColor:'#d4c495', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{textAlign: 'center', fontWeight: 600, color: 'white'}}>{quantity}</Text>
                    </View>
                    <Feather name="edit" size={16} color="#04643c" />
                </View>
            </View>
        </View>

        {/* Payment */}
        <View style={{marginBlock: 10, marginInline: 10}}>
            <Text style={{fontSize: 12, fontWeight: 700, color:'#04643c'}}>PAYMENT METHOD</Text>
            <Text style={{fontSize: 10, fontWeight: 500, color:'#d4c495', marginBlock: 10}}>You will get 4 stars pay with Starbucks Card</Text>

            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBlock: 5}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{ uri: 'https://www.starbucks.co.th/stb-media/2020/10/CARD-STARBUCKS-CARD-WORDMARK.png'}} style={{height: 50, width: 80, marginRight: 10}} resizeMode='contain'/>
                    <View>
                        <Text>6136 **** **** 3746</Text>
                        <Text style={{fontSize: 12, fontWeight: 400, color:'#04643c'}}>Rp 693.000</Text>
                    </View>
                </View>
                    <MaterialIcons name="arrow-forward-ios" size={28} color="#04643c" />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBlock: 5}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SimpleLineIcons name="tag" size={20} color="#04643c"/>
                    <Text style={{fontWeight: 700, fontSize: 12, color: "#04643c", marginLeft: 7}}>Voucher</Text>
                </View>
                <Text style={{fontWeight: 700, fontSize: 12, color: "#d4c495"}}>Choose</Text>
            </View>
            {selectedOption === 'delivery' ?
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBlock: 5}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="human-scooter" size={20} color="#04643c"/>
                    <Text style={{fontWeight: 700, fontSize: 12, color: "#04643c", marginLeft: 7}}>Shipping by</Text>
                </View>
                <Text style={{fontWeight: 700, fontSize: 12, color: "#d4c495"}}>Gojek - Rp 15.000</Text>
            </View>
            : null}

            <View style={{marginBlock: 10}}>
                <Text style={{fontWeight: 700, fontSize: 12, color: "#04643c", marginBottom: 5}}>Amount Detail</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBlock: 2}}>
                    <Text style={{fontWeight: 400, fontSize: 12, color: "gray"}}>Price</Text>
                    <Text style={{fontWeight: 700, fontSize: 12, color: "#d4c495"}}>Rp {finalPrice.toFixed(3)}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBlock: 2}}>
                    {selectedOption === 'delivery' ?
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
                        <Text style={{fontWeight: 400, fontSize: 12, color: "gray"}}>Shipping Charges</Text>
                        <Text style={{fontWeight: 700, fontSize: 12, color: "#d4c495"}}>Rp 15.000</Text>
                    </View>
                    : null}
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBlock: 2}}>
                    <Text style={{fontWeight: 700, fontSize: 12, color: "#04643c"}}>Total</Text>
                    <Text style={{fontWeight: 700, fontSize: 12, color: "#d4c495"}}>
                        Rp {selectedOption === 'delivery' ? (finalPrice + 15).toFixed(3) : finalPrice.toFixed(3)} 
                    </Text>
                </View>
            </View>

        </View>
      </ScrollView>
      <TouchableOpacity 
            style={{
                position: 'absolute', 
                bottom: 30, 
                right: 30, 
                backgroundColor: '#04643c', 
                borderRadius: 100, 
                width: 70, 
                height: 70, 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
            onPress={() => setModalVisible(true)} // Set modal visibility to true
            >
            <Text style={{color: 'white', fontWeight: '600'}}>PAY</Text>
        </TouchableOpacity>

        {showPaymentSuccess && <PaymentSuccess onClose={handleClosePaymentSuccess} />}


<Modal
            animationType="fade" // Use fade animation
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Insert your Starbucks App PIN</Text>
                    <View style={styles.inputContainer}>
                        {inputValues.map((value, index) => (
                            <TextInput
                                key={index}
                                ref={el => inputRefs.current[index] = el} // Assign ref to each input
                                style={styles.input}
                                value={value}
                                onChangeText={(text) => handleChange(text, index)}
                                keyboardType="numeric" // Numeric keyboard
                                maxLength={1} // Limit to 1 digit
                                textAlign="center" // Center text
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === 'Backspace') {
                                        handleBackspace(index);
                                    }
                                }}
                            />
                        ))}
                    </View>
                    <Pressable
                        style={[styles.button, styles.buttonClose, { opacity: isSubmitEnabled ? 1 : 0.5 }]} // Change opacity based on enabled state
                        onPress={() => {
                            if (isSubmitEnabled) {
                                // Clear the input values
                                setInputValues(['', '', '', '', '', '']);
                                // Reset the submit button state
                                setIsSubmitEnabled(false);
                                // Close the modal
                                setModalVisible(!modalVisible);
                                handlePaymentSuccess();
                            }
                        }}
                        disabled={!isSubmitEnabled} // Disable button if not enabled
                    >
                        <Text style={styles.textStyle}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    addressContainer: {
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
        backgroundColor: 'white', // Ensure the background is white or desired color
        borderRadius: 8, // Optional: Add border radius for rounded corners

        padding: 10,
        marginBottom: 10,
        marginTop: 20
    },

    // Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
        width: 300,
        height: 250, // Increased height for input
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        // fontWeight: 'bold',
        fontSize: 14, // Increased font size for the title
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 30, // Width for each input
        borderBottomColor: '#04643c',
        borderBottomWidth: 2, // Underline style
        fontSize: 24, // Increased font size for input
        textAlign: 'center', // Center text
        marginHorizontal: 5, // Space between inputs
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#04643c',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})