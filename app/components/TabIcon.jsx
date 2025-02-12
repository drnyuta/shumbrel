import React from "react";
import { View, Text } from "react-native";

const TabIcon = ({ name, focused, icon: IconComponent, size, mt }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", width: 100 }}>
      <IconComponent width={size} height={size} marginTop={20}/>
      <Text
        style={{
          marginLeft: 3,
          fontSize: focused ? 14 : 13,
          marginTop: mt ? mt: 3,
        }}
      >
        {name}
      </Text>
      <View
        style={{
          height: 2,
          width: 50,
          backgroundColor: focused ? "#29A5DB" : "transparent",
          marginTop: 5,
        }}
      ></View>
    </View>
  );
};

export default TabIcon;
