import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const NavElement = ({ iconName, onPress, activeTab }) => {
  const color = activeTab ? "rgb(163,132,243)" : "#C9CED7";
  return (
    <TouchableOpacity style={styles.navElement} onPress={onPress}>
      <Ionicons name={iconName} size={24} color={color} />
    </TouchableOpacity>
  );
};
const BottomNav = () => {
  const [activeTab, setActiveTab] = useState(1);
  const iconsArr = ["ios-menu-sharp", "wallet-outline", "man-outline"];
  return (
    <View style={styles.nav}>
      {iconsArr.map((item, index) => {
        return (
          <NavElement
            iconName={item}
            onPress={() => setActiveTab(index)}
            activeTab={activeTab === index}
            key={index}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    position: "fixed",
    bottom: 0,
    height: 64,
    backgroundColor: "white",
    width: "100%",
    left: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  navElement: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default BottomNav;
