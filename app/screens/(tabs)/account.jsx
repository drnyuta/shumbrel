import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import Logo from "../../../assets/images/Logo-blue.svg";
import Avatar from "../../../assets/images/duckAvatar.svg";
import AccountIcon from "../../../assets/icons/account.svg";
import LanguageIcon from "../../../assets/icons/language.svg";
import SunIcon from "../../../assets/icons/sun.svg";
import MoonIcon from "../../../assets/icons/moon.svg";
import LogoutIcon from "../../../assets/icons/log-out.svg";

const Account = () => {
  const isAuthorized = true;

  const styles = {
    container: {
      padding: 20,
      justifyContent: "center",
      flex: 1, 
      paddingTop: 80,
      backgroundColor: "#E3F5FC",
    },
    logo: {
      marginLeft: 18,
    },
    textUnauthorized: {
      fontSize: 16,
      fontFamily: "Inter-Regular",
    },
    link: {
      color: "#29A5DB",
      fontWeight: "600",
    },
    title: {
      fontFamily: "Inter-SemiBold",
      fontSize: 22,
      marginTop: 10,
    },
    textAuthorized: {
      fontSize: 18,
      fontFamily: "Inter-Regular",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
  };

  return isAuthorized === false ? (
    <SafeAreaView
      backgroundColor="#E3F5FC"
      style={[styles.container, { alignItems: "center" }]}
    >
      <Logo style={styles.logo} />
      <Text style={styles.textUnauthorized}>
        Authorize or{" "}
        <Link href="/(auth)/sign-up" style={styles.link}>
          create an account
        </Link>
      </Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Avatar />
        <Text style={styles.title}>Hanna Drozhdzh</Text>
      </View>
      <View style={{ marginTop: 40, marginLeft: 24, gap: 34 }}>
        <Link href="/personalInfo">
          <View style={styles.row}>
            <AccountIcon
              height={20}
              marginRight={16}
              style={styles.iconStyles}
            />
            <Text style={styles.textAuthorized}>Personal information</Text>
          </View>
        </Link>
        <Link href="/language">
          <View style={styles.row}>
            <LanguageIcon
              height={20}
              marginRight={18}
              style={styles.iconStyles}
            />
            <Text style={styles.textAuthorized}>Language</Text>
          </View>
        </Link>
        <TouchableOpacity>
          <View style={styles.row}>
            <MoonIcon height={20} marginRight={16} style={styles.iconStyles} />
            <Text style={styles.textAuthorized}>Dark theme</Text>
          </View>
        </TouchableOpacity>
        <Link href="/logout">
          <View style={styles.row}>
            <LogoutIcon
              height={20}
              marginRight={16}
              style={styles.iconStyles}
            />
            <Text style={styles.textAuthorized}>Log out</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Account;
