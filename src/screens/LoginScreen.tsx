import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

type userInfo = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState<userInfo>({
    email: "",
    password: "",
  });
  return (
    <View>
      <Text>LOGIN Screen</Text>
      <TextInput
        placeholder="E-mail"
        onChangeText={(email) => setUserInfo({ ...userInfo, email })}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={(password) => setUserInfo({ ...userInfo, password })}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={() =>
          Alert.alert("tentativa de login", JSON.stringify(userInfo))
        }
      />
    </View>
  );
};

export default LoginScreen;
