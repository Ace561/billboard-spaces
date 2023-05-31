// // ProfileScreen.js

// import React, { useContext } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { UserContext } from './UserContext';

// const ProfileScreen = () => {
//   const { userDetails } = useContext(UserContext);

//   return (
//     <View>
//       {userDetails ? (
//         <View style={styles.main}>
//           <Text>email: {userDetails.email}</Text>
//           <Text>Password: {userDetails.password}</Text>
//         </View>
//       ) : (
//         <Text>Please login to view profile details.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
// main:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
// }
// })
// export default ProfileScreen;
import React, { useContext, useEffect, useState } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { UserContext } from './UserContext';
import axios from 'axios';

const ProfileScreen = () => {
  const { userDetails } = useContext(UserContext);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (userDetails && userDetails.location) {
      fetchWeatherData(userDetails.location);
    }
  }, [userDetails]);

  const fetchWeatherData = async (location) => {
    try {
      const apiKey = '5f15632b20b2b6016eb772bb7b2e3970'; // Replace with your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  const convertKelvinToCelsius = (temperature) => {
    return Math.round(temperature - 273.15);
  };

  return (
    <View style={styles.weatherContainer}>
      <Text>User Details:</Text>
      <Text>Email: {userDetails?.email}</Text>
      <Text>Location: {userDetails?.location}</Text>
      {weather && (
        <View>
          <Text style={styles.weatherText}>Weather Condition:{weather.name}</Text>
          <Text style={styles.weatherText}>Temperature: {convertKelvinToCelsius(weather.main.temp)}°C</Text>
          <Text style={styles.weatherText}>Condition: {weather.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  weatherContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  weatherText: {
    // fontSize: 10,
    marginBottom: 8,
  },
})
