import React from "react";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
const imgUrl =
  "https://indicator.ru/thumb/2250x0/filters:quality(75):no_upscale()/imgs/2019/08/05/10/3484969/c8939b6846c0ad625f25ca33c4fba57d7e42bbbb.jpg";
const ShopPhoto = () => {
  return (
    <ImageBackground style={styles.shopPhoto} source={{ uri: imgUrl }}>
      <TouchableOpacity style={styles.deleteBtn}>
        <Feather name="x" size={18} color="#F5F5F5" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.likeBtn}>
        <AntDesign name="hearto" size={18} color="#F5F5F5" />
      </TouchableOpacity>
    </ImageBackground>
  );
};
const Discount = ({ discount }) => {
  return (
    <LinearGradient
      colors={["#A384F3", "#94DDF4"]}
      style={styles.discountContainer}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <Text style={styles.discountText}>{discount}</Text>
    </LinearGradient>
  );
};
const ShopItemHeader = ({ discount, name }) => {
  return (
    <View style={styles.shopItemHeader}>
      <Text style={styles.headerTitle}>{name}</Text>
      <Discount discount={discount} />
    </View>
  );
};
const ShopItem = ({ categories }) => {
  return (
    <View style={styles.container}>
      <ShopPhoto />
      <ShopItemHeader name="re: Store" discount="15%" />
      <Text style={styles.description}>{categories}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 301,
    height: 241,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 8,
    marginRight: 16,
  },
  shopPhoto: {
    width: "100%",
    height: 159,
    filter: "drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.15))",
    borderRadius: 6,
    position: 'relative'
  },
  shopItemHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: "24px",
    fontWeight: "600",
  },
  description: {
    color: "#A8ADB7",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 5,
  },
  discountContainer: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 30,
  },
  discountText: {
    color: "white",
  },
  deleteBtn: {
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "13px",
    right: "13px",
    position: "absolute"
  },
  likeBtn: {
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 13,
    left: 13,
    position: "absolute"
  }
});
export default ShopItem;
