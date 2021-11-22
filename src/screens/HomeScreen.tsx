import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Text>Home screen</Text>
      <Text>Aqui ficaram as listas de séries do cara</Text>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    padding: 16,
  },
});
