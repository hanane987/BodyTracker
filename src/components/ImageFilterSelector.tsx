import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ImageFilterSelector = ({ onSelectFilter }) => {
  const filters = [
    { id: 'none', name: 'No Filter' },
    { id: 'grayscale', name: 'Grayscale' },
    { id: 'contrast', name: 'High Contrast' },
    { id: 'brightness', name: 'Bright' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Filter</Text>
      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={styles.filterButton}
            onPress={() => onSelectFilter(filter.id === 'none' ? null : filter.id)}
          >
            <Text style={styles.filterText}>{filter.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  filterText: {
    color: '#333',
  },
});

export default ImageFilterSelector;
