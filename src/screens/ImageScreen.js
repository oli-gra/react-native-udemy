import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageCard from './ImageCard';

const ImageScreen = () => {
  return <View>
    <Text>Image Screen</Text>
    <ImageCard
      title='Ocean'
      source={require('../../assets/beach.jpg')} />
    <ImageCard
      title='Jungle'
      source={require('../../assets/jungle.jpg')} />
    <ImageCard
      title='Mountain'
      source={require('../../assets/mountain.jpg')} />

  </View>
}

export default ImageScreen