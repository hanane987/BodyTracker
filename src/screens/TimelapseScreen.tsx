import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import TimelapseGenerator from '../components/TimelapseGenerator';
import ImageFilterSelector from '../components/ImageFilterSelector';

const TimelapseScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const album = await MediaLibrary.getAlbumAsync('BodyTracker');
      if (album) {
        const { assets } = await MediaLibrary.getAssetsAsync({
          album: album,
          sortBy: ['creationTime'],
          mediaType: ['photo'],
        });
        setPhotos(assets);
      }
    } catch (error) {
      console.error('Error loading photos:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageFilterSelector onSelectFilter={setSelectedFilter} />
      <TimelapseGenerator photos={photos} selectedFilter={selectedFilter} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TimelapseScreen;
