import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../../assets/images/Logo-blue.svg";
import { Link } from "expo-router";

const Account = () => {
  isAuthorized = false;

  return isAuthorized === false ? (
    <SafeAreaView
      backgroundColor="#E3F5FC"
      height="100%"
      style={{ padding: 20, alignItems: "center", justifyContent: "center" }}
    >
      <Logo style={{ marginLeft: 18 }} />
      <Text style={{ fontSize: 16, fontFamily: "Inter" }}>
        Authorize or{" "}
        <Link
          href="/(auth)/sign-up"
          style={{ color: "#29A5DB", fontWeight: "600" }}
        >
          create an account
        </Link>
      </Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView
      height="100%"
      style={{ padding: 20, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Account</Text>
    </SafeAreaView>
  );
};

export default Account;
