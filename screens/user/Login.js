import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

import CustomButton from "../../components/common/CustomButton";
import Subtitle from "../../components/common/Subtitle";
import TextButton from "../../components/common/TextButton";
import Title from "../../components/common/Title";
import { signUser } from "../../store/slice/auth";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [sign, setSign] = useState("signIn");
  const [credentialsData, setCredentialsData] = useState({
    email: "",
    password: "",
    returnSecureToken: true,
  });

  const credentialsInputHandler = (nameInput, value) => {
    setCredentialsData((state) => ({ ...state, [nameInput]: value }));
  };

  const submitAuthCredential = async () => {
    try {
      await dispatch(signUser(credentialsData, sign));
      navigation.navigate("main");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.wrapperPage}>
        <Title>Login page</Title>
        <View style={styles.inputWrapper}>
          <Subtitle>Email</Subtitle>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            onChangeText={(value) => credentialsInputHandler("email", value)}
            value={credentialsData.email}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Subtitle>Password</Subtitle>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            onChangeText={(value) => credentialsInputHandler("password", value)}
            value={credentialsData.password}
          />
        </View>
        <CustomButton
          lable={`${sign === "signUp" ? "sign up" : "log in"}`}
          style={styles.submitButton}
          onPress={submitAuthCredential}
        />
        {sign === "signIn" && (
          <TextButton
            lable="sign up"
            style={styles.textButton}
            onPress={() => setSign("signUp")}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperPage: {
    width: "80%",
  },
  inputWrapper: {
    marginVertical: 15,
  },
  input: {
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    width: "100%",
  },
  submitButton: {
    marginVertical: 15,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
  },
});

export default Login;
