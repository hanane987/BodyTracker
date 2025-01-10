import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { Video } from 'expo-av';

const TimelapseGenerator = ({ photos, selectedFilter }) => {
  const [generating, setGenerating] = useState(false);
  const [timelapseUri, setTimelapseUri] = useState(null);

  const applyFilter = async (uri) => {
    if (!selectedFilter) return uri;

    let actions = [];
    switch (selectedFilter) {
      case 'grayscale':
        actions.push({ resize: { width: 800 } });
        actions.push({ saturate: 0 });
        break;
      case 'contrast':
        actions.push({ resize: { width: 800 } });
        actions.push({ contrast: 1.5 });
        break;
      case 'brightness':
        actions.push({ resize: { width: 800 } });
        actions.push({ brightness: 1.2 });
        break;
      default:
        return uri;
    }

    try {
      const result = await ImageManipulator.manipulateAsync(uri, actions, {
        compress: 0.8,
        format: ImageManipulator.SaveFormat.JPEG,
      });
      return result.uri;
    } catch (error) {
      console.error('Error applying filter:', error);
      return uri;
    }
  };

  const generateTimelapse = async () => {
    if (photos.length < 2) {
      alert('Need at least 2 photos to generate a timelapse');
      return;
    }

    setGenerating(true);
    try {
      // Process images with selected filter
      const processedPhotos = await Promise.all(
        photos.map(photo => applyFilter(photo.uri))
      );

      // Here you would normally use a video processing library to create the timelapse
      // For this example, we'll just show the last processed image
      setTimelapseUri(processedPhotos[processedPhotos.length - 1]);
    } catch (error) {
      console.error('Error generating timelapse:', error);
      alert('Error generating timelapse');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.generateButton}
        onPress={generateTimelapse}
        disabled={generating}
      >
        <Text style={styles.generateButtonText}>
          {generating ? 'Generating...' : 'Generate Timelapse'}
        </Text>
      </TouchableOpacity>

      {generating && (
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      )}

      {timelapseUri && !generating && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewText}>Preview:</Text>
          <Video
            source={{ uri: timelapseUri }}
            style={styles.preview}
            useNativeControls
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  generateButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
  previewContainer: {
    marginTop: 20,
  },
  previewText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  preview: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});

export default TimelapseGenerator;
