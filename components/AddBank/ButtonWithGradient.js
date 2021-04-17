import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const ButtonWithGradient = () => {
  return (
    <LinearGradient
      colors={["#A384F3",  "#94DDF4"]}
      style={styles.addButton}
      start={{ x: 0, y: 0.5 }}
     end={{ x: 1, y: 0.5 }}
    >
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
    addButton: {
      width: 50,
      height: 50,
      borderRadius: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    }
  });
export default ButtonWithGradient;
