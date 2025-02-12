import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ServiceChoice from "../../components/ServiceChoice";
import { Link } from "expo-router";

import BlueUmbrella from "../../../assets/images/Umbrella-blue.png";
import LeftArrow from "../../../assets/icons/left-arrow.svg";
import RedUmbrella from "../../../assets/images/Umbrella-red.png";
import Logo from "../../../assets/images/Logo-blue.svg";

const Confirmation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, { fontSize: 30, marginTop: 180 }]}>
          All done
        </Text>
        <Text style={styles.text}>
          We added your pin on the map for others to see. You can contact people
          by clicking the pin and discuss your sharing!{" "}
        </Text>
        <Text style={styles.text}>Click the button below to start</Text>
        <Link href={"/screens/(tabs)/map"} style={styles.startButton}>
          <Text style={styles.buttonText}>Start</Text>
        </Link>
      </View>
      <Logo style={{ alignSelf: "center" }} height={100} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    paddingBottom: 50,
    backgroundColor: "#E3F5FC",
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    gap: 40,
  },
  startButton: {
    backgroundColor: "#2385AF",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#DCDCDC",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-Medium",
  },
});

export default Confirmation;
