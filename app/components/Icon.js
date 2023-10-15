import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ size = 60, color = "white", name, backgroundColor="black" }) => {
  return (
    <View
      style={{
        backgroundColor,
        height: size,
        width: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons size={size * 0.5} name={name} color={color}/>
    </View>
  );
};

export default Icon;
