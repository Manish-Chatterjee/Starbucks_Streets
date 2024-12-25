import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserName from './component/FirstPage/UserName';
import HomePage from './component/HomePage/HomePage'; // Make sure to create this component
import Home from './component/Home';
import TopUp from './component/TopUp';
import Order from './component/OnlineOrder/Order';
import Customise from './component/OnlineOrder/Customise';
import PaymentPage1 from './component/Payment/PaymentPage1';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* change initial route later as the first page */}
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="User Name" component={UserName} /> */}
        {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TopUp" component={TopUp} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Customise" component={Customise} />
        <Stack.Screen name="PaymentPage1" component={PaymentPage1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
});