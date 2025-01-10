import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const PhotoGallery = ({ photos }) => {
  const renderItem = ({ item }) => (
    <View style={styles.photoContainer}>
      <Image
        source={{ uri: item.uri }}
        style={styles.photo}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const photoSize = (width - 40) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 5,
  },
  photoContainer: {
    padding: 5,
  },
  photo: {
    width: photoSize,
    height: photoSize,
    borderRadius: 5,
  },
});

export default PhotoGallery;
