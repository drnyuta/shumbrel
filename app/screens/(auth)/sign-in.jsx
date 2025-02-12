import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { loginWithEmail } from "../../services/AuthService";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

import LeftArrow from "../../../assets/icons/left-arrow.svg";
import Logo from "../../../assets/images/Logo-blue.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleLogin = async (email, password) => {
    if (email.length === 0 || password.length === 0) {
      Alert.alert("Error", "Please enter email and password.");
      return;
    }

    try {
      await loginWithEmail(email, password);
      router.push("/screens/(tabs)/map");
    } catch (error) {
      Alert.alert("Login failed", error.message);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableOpacity onPress={goBack}>
          <LeftArrow />
      </TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={[styles.text, { marginTop: 70, marginBottom: 40 }]}>
            Sign In
          </Text>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              placeholderTextColor="#626262"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <Text style={styles.smallText}>email</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              placeholderTextColor="#626262"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
            <Text style={styles.smallText}>password</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLogin(email, password)}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        {!keyboardVisible && (
          <Logo
            style={{ alignSelf: "center", marginBottom: 30 }}
            height={100}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#E3F5FC",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
  smallText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#7F7F7F",
    marginTop: 5,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#2385AF",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-Medium",
  },
});

export default SignIn;