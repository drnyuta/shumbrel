import { StyleSheet, Text, Image, View } from "react-native";
import { Link } from "expo-router";

import React from "react";

const ServiceChoice = ({ img, text, styleProp }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#000",
      width: 300,
      alignItems: "center",
      flexDirection: "row",
      overflow: "hidden",
    },
    text: {
      fontSize: 18,
      fontFamily: "Inter-Regular",
      marginLeft: 20,
      flexWrap: "wrap",
      flex: 1,
    },
    img: {
      width: 100,
      height: 100,
    },
  });
  return (
    <Link href={"screens/onboarding/geolocation"}>
      <View style={[styleProp, styles.button]}>
        <Image source={img} style={styles.img}></Image>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Link>
  );
};

export default ServiceChoice;
