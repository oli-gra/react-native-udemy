import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../screens/ColorCounter'

const COLOR_INC = 20

const reducer = (state, action) => {
  switch (action.color) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state

  return <View>
    <ColorCounter
      onInc={() => dispatch({ color: 'red', amount: COLOR_INC })}
      onDec={() => dispatch({ color: 'red', amount: -1 * COLOR_INC })}
      color="Red" />
    <ColorCounter
      onInc={() => dispatch({ color: 'green', amount: COLOR_INC })}
      onDec={() => dispatch({ color: 'green', amount: -1 * COLOR_INC })}
      color="Green" />
    <ColorCounter
      onInc={() => dispatch({ color: 'blue', amount: COLOR_INC })}
      onDec={() => dispatch({ color: 'blue', amount: -1 * COLOR_INC })}
      color="Blue" />
    <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    <Text>{red} {green} {blue}</Text>
  </View>

}

const styles = StyleSheet.create({})

export default SquareScreen