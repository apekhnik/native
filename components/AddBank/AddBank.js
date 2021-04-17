import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonWithGradient from "./ButtonWithGradient";

const AddBank = () => {
  return (
    <View style={styles.addBankContainer}>
      <Text>Add Bank</Text>
      <ButtonWithGradient />
      <Text style={styles.bankCount}>2</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bankCount: {
    width: 20,
    height: 20,
    borderColor: '#8C93A2',
    borderWidth: 1.5,
    borderRadius: 50,
    textAlign: "center",
    color: "#8C93A2",
    fontSize: 11,
  },
  addBankContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 142,
      justifyContent: 'space-between'
  }
});
export default AddBank;
