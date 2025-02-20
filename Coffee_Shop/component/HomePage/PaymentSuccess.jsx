import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BlurView } from 'expo-blur';

export default function PaymentSuccess({onClose}) {
  return (
    <BlurView 
    style={styles.container}
    intensity={20}
    tint='light'>
      <View style={styles.card}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}> 
            <AntDesign name="close" size={26} color="#d4c495" />
        </TouchableOpacity>
        <View style={styles.cardContent}>
            <View>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 300}}>THANK YOU!</Text>
                <Text style={{color: 'white', fontWeight: 800}}>PAYMENT SUCCESS</Text>
            </View>
            <Text style={{color: '#d4c495'}}>you get <Text style={{fontWeight: '800'}}>4 stars</Text> reward</Text>
        </View>
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
    container: {
         alignItems: 'center',
         justifyContent: 'center',
        //  flex: 1,
         height: '100%',
         width: '100%',
         position: 'absolute',
         backgroundColor: 'rgba(255, 255, 255, 0.37)',
         left: '50%',
         top: '50%',
         transform: 'translate(-50%, -50%)'
    },

    card: {
        aspectRatio: '1.586/1',
        width: '80%',
        backgroundColor: '#04643c',
        // margin: 'auto',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    cardContent: {
        gap: 60
    },

    closeIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 10,
    }
})