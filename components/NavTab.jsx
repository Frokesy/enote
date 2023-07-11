import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const NavTab = () => {
    const addNewTask = () => {
        console.log('add new task')
    }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>0 undone tasks</Text>
        <Feather
        onPress={addNewTask}
        name="edit" size={20} color="#ff9f80" />
    </View>
  )
}

export default NavTab

const styles = StyleSheet.create({
    text: {
        color: '#ff9f80',
        fontSize: 16,
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