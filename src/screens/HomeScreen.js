import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Home</Text>
    <Button
      title="Components Demo"
      onPress={() => navigation.navigate('Components')}>
    </Button>
    <Button
      title="List Demo"
      onPress={() => navigation.navigate('List')}>
    </Button>
    <Button
      title="Image Demo"
      onPress={() => navigation.navigate('Image')}>
    </Button>
    <Button
      title="Counter Demo"
      onPress={() => navigation.navigate('Counter')}>
    </Button>
    <Button
      title="Color Demo"
      onPress={() => navigation.navigate('Color')}>
    </Button>
    <Button
      title="Square Demo"
      onPress={() => navigation.navigate('Square')}>
    </Button>
    <Button
      title="Text Demo"
      onPress={() => navigation.navigate('Text')}>
    </Button>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;