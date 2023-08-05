// ResetPasswordScreen.js
import React, { useState } from 'react';
import { View,StyleSheet,Image, TextInput,Text,TouchableOpacity, Button, ActivityIndicator, Alert, ScrollView } from 'react-native';
function ResetPasswordScreen({ handleResetPassword, loading }) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (email) {
      handleResetPassword(email);
    } else {
      Alert.alert('Email is required', 'Please enter your email address.');
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView style={{padding:5}}>
      <View style={styles.forgotScreen}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </View>
      <View style={styles.imageMove}>
        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/8063764_63457__2_-removebg-preview.png?alt=media&token=8ad713c9-b0d1-4526-94d6-756b8f460ac2' }}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'contain',
          }}>

        </Image>
      </View>
      <View style={styles.text1}>
        <Text style={styles.forgot}>Enter the email address</Text>
      </View>
      <Text style={styles.forgot}>associated with your account.</Text>

      <View style={styles.textSize}>
        <Text style={styles.text2}>We will email you a link to reset</Text>
      </View>
      <Text style={styles.text2}>your password.</Text>
      <View style={{
        marginTop: 20,
        width: '80%',
        height: '8%',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderBottomWidth: 1,
        borderColor: 'gray',
      }}>
        <TextInput
          placeholder="Enter Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={'gray'}
        />
      </View>
      <TouchableOpacity onPress={handleReset}
        disabled={loading} style={{
          width: '45%',
          height: 47,
          marginTop: 20,

        }}>
        <View style={{
          borderRadius: 27,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'gray',
          backgroundColor: '#5f9ea0',
          flex: 1
        }} >
          {loading ? (
            <ActivityIndicator size="small" /> // Show loading indicator while loading
          ) : (
            <Text >
              send
            </Text>
          )}

        </View>
      </TouchableOpacity>
</ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  main: {
      flex: 1,
      alignItems: 'center'
  },
  forgot: {
      fontWeight: '600',
      fontSize: 18,
  },
  forgotScreen: {
      paddingTop: '4%'
  },
  image: {
      resizeMode: 'contain'
  },
  imageMove: {
      width: '90%',
      paddingTop: '12%'
      // backgroundColor: 'red',

  },
  text1: {
      paddingTop: '4%'
  },
  textSize: {
      paddingTop: '9%'
  },
  text2: {
      color: 'gray',
      fontWeight: '500'
  }
})

export default ResetPasswordScreen;
