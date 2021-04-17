import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from './components/BottomNav/BottomNav';
import Header from './components/Header';
import MyAccount from './components/MyAccount/MyAccount';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <MyAccount/>
      <BottomNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: '10px',
    position: 'relative',
    paddingBottom: '75px'
  },
});
