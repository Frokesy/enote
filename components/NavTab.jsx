import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const NavTab = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>0 records</Text>
        <Feather name="edit" size={20} color="white" />
    </View>
  )
}

export default NavTab

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        paddingHorizontal: 20,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
})