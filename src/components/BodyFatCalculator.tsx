import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const BodyFatCalculator = ({ onSave }) => {
  const [measurements, setMeasurements] = useState({
    neck: '',
    waist: '',
    hip: '',
    height: '',
    gender: 'male',
  });

  const calculateBodyFat = () => {
    const { neck, waist, hip, height, gender } = measurements;
    let bodyFat;

    if (gender === 'male') {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    const result = {
      ...measurements,
      bodyFat: bodyFat.toFixed(1),
      date: new Date().toISOString(),
    };

    if (onSave) {
      onSave(result);
    }

    return bodyFat.toFixed(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Body Fat Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Neck Circumference (cm)"
        keyboardType="numeric"
        value={measurements.neck}
        onChangeText={(text) => setMeasurements({ ...measurements, neck: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Waist Circumference (cm)"
        keyboardType="numeric"
        value={measurements.waist}
        onChangeText={(text) => setMeasurements({ ...measurements, waist: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Hip Circumference (cm)"
        keyboardType="numeric"
        value={measurements.hip}
        onChangeText={(text) => setMeasurements({ ...measurements, hip: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={measurements.height}
        onChangeText={(text) => setMeasurements({ ...measurements, height: text })}
      />
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            measurements.gender === 'male' && styles.selectedGender,
          ]}
          onPress={() => setMeasurements({ ...measurements, gender: 'male' })}
        >
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            measurements.gender === 'female' && styles.selectedGender,
          ]}
          onPress={() => setMeasurements({ ...measurements, gender: 'female' })}
        >
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.calculateButton} onPress={calculateBodyFat}>
        <Text style={styles.calculateButtonText}>Calculate Body Fat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedGender: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  genderText: {
    color: '#333',
  },
  calculateButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BodyFatCalculator;
