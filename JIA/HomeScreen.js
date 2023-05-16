import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Component from './Component';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{
        width: '100%',
        flexDirection: 'row'
      }}>
        <Text style={{
          marginTop: 15,
          fontSize: 23, marginLeft: 20,
          fontStyle: 'italic', color: '#416FDF'
        }}>BILLBOARD</Text>
        <Text style={{
          marginTop: 15,
          fontSize: 23, fontStyle: 'italic'
        }}> SPACES</Text>

      </View>
      <ScrollView style={{
        backgroundColor: '#ffffff',
        width: '100%',
      }}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('sign_up')} style={{
            width: '90%',
          }}>
            <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ass.png?alt=media&token=f76f317e-9e69-4d39-9c78-96a746a56621' }} style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
            }} />
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          backgroundColor: '#a9a9a9'
        }}>
          <Text style={{
            fontSize: 24,
            color: '#000000',
            marginLeft: 12,
            fontWeight: '250'
          }}>
            Buy BillBoard Spaces
          </Text>
        </View>


        <View style={{
          flexDirection: 'row',
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 24,
            color: '#000000',
            marginLeft: 12,
            fontWeight: '400'
          }}>
            Categories
          </Text>
        </View>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false} style={{
          }}>

          <View style={{
            marginTop: 14, width: 90, height: 30,
            marginLeft: 20,
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center'
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('48 sheet')}>
              <Text style={{ fontWeight: '500' }}>48 sheet</Text>
            </TouchableOpacity>

          </View>
          <View style={{
            marginTop: 14, width: 80, height: 30,
            marginLeft: 20,
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center'
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Portrait')}>
              <Text style={{ fontWeight: '500' }}>Portrait</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginTop: 14, width: 110, height: 30,
            marginLeft: 20,
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center'
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Large format')}>
              <Text style={{ fontWeight: '500' }}>Large formart </Text>
            </TouchableOpacity>
          </View>
          <View style={{
            marginTop: 14, width: 75, height: 30,
            marginLeft: 20,
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center'
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Unipole')}>
              <Text style={{ fontWeight: '500' }}>Unipole</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>
          <View style={{
            flexDirection: 'row',
            marginTop: 20
          }}>
            <Text style={{
              fontSize: 24,
              color: '#000000',
              marginLeft: 12,
              fontWeight: '400'
            }}>
              Popular
            </Text>
          </View>
        </View >
        <View style={{ marginRight: 16 }}>
          <View style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/111.jpg?alt=media&token=52f24aed-0a4c-4cf8-b559-8dd68b32191e' }}
              size="Unipole"
              location="Itam Adjacent Health Center Uyo, Akwa Ibom"
              navigate='Back' />


            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/2222.jpg?alt=media&token=1e6dbe4f-c170-4f75-a6cc-2e2c72f522ab' }}
              size="Large Format"
              location="Airport Road Uyo, Akwa Ibom"
              width='90%'
              navigate='Backu'
              margin={5}
            />

          </View>
          <View style={{
            flexDirection: 'row',
          }}>
            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/aka.jpg?alt=media&token=ebfe604b-c7e0-43af-a09c-a2d1d6f3c57a' }}
              size="48 sheet"
              location="Aka Road before Aka Junction Uyo, Akwa Ibom"
              navigate='Aka' />

            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/6666.jpg?alt=media&token=bc0f416b-371e-4c97-9594-d838d743acfb' }}
              size="48 sheet"
              location="Calabar Itu Road Before Health Center Uyo, Akwa Ibom"
              width='90%'
              navigate='Img6666'
              margin={5}
            />
          </View>
          <View style={{
            flexDirection: 'row',
          }}>
            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/5555.jpg?alt=media&token=c4a63a7f-bdcc-4adc-bc87-cfcc6f24cb34' }}
              size="Portrait"
              location="Itam Market Uyo, Akwa Ibom"
              navigate='Img5555' />

            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/nwaniba.jpg?alt=media&token=c15e1eb0-c10d-4985-9629-429463012096' }}
              size="48 sheet"
              location="Nwaniba By Annua Hospital Uyo, Akwa Ibom"
              width='90%'
              navigate='Nwaniba'
              margin={5}
            />
          </View>
          <View style={{
            flexDirection: 'row',
          }}>
            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/itam.png?alt=media&token=f81618f9-44ca-484e-8929-a6fcf6d0aa08' }}
              size=" Portrait"
              location="Itam Junction By Itam Market Uyo, Akwa Ibom"
              navigate='Itam' />

            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/oron.jpg?alt=media&token=350b3e8b-2551-40e6-a59e-72d30e853551' }}
              size="Portrait"
              location="Oron Road By Ntekim Primary School Uyo, Akwa Ibom"
              width='90%'
              navigate='Oron'
              margin={5}
            />
          </View>
          <View style={{
            flexDirection: 'row',
          }}>
            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ornRoad.jpg?alt=media&token=e4b3e7b1-834c-4f4b-9aba-14f4090c04d7' }}
              size="48 sheet"
              location="Oron Road By Shelter Afrique Uyo, Akwa Ibom"
              navigate='Oran' />

            <Component
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ituRoad.jpg?alt=media&token=ecf0d7bc-ff5f-461c-a828-85882b20c8ea' }}
              size="48 sheet"
              location="Itu Road Junction Uyo, Akwa Ibom"
              width='90%'
              navigate='Itu'
              margin={5}
            />
          </View>
        </View>



      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

  }
})