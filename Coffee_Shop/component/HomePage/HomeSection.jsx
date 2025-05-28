import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Image } from 'expo-image';
import card from '../../assets/starbucks.png';

const HomeSection = () => {

    const navigation = useNavigation();

  return (
    // <ScrollView>
        <View style={styles.container}>
            <View style={styles.cardBalance}>
                <Text style={{color: '#04643c', fontWeight: '500', width: '50%', paddingInline: 10, paddingBlock: 5, borderRadius: 5}}>Card Balance</Text>
                <Text style={{backgroundColor: '#04643c', fontWeight: '500', paddingBlock: 5, paddingInline: 10, borderRadius: 5, color: 'white'}}>Rp 593.000,-</Text>
            </View>

    {/* card view */}
            <View style={{height: 90, flexDirection: 'row', alignItems: 'center'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 30}}>
                <TouchableOpacity style={styles.box} onPress={() => alert('Your new card has been added')}>
                    <View style={{ height:'50', width:'80', justifyContent: 'center', alignItems: 'center', margin: 'auto', borderWidth: 1, borderColor:'#d4c495', borderStyle: 'dashed'}}>
                        <AntDesign name="pluscircle" size={20} color="#d4c495" />
                    </View>
                </TouchableOpacity>
                <View style={styles.box}>
                    <Image source={card} style={{  height: 50, width: '80%', borderRadius: 5}} contentFit='contain'/>
                </View>
                <View style={styles.box}>
                    <Image source={card} style={{  height: 50, width: '80%', borderRadius: 5}} contentFit='contain'/>
                </View>
                <View style={styles.box}>
                    <Image source={card} style={{  height: 50, width: '80%', borderRadius: 5}} contentFit='contain'/>
                </View>
                <View style={styles.box}>
                    <Image source={card} style={{  height: 50, width: '80%', borderRadius: 5}} contentFit='contain'/>
                </View>
                </ScrollView>
            </View>


            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('TopUp')} id='TopUp'>
                    <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 70, height: 70, borderRadius: 100}} />
                    <Text style={{color: "#414141", fontSize: 12, fontWeight: 500, textAlign: 'center', marginTop: 10}}>Top-up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Order')} id='Order'>
                    <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 70, height: 70, borderRadius: 100}} />
                    <Text style={{color: "#414141", fontSize: 12, fontWeight: 500, textAlign: 'center', marginTop: 10}}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => 
                // navigation.navigate('PaymentPage2')}
                    alert("Payment page can be reached after order page")} 
                    id='Payment'>
                    <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 70, height: 70, borderRadius: 100}} />
                    <Text style={{color: "#414141", fontSize: 12, fontWeight: 500, textAlign: 'center', marginTop: 10}}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("History is still under work")} id='History'>
                    <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 70, height: 70, borderRadius: 100}} />
                    <Text style={{color: "#414141", fontSize: 12, fontWeight: 500, textAlign: 'center', marginTop: 10}}>History</Text>
                </TouchableOpacity>
                {/* <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 70, height: 70, borderRadius: 100}} /> */}
                {/* <Image source={{ uri: 'https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery.jpg' }} style={{ width: 70, height: 70, borderRadius: 100}} /> */}
            </View>

            {/* <hr /> */}
            <View style={{borderWidth: 1, borderColor: "#fbf1db", width: '80%', marginBlock: 20}} />


        </View>
    // </ScrollView>
  )
}

export default HomeSection

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "white",
        height: '100%',
        paddingBlock: 50,
        alignItems: 'center'
    },
    cardBalance: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#d4c495",
        width: '80%',
        justifyContent: 'space-between',
        borderRadius: 6,
        // marginBottom: 10,
    },
    box: {
        width: 100,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        // // Shadow for iOS
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.3,
        // shadowRadius: 4,
        // // Shadow for Android
        // elevation: 5,

        justifyContent: 'center',
        alignItems: 'center',
        // margin: 10,
      },
})