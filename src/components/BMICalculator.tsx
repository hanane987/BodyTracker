import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BMICalculator = ({ profile }) => {
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (profile?.weight && profile?.height) {
      calculateBMI(profile.weight, profile.height);
    }
  }, [profile]);

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(bmiValue);
    setCategory(getBMICategory(bmiValue));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  if (!bmi) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>
        <Text>Please complete your profile with weight and height to calculate BMI</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.bmiValue}>BMI: {bmi}</Text>
        <Text style={styles.category}>Category: {category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  resultContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
  },
  bmiValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  category: {
    fontSize: 18,
    color: '#666',
  },
});

export default BMICalculator;
