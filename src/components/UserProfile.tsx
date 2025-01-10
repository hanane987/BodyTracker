import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfile = ({ profile, onProfileUpdate }) => {
  const [editing, setEditing] = useState(!profile);
  const [formData, setFormData] = useState(profile || {
    firstName: '',
    lastName: '',
    age: '',
    nationality: '',
    weight: '',
    height: '',
    address: '',
  });

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(formData));
      setEditing(false);
      if (onProfileUpdate) onProfileUpdate();
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  if (!editing) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Text>Name: {formData.firstName} {formData.lastName}</Text>
        <Text>Age: {formData.age}</Text>
        <Text>Nationality: {formData.nationality}</Text>
        <Text>Weight: {formData.weight} kg</Text>
        <Text>Height: {formData.height} cm</Text>
        <Text>Address: {formData.address}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setEditing(true)}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => setFormData({ ...formData, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => setFormData({ ...formData, lastName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={formData.age}
        keyboardType="numeric"
        onChangeText={(text) => setFormData({ ...formData, age: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Nationality"
        value={formData.nationality}
        onChangeText={(text) => setFormData({ ...formData, nationality: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={formData.weight}
        keyboardType="numeric"
        onChangeText={(text) => setFormData({ ...formData, weight: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={formData.height}
        keyboardType="numeric"
        onChangeText={(text) => setFormData({ ...formData, height: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Profile</Text>
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
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
