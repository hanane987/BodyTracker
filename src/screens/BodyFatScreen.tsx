import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BodyFatCalculator from '../components/BodyFatCalculator';
import ProgressChart from '../components/ProgressChart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BodyFatScreen = () => {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    loadMeasurements();
  }, []);

  const loadMeasurements = async () => {
    try {
      const data = await AsyncStorage.getItem('bodyFatMeasurements');
      if (data) {
        setMeasurements(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading measurements:', error);
    }
  };

  const saveMeasurement = async (newMeasurement) => {
    try {
      const updatedMeasurements = [...measurements, newMeasurement];
      await AsyncStorage.setItem('bodyFatMeasurements', JSON.stringify(updatedMeasurements));
      setMeasurements(updatedMeasurements);
    } catch (error) {
      console.error('Error saving measurement:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <BodyFatCalculator onSave={saveMeasurement} />
      <ProgressChart data={measurements} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BodyFatScreen;
