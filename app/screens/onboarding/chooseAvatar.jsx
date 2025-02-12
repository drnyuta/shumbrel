import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";

import DuckAvatar from "../../../assets/images/duck.svg";
import ElephantAvatar from "../../../assets/images/elephant.svg";
import AnacondaAvatar from "../../../assets/images/anaconda.svg";
import ButterflyAvatar from "../../../assets/images/butterfly.svg";
import FishAvatar from "../../../assets/images/fish.svg";
import PandaAvatar from "../../../assets/images/panda.svg";
import ParrotAvatar from "../../../assets/images/parrot.svg";
import TurtleAvatar from "../../../assets/images/turtle.svg";
import JaguarAvatar from "../../../assets/images/jaguar.svg";
import { router } from "expo-router";

const avatars = {
  jaguar: JaguarAvatar,
  elephant: ElephantAvatar,
  anaconda: AnacondaAvatar,
  butterfly: ButterflyAvatar,
  fish: FishAvatar,
  panda: PandaAvatar,
  parrot: ParrotAvatar,
  turtle: TurtleAvatar,
  duck: DuckAvatar,
};

const ChooseAvatar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const saveAvatar = async (avatarName) => {
    setSelectedAvatar(avatarName);
    router.push("screens/onboarding/chooseService");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, { marginTop: 70 }]}>Pick avatar</Text>

        <View style={styles.row}>
          {Object.keys(avatars).slice(0, 3).map((key) => (
            <TouchableOpacity key={key} onPress={() => saveAvatar(key)}>
              {React.createElement(avatars[key])}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          {Object.keys(avatars).slice(3, 6).map((key) => (
            <TouchableOpacity key={key} onPress={() => saveAvatar(key)}>
              {React.createElement(avatars[key])}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          {Object.keys(avatars).slice(6, 9).map((key) => (
            <TouchableOpacity key={key} onPress={() => saveAvatar(key)}>
              {React.createElement(avatars[key])}
            </TouchableOpacity>
          ))}
        </View>
      </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});

export default ChooseAvatar;