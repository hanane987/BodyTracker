import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import BodyFatScreen from './src/screens/BodyFatScreen';
import CameraScreen from './src/screens/CameraScreen';
import TimelapseScreen from './src/screens/TimelapseScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'BodyFat') {
              iconName = focused ? 'body' : 'body-outline';
            } else if (route.name === 'Camera') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'Timelapse') {
              iconName = focused ? 'timer' : 'timer-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="BodyFat" component={BodyFatScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Timelapse" component={TimelapseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
