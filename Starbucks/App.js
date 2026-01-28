import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "./components/Home";
import Customise from "./components/OnlineOrder/Customise";
import Order from "./components/OnlineOrder/Order";
import PaymentPage1 from "./components/Payment/PaymentPage1";
import PaymentPage2 from "./components/Payment/PaymentPage2";
import TopUp from "./components/TopUp";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      {/* <NavigationContainer> */}
      {/* change initial route later as the first page */}
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="User Name" component={UserName} /> */}
        {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TopUp" component={TopUp} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Customise" component={Customise} />
        <Stack.Screen name="PaymentPage1" component={PaymentPage1} />
        <Stack.Screen name="PaymentPage2" component={PaymentPage2} />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
});

// import { StyleSheet, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const App = () => {
//   return (
//     <SafeAreaView>
//       <Text style={styles.border}>App working</Text>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   border: {
//     color: "white",
//   },
// });
