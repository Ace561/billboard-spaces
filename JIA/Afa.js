import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


export default function Afa() {
  return (
    <View style={styles.main}>
      <View style={{
        marginTop: 20
      }}>

            <Image source={require('../assets/afaha.jpg')}
          style={{
            width: '100%',
            height: 200,
            // resizeMode:'contain'
          }} 
        />
      </View>
      <View style={{
        backgroundColor: '#ffffff',
        height: 320,
        marginTop: 20
      }}>
        <Text style={{ marginLeft: 10, fontWeight: '300', fontSize: 23, marginTop: 15 }}>
        Portrait
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 23, fontWeight: '300', marginTop: 6 }}>
        Eket Oron Road By Afaha Eket Junction Uyo, Akwa Ibom
        </Text>

        
        {/* <View style={{
          marginTop: 10,
          width: 90,
          backgroundColor: 'red',
          height: 30, alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          borderColor: '#34B7F1',
          marginLeft: 280
        }}>
          <Text style={{ fontWeight: 'bold' }}>Unavailable</Text>
        </View> */}


<View style={{
          marginTop: 10,
          width: 90,
          backgroundColor: 'green',
          height: 30, alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          borderColor: '#34B7F1',
          marginLeft: 280
        }}>
          <Text style={{ fontWeight: 'bold' }}>Available</Text>
        </View>


        <View style={{
          // backgroundColor:'red',
          width: 360,
          height: 50,
          marginTop: 10,
          marginLeft: 10,
          borderRadius: 20
        }}>
          <TouchableOpacity onPress={() => (
            Linking.openURL("whatsapp://send?phone=+234 8100652910&text=Hi good day i want to verify the Portrait at Eket Oron Road By Afaha Eket Junction Uyo")
          )}>
            <View style={{
              width: 360,
              height: 50,
              // backgroundColor:'#416FDF', 
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#34B7F1'           }}>
              <Text style={{ color: '#34B7F1' }}>Verify the site</Text>
              <FontAwesome name="whatsapp" size={24} color="#34B7F1" style={{ marginLeft: 5 }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          // backgroundColor:'red',
          width: 360,
          height: 50,
          marginTop: 40,
          marginLeft: 10,
          borderRadius: 20,
          flexDirection:'row'
        }}>
          <TouchableOpacity onPress={() => (
            Linking.openURL('tel:+234 8100652910')
          )}>
            <View style={{
              width: 360,
              height: 50,
              backgroundColor: '#34B7F1',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20
            }}>
              <Text style={{color:'white'}}>Mobile number</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})