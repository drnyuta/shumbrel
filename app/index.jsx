import React, { useEffect, useState } from "react";
import { Text, View, Animated } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../assets/images/Logo-blue.svg";

const Welcome = () => {
  const [opacity] = useState(new Animated.Value(0));
  const router = useRouter();

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1, 
      duration: 1000, 
      useNativeDriver: true, 
    }).start();

    const timer = setTimeout(() => {
      router.push("screens/onboarding/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, [opacity, router]);

  const styles = {
    container: {
      padding: 20,
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#E3F5FC",
    },
    title: {
      fontSize: 32,
      fontFamily: "Inter-Medium",
      textTransform: "uppercase",
      marginTop: 0,
    },
    text: {
      fontSize: 16,
      fontFamily: "Inter-Regular",
    },
    wrapper: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%", 
      paddingHorizontal: 20, 
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Logo style={{marginLeft: 30}} width={200} height={200}/>
        <Text style={styles.title}>Shumbrel</Text>
        <Text style={styles.text}>Share Your Umbrella, Not the Waste!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
