import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Badge = () => {
  return (
    <View style={styles.badge}>
      <EvilIcons name="clock" size={24} color="black"/>
      <Text style={styles.text}>$1,340.10</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  badge: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "white",
    width: 105,
    borderRadius: 30,
    height: 33
  },
  text: {
      fontSize: 14,
      fontWeight: "500"
  }
});

export default Badge;
