// RegisterScreen.js
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, Text, Button, TouchableOpacity, ActivityIndicator, Linking, StyleSheet } from 'react-native';

function RegisterScreen({ navigation, setEmail, setPassword, handleRegister, loading }) {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')

  return (
    <View style={styles.main}>
      <View style={{
        width: '100%', height: '100%', backgroundColor: 'white',
        marginTop: 100, borderTopRightRadius: 50,
        borderTopLeftRadius: 50
      }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{
            fontSize: 30, marginTop: 100, color: '#416FDF',
            fontWeight: 'bold'
          }}>
            Get Started
          </Text>
        </View>

        <View style={{
          marginTop: 30,
          width: '80%',
          height: '8%',
          marginLeft: 30,
          borderRadius: 17, justifyContent: 'center',
          backgroundColor: '#F5F5F5', borderWidth: 1,
          borderColor: 'gray'
        }}>
          <TextInput
            style={{
              marginLeft: 20,
            }}
            placeholder="Enter Full Name"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={{
          marginTop: 20,
          width: '80%',
          height: '8%',
          marginLeft: 30,
          borderRadius: 17, justifyContent: 'center',
          backgroundColor: '#F5F5F5',
          borderWidth: 1,
          borderColor: 'gray'
        }}>
          <TextInput
            style={{
              marginLeft: 20,

            }}
            placeholder="Enter Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{
          marginTop: 20,
          width: '80%',
          height: '8%',
          marginLeft: 30,
          borderRadius: 17, justifyContent: 'center',
          backgroundColor: '#F5F5F5',
          borderWidth: 1,
          borderColor: 'gray'
        }}>
          <TextInput
            style={{
              marginLeft: 20,
            }}
            placeholder="Enter Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>


        <View style={{
          paddingTop: '4%'
        }}>
          <TouchableOpacity onPress={() => handleRegister(navigation)}
            disabled={loading}>
            <View style={{
              width: '80%',
              height: 60,
              marginLeft: 30,
              borderRadius: 17, justifyContent: 'center',
              backgroundColor: '#416FDF',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray'
            }}>
              {loading ? (
                <ActivityIndicator size="small" /> // Show loading indicator while loading
              ) : (
                <Text style={{ color: 'white' }}>
                  Sign Up
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row', paddingTop: '4%',
          justifyContent: 'center'
        }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}
            disabled={loading}
          >
            <Text style={{ color: '#416FDF' }}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row', paddingTop: '4%',
          justifyContent: 'center'
        }}>
          <Text style={{ fontSize: 11 }}>By logging in, you agree to our </Text>
          <Text style={{ fontSize: 12, color: '#00008b' }} onPress={() => (
            Linking.openURL('https://doc-hosting.flycricket.io/billboardspaces-terms-of-use/eb356c8d-aeb7-4035-a314-dd1d6514ae55/terms')
          )}>Terms of Service</Text>
          <Text style={{ fontSize: 12, marginLeft: 3 }}>and</Text>
          <Text style={{ fontSize: 12, color: '#dc143c' }} onPress={() => (
            Linking.openURL('https://doc-hosting.flycricket.io/billboard-spaces-privacy-policy/79794fe8-f714-4eec-a7b8-0456f592ee61/privacy')
          )}> Privacy Policy.</Text>
        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#6EAEE7'
  },
  passwordToggle: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
})

export default RegisterScreen;
