import React from 'react'
import { Text, StyleSheet} from 'react-native';
const AccountTitle = ({title}) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}
const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "600"
    },
  });
export default AccountTitle