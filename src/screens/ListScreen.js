import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'john' },
    { name: 'james' },
    { name: 'jim' },
    { name: 'jeff' },
    { name: 'j' },
    { name: 'jack' },
  ]
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name}</Text>
      }}
    ></FlatList>
  )

}

const styles = StyleSheet.create({
  text: {
    marginVertical: 10
  }

})

export default ListScreen