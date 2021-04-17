import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const MounthSelector = () => {
    return (
        <View style={styles.selectorContainer}>
            <TouchableOpacity>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.selectorText}>January</Text>
                <TouchableOpacity>
            <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}
const SpendingInfo = () => {
    return (
        <View style={styles.spendingInfo}>
            <Text style={styles.spendingInfoTitle}>Spendings</Text>
            <Text style={styles.spendingInfoCash}>$ 137,000</Text>
        </View>
    )
}
const Spending = () =>{
    return (
        <View style={styles.container}>
            <SpendingInfo/>
            <MounthSelector/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 98,
        marginTop: 14,
        borderRadius: 6,
        backgroundColor: 'white'
    },
    selectorContainer: {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    selectorText: {
        fontSize: 16,
        fontWeight: "500"
    },
    spendingInfo: {
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
    },
    spendingInfoCash: {
        fontSize: 16,
        fontWeight: "600"
    },
    spendingInfoTitle: {
        color: '#5685FD',
        fontSize: 14,
        fontWeight: "500"
    }
  });
export default Spending