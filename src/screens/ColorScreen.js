import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'

const ColorScreen = () => {
  const [color, setColor] = useState([])
  console.log(color)

  return <View>
    <Text>Color Screen</Text>
    <Button
      title="Add colour"
      onPress={() => setColor([...color, randomRgb()])}
    />

    <FlatList
      keyExtractor={(item) => item}
      data={color}
      renderItem={({ item }) => {
        return <View style={{ height: 100, width: 100, backgroundColor: item }} />
      }}
    />
  </View>
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`

}

const styles = StyleSheet.create({})

export default ColorScreen;