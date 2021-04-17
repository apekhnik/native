import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Banks from '../Banks/Banks';
import Shops from '../Shops/Shops';
import Spending from '../Spending/Spending';
import AccountTitle from './AccountTitle';
const MyAccount = () => {
    return (
        <ScrollView >
            <AccountTitle title='My Account'/>
            <Shops/>
            <Spending/>
            <Banks/>
            <Banks/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "600"
    },
  });
export default MyAccount;