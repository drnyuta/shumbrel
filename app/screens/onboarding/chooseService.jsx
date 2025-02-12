import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ServiceChoice from "../../components/ServiceChoice";
import { Link } from "expo-router";

import BlueUmbrella from "../../../assets/images/Umbrella-blue.png";
import LeftArrow from "../../../assets/icons/left-arrow.svg";
import RedUmbrella from "../../../assets/images/Umbrella-red.png";
import Logo from "../../../assets/images/Logo-blue.svg";

const ChooseService = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={"screens/onboarding/welcome"}>
        <LeftArrow />
      </Link>
      <View
        style={{
          paddingHorizontal: 30,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text style={[styles.text, { marginTop: 40 }]}>Choose service</Text>
        <ServiceChoice img={BlueUmbrella} text="I want to get an umbrella" />
        <ServiceChoice img={RedUmbrella} text="I want to share my umbrella" />
        <Logo style={{ alignSelf: "center" }} height={100} />
      </View>
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
  },
});

export default ChooseService;
