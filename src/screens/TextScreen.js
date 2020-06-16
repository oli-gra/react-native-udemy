import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {

  const [text, setText] = useState('')

  return <View>
    <Text>Enter name</Text>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      value={text}
      onChangeText={text => setText(text)}
    />
    <Text>My name is {text}</Text>
  </View>
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    borderColor: 'blue',
    borderWidth: 1
  }
})

export default TextScreen