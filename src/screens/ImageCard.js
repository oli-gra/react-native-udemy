import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, source }) => {
  return <View>
    <Image source={source} />
    <Text>{title}</Text>
  </View>
}

const styles = StyleSheet.create({})

export default ImageDetail;