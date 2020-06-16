import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + action.payload }
    case 'dec':
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return <View>
    <Button
      title="+"
      onPress={() => dispatch({ type: 'inc', payload: 1 })} />
    <Button
      title="-"
      onPress={() => dispatch({ type: 'dec', payload: 1 })} />
    <Text>Current Count: {state.count}</Text>
  </View>
}

const styles = StyleSheet.create({})

export default CounterScreen;