import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const BankDeleteButton = () => {
  return (
    <TouchableOpacity style={styles.deleteBtn}>
      <FontAwesome name="trash-o" size={24} color="white" />
    </TouchableOpacity>
  );
};
const CashInfo = () => {
  return (
    <View>
      <Text style={styles.cash}>$3,222.2</Text>
      <Text style={styles.bankInfo}>Tinkoff Black</Text>
    </View>
  );
};
const CardInfo = ({card}) => {
  const cardIcon = card === 'visa' ? 'cc-visa' : 'cc-mastercard'
  return (
    <View style={styles.cardInfo}>
      <FontAwesome name={cardIcon} size={28} color="grey" />
      <Text style={styles.cardInfoText}>** 4176</Text>
    </View>
  );
};
const BankItem = ({card}) => {
  const cardColor = card === 'visa' ? ["#1E1E1E", "#575757"] : ["#6A89FD", "#50A2FF"]
  return (
    <LinearGradient
      colors={cardColor}
      style={styles.container}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <CardInfo card={card}/>
      <CashInfo />
      <BankDeleteButton />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 195,
    height: 278,
    backgroundColor: "rgb(30,30,30)",
    marginRight: 16,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cash: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  bankInfo: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 12,
  },
  cardInfo: {
    position: "absolute",
    top: 16,
    right: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cardInfoText: {
    color: "rgba(255, 255, 255, 0.7)",
    marginLeft: 5,
  },
  deleteBtn: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    left: 16
  }
});
export default BankItem;
