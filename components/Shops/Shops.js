import React from 'react'
import ShopItem from './ShopItem'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
const Shops = () => {
    return (
        <ScrollView style={styles.container} horizontal>
            <ShopItem categories='Electronic'/>
            <ShopItem categories='Food'/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 16
    }
  });
export default Shops