import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BankItem from './BankItem';
const Banks = ( ) => {
    const [showCards, setShowCards] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Barclays Bank</Text>
            <TouchableOpacity style={styles.cardShowToggler} onPress={() => setShowCards(prev => !prev)}>
                <MaterialIcons name={showCards ? 'arrow-drop-up' : 'arrow-drop-down'} size={24} color="black" />
            </TouchableOpacity>
            <ScrollView horizontal style={showCards ? styles.banksItemContainerOpen :  styles.banksItemContainerClose}>
            <BankItem card='visa'/>
            <BankItem card='master'/>
            <BankItem card='visa'/>
            <BankItem card='master'/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 28
    },
    title: {
        fontSize: 16,
        marginBottom: 29
    },
    cardShowToggler: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    banksItemContainerClose: {
        height: 0,
    },
    banksItemContainerOpen: {
        height: '100%'
    }
  });
export default Banks