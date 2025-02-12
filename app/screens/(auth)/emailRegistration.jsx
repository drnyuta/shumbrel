import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import { signUpWithEmail } from "../../services/AuthService";
import LeftArrow from "../../../assets/icons/left-arrow.svg";
import Logo from "../../../assets/images/Logo-blue.svg";

const EmailRegistration = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailRegister = async () => {
    if (!name || !surname || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long");
      return;
    }

    try {
      await signUpWithEmail(email, password, name, surname);
      Alert.alert("Success", "Account created successfully!");
      router.push("screens/onboarding/chooseAvatar");
    } catch (error) {
      Alert.alert("Registration Failed", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Link href={"screens/(auth)/sign-up"}>
          <LeftArrow />
        </Link>
        <View style={styles.wrapper}>
          <Text style={[styles.text, { marginTop: 70, marginBottom: 40 }]}>
            Register account
          </Text>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#626262"
              value={name}
              onChangeText={setName}
            />
            <Text style={styles.smallText}>name</Text>
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your surname"
              placeholderTextColor="#626262"
              value={surname}
              onChangeText={setSurname}
            />
            <Text style={styles.smallText}>surname</Text>
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#626262"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.smallText}>email</Text>
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Create a password"
              placeholderTextColor="#626262"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.smallText}>
              Password should be at least 8 characters.
            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleEmailRegister}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Logo style={{ alignSelf: "center", marginBottom: 30 }} height={100} />
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

export default EmailRegistration;
