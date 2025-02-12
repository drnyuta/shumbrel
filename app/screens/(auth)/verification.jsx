import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import LeftArrow from "../../../assets/icons/left-arrow.svg";
import Logo from "../../../assets/images/Logo-blue.svg";

const Verification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={"screens/(auth)/emailRegistration"}>
        <LeftArrow />
      </Link>
      <View style={styles.wrapper}>
        <Text
          style={[
            styles.text,
            { fontSize: 26, textAlign: "center", marginBottom: 20 },
          ]}
        >
          We have sent you a verification email
        </Text>
        <Text style={[{ color: "#5E5D5D", textAlign: "center", fontSize: 16 }]}>
          Please confirm your email address. After that you can sign in with
          your new account.
        </Text>
        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.buttonText}>Resend verification email</Text>
        </TouchableOpacity>
        <Link style={styles.link} href={"screens/(auth)/sign-in"}>
          Go to sign in
        </Link>
      </View>
      <Logo style={{ alignSelf: "center", marginBottom: 30 }} height={100} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    paddingBottom: 50,
    backgroundColor: "#E3F5FC",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  resendButton: {
    backgroundColor: "#2385AF",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-Medium",
  },
  link: {
    color: "#29A5DB",
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: "underline",
    fontFamily: "Inter-Medium",
  },
});

export default Verification;
