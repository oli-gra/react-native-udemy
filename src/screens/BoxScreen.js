import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <View style={styles.viewStyleOne} />
    <View style={styles.viewStyleTwo} />
    <View style={styles.viewStyleOne} />
  </View>
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewStyleOne: {
    height: 100,
    width: 100,
    backgroundColor: 'green'
  },
  viewStyleTwo: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  }
})

export default BoxScreen