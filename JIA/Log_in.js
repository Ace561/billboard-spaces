import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, BackHandler, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/authContext';

export default function Log_in({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  // todo use this function on the login button
  const handleLogin = () => {
    login(email, password)
      .then(() => {
        navigation.navigate('Add')
      })
      .catch(error => {
        // console.log(error.response.data);
        alert('Wrong email or password')
        // error('error message')
      });
  };

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
              marginLeft: 20, width: 300,
            }}
            placeholder="Enter Email"
            value={email}
            onChangeText={text => setEmail(text)}
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
              marginLeft: 20, width: 300,
            }}
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={{
          marginTop: 19, flexDirection: 'row-reverse',
          // marginLeft: 34
        }}>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate('Recovery')} style={{ color: '#416FDF' }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: '4%', }}>
          <TouchableOpacity onPress={
            handleLogin
          }>
            <View  style={{
              width: '80%',
              height: 60,
              marginLeft: 30,
              borderRadius: 17, justifyContent: 'center',
              backgroundColor: '#416FDF',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
            }}>
              <Text style={{ color: 'white' }}>
                Sign In
              </Text>
            </View>

          </TouchableOpacity>

        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: '4%'
        }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() =>
            navigation.navigate('sign_up')
          }>
            <Text style={{ color: '#416FDF', }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
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
})