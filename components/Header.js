import React from 'react'
import { StyleSheet, View } from 'react-native';
import AddBank from './AddBank/AddBank';
import Badge from './Badge/Badge';

const Header = ( ) => {
    return (
        <View style={styles.header}>
            <Badge/>
            <AddBank/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      display: 'flex',
      backgroundColor: '#E5E5E5',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 50,
      marginBottom: 24,
      marginTop: 15
    },
  });
  

export default Header;