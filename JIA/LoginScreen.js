import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Button, Linking, ActivityIndicator, Alert } from 'react-native';

function LoginScreen({ navigation, setEmail, setPassword, handleLogin, handleResetPassword, loading }) {
  const [showPassword, setShowPassword] = useState(false);
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
            Welcome back
          </Text>
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
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
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
          marginTop: 19, flexDirection: 'row-reverse',
          // marginLeft: 34
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={{ color: '#416FDF' }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: '4%' }}>
          <TouchableOpacity onPress={() => handleLogin(navigation)}>
            <View style={{
              width: '80%',
              height: 60,
              marginLeft: 30,
              borderRadius: 17, justifyContent: 'center',
              backgroundColor: '#416FDF',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
            }}>
              {loading ? (
                <ActivityIndicator size="small" /> // Show loading indicator while loading
              ) : (
                <Text style={{ color: 'white' }}>
                  Sign In
                </Text>
              )}
            </View>

          </TouchableOpacity>

        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: '4%'
        }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#416FDF' }}> Sign Up</Text>
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
          <Text style={{ fontSize: 12, marginLeft:3 }}>and</Text>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  passwordToggle: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});
export default LoginScreen;
