import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView, BackHandler, Alert } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Add({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <View style={{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: 85
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{ marginTop: 50, marginLeft: 20, }}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <Text style={{ marginTop: 50, marginLeft: 20, fontWeight: 'bold', fontSize: 17 }}>Add your billboard</Text>
      </View>


      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={{
          width: 350,
          height: 130,
          backgroundColor: '#ffffff',
          marginTop: 30,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#34B7F1',
        }}>
          <Text style={{
            marginTop: 20,
            marginLeft: 20,
            fontWeight: '400'
          }}>
            Take An Image Of Your Billboard
          </Text>
          <View style={{
            width: 20, height: 20, backgroundColor: '#34B7F1', borderRadius: 100, justifyContent: 'center', alignItems: 'center',
            marginTop: 20, marginLeft: -10
          }}>
            <Text style={{ color: '#ffffff' }}>1</Text>
          </View>
          <Text style={{
            marginTop: -16,
            marginLeft: 20,
          }}>
            With a good camera, take a picture of your billboard with a nice traffic background, 50m away from the billboard
          </Text>
        </View>



        <View style={{
          width: 350,
          height: 130,
          backgroundColor: '#ffffff',
          marginTop: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#34B7F1',
        }}>
          <Text style={{
            marginTop: 20,
            marginLeft: 20,
            fontWeight: '400'
          }}>
            Location
          </Text>
          <View style={{
            width: 20, height: 20, backgroundColor: '#34B7F1', borderRadius: 100, justifyContent: 'center', alignItems: 'center',
            marginTop: 20, marginLeft: -10
          }}>
            <Text style={{ color: '#ffffff' }}>2</Text>
          </View>
          <Text style={{
            marginTop: -16,
            marginLeft: 20,
          }}>
            In the body of the mail send the location (Street name, Landmark feature eg:Juction, Local Government Area and State)
          </Text>
        </View>


        <View style={{
          width: 350,
          height: 130,
          backgroundColor: '#ffffff',
          marginTop: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#34B7F1',
        }}>
          <Text style={{
            marginTop: 20,
            marginLeft: 20,
            fontWeight: '400'
          }}>
            Billboard Size
          </Text>
          <View style={{
            width: 20, height: 20, backgroundColor: '#34B7F1', borderRadius: 100, justifyContent: 'center', alignItems: 'center',
            marginTop: 20, marginLeft: -10
          }}>
            <Text style={{ color: '#ffffff' }}>3</Text>
          </View>
          <Text style={{
            marginTop: -16,
            marginLeft: 20,
          }}>
            In the body of the mail fill in the size of your billboard (48 sheet, large format, Unipole,e.t.c)
          </Text>
        </View>


        <View style={{
          width: 350,
          height: 130,
          backgroundColor: '#ffffff',
          marginTop: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#34B7F1',
        }}>
          <Text style={{
            marginTop: 20,
            marginLeft: 20,
            fontWeight: '400',
            
          }}>
            Company name and Contact information          </Text>
          <View style={{
            width: 20, height: 20, backgroundColor: '#34B7F1', borderRadius: 100, justifyContent: 'center', alignItems: 'center',
            marginTop: 20, marginLeft: -10
          }}>
            <Text style={{ color: '#ffffff' }}>4</Text>
          </View>
          <Text style={{
            marginTop: -16,
            marginLeft: 20,
          }}>
            fill in your company name and contact information. if you don't own a  company 
          </Text>
        </View>

        <View style={{
          width: 350,
          height: 130,
          backgroundColor: '#ffffff',
          marginTop: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#34B7F1',
        }}>
          <Text style={{
            marginTop: 20,
            marginLeft: 20,
            fontWeight: '400'
          }}>
            Company name and Contact information          </Text>
          <View style={{
            width: 20, height: 20, backgroundColor: '#34B7F1', borderRadius: 100, justifyContent: 'center', alignItems: 'center',
            marginTop: 20, marginLeft: -10
          }}>
            <Text style={{ color: '#ffffff' }}>4</Text>
          </View>
          <Text style={{
            marginTop: -16,
            marginLeft: 20,
          }}>
            fill in your company name and contact information. if you don't own a  company 
          </Text>
        </View>

      </View>


      <View style={{
        // backgroundColor:'red',
        width: 360,
        height: 50,
        marginTop: 30,
        marginLeft: 10,
        borderRadius: 20,

      }}>
        <TouchableOpacity onPress={() => (
          Linking.openURL("mailto:billboardspaces@gmail.com?subject=billboard&")
        )}>
          <View style={{
            width: 360,
            height: 50,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#34B7F1'
          }}>
            <Text style={{ color: '#34B7F1' }}>Submmit your mail</Text>
            <MaterialCommunityIcons name="gmail" size={24} color="#34B7F1" style={{ marginLeft: 5 }} />
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
        flexDirection: 'row',
        marginBottom:10
      }}>
        <TouchableOpacity onPress={() => (
          Linking.openURL('tel:+234 7069228187')
        )}>
          <View style={{
            width: 360,
            height: 50,
            backgroundColor: '#34B7F1',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
            <Text style={{ color: 'white' }}>Contact us for more info</Text>
            <Entypo name="mobile" size={24} color="#ffffff" style={{ marginLeft: 5 }} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})