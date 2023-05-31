import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getWeather } from './api';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handlePress = async () => {
    const data = await getWeather(city);
    console.log(data); // log the data object to the console
    setWeather(data);
  };
  

  // const handlePress = async () => {
  //   const data = await getWeather(city);
  //   setWeather(data);
  // };

  useEffect(() => {
    async function fetchData() {
      const data = await getWeather('');
      setWeather(data);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a location"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <MaterialCommunityIcons name="cloud-search-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {weather && weather.weather && (
  <View style={styles.weatherContainer}>
    <Text style={styles.weatherText}>{weather.name}</Text>
    <Text style={styles.weatherText}>{weather.weather[0].main}</Text>
    <Text style={styles.weatherText}>{Math.round(weather.main.temp)}°C</Text>
  </View>
)}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    margin: 8,
    width: '50%',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  weatherContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 24,
    marginBottom: 8,
  },
});
