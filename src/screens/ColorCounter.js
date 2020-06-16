import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { exp } from 'react-native/Libraries/Animated/src/Easing';

const ColorCounter = ({ color, onInc, onDec }) => {
  return <View>
    <Text>{color}</Text>
    <Button onPress={() => onInc()} title="+"></Button>
    <Button onPress={() => onDec()} title="-"></Button>
  </View>
}

const style = StyleSheet.create({})

export default ColorCounter
