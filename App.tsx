import "react-native-gesture-handler"; // deve ficar como sendo o primeiro import
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";

import HomeScreen from "./src/screens/HomeScreen";
import TrainingScreen from "./src/screens/TrainingScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Training" component={TrainingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
