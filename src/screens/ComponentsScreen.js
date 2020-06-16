import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const hi = <Text>Hello to you</Text>
  return <View>
    <Text style={styles.text}>Hello World</Text>
    {hi}
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
})

export default ComponentsScreen