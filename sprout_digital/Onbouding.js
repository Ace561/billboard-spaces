import { StyleSheet, Text, Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import React from 'react'


export default function Onbouding({ navigation }) {
  return (

    <View style={styles.main}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}>
        <View style={{ alignItems: 'center' }}>
          <View style={{
            marginTop: 100
          }}>
            <Image source={require('../assets/yyy.jpg')} style={{
              width: 300,
              height: 250, resizeMode: 'contain'
            }} />
          </View>

          <Text style={{ color: 'white', fontSize: 40, marginTop: 26 }}>
            Welcome
          </Text>
          <View style={{ alignItems: 'center', width: 340, marginTop: 25, height: 50, backgroundColor: '#FFFFFF', borderRadius: 30, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() =>
              navigation.navigate('Log_in')
            }>
              <View style={{
                width: 340,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center'
              }}>

                <Text style={{ color: '#ff1493', fontSize: 24 }}>
                  Log In
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', width: 340, marginTop: 25, height: 50, backgroundColor: '#ff1493', borderRadius: 30, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() =>
              navigation.navigate('sign_up')
            }>
              <View style={{
                width: 340,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{ color: 'white', fontSize: 24 }}>
                  Sign up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        {/* <View style={{
        marginLeft:280, marginTop: -23
      }}>
        <TouchableOpacity onPress={() =>
        navigation.navigate('second')
        }>
          <Text style={{ color: 'white', fontSize: 17 }}>
            sign up
          </Text>
        </TouchableOpacity>
      </View> */}
      </ImageBackground>
      {/* <View>
        <Image source={require('../assets/onn.jpg')}
        style={{ width: 400, height: 400, resizeMode: 'contain' }}/>
      </View> */}


    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#6EAEE7',
  },
})