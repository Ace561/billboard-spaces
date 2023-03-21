import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Portrait({ navigation }) {
  return (
    <ScrollView style={styles.main}>
      <View style={{
        flexDirection: 'row',
        marginTop: 10
      }}>
        <Text style={{
          fontSize: 24,
          color: '#000000',
          marginLeft: 20,
          fontWeight: '600'
        }}>
          Location
        </Text>
      </View>
      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false} style={{
          // flexDirection:'row',
          // backgroundColor:'red'
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
          {/* <TouchableOpacity> */}
          <Text style={{ fontWeight: '500' }}>Akwa Ibom</Text>
          {/* </TouchableOpacity> */}

        </View>

      </ScrollView>
      {/* <View>
        <View style={{
          flexDirection: 'row',
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 24,
            color: '#000000',
            marginLeft: 20,
            fontWeight: '600'
          }}>
            Popular
          </Text>
          </View>
        </View > */}
      <View style={{
        flexDirection: 'row',
        marginTop: 20
      }}>
        <View style={{
          width: 200,
          height: 220,
          // backgroundColor:'red',

        }}>
          <TouchableOpacity onPress={()=> navigation.navigate('Img5555')}>
            <Image source={require('../assets/5555.jpg')} style={{
              resizeMode: 'cover',
              width: 190,
              height: 150,
              marginLeft: 5

            }} />

            <Text style={{ marginLeft: 5 }}>
              Itam Market Uyo, Akwa Ibom
            </Text>
          </TouchableOpacity>

        </View>
        <View style={{
          width: 180,
          height: 220,
          // backgroundColor:'red',
          marginLeft: 10
        }}>
          <TouchableOpacity onPress={()=> navigation.navigate('Itam')}>
            <Image source={require('../assets/itam.png')} style={{
              resizeMode: 'contain',
              width: 190,
              height: 150,
              marginLeft: 5

            }} />

            <Text>
              Itam Junction By Itam Market Uyo, Akwa Ibom
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        // marginTop:20

      }}>
        <View style={{
          width: 200,
          height: 220,
          //  backgroundColor:'red',

        }}>
          <TouchableOpacity onPress={()=> navigation.navigate('Oron')}>
            <Image source={require('../assets/oron.jpg')} style={{
              resizeMode: 'cover',
              width: 200,
              height: 150

            }} />
            <Text style={{ marginLeft: 5 }}>
              Oron Road By Ntekim Primary School Uyo, Akwa Ibom
            </Text>
          </TouchableOpacity>

        </View>
        <View style={{
          width: 180,
          height: 220,
          // backgroundColor:'red',
          marginLeft: 10
        }}>
          <TouchableOpacity onPress={()=>  navigation.navigate('Afa')}>
            <Image source={require('../assets/afaha.jpg')} style={{
              resizeMode: 'cover',
              width: 200,
              height: 150

            }} />
            <Text>
              Eket Oron Road By Afaha Eket Junction Uyo, Akwa Ibom
            </Text>

          </TouchableOpacity>
        </View>

      </View>
      <View style={{
        flexDirection: 'row',
        // marginTop:20

      }}>
        <View style={{
          width: 200,
          height: 220,
          //  backgroundColor:'red',

        }}>
          <TouchableOpacity onPress={()=> navigation.navigate('towel')}>
            <Image source={require('../assets/towel.jpg')} style={{
              resizeMode: 'cover',
              width: 190,
              height: 150,
              marginLeft: 5

            }} />
            <Text style={{ marginLeft: 5 }}>
              Twolane By Aka Road junction After Ibom Hall Uyo, Akwa Ibom
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width: 180,
          height: 220,
          //  backgroundColor:'red',

        }}>
          <TouchableOpacity onPress={()=>navigation.navigate('afriq')}>
            <Image source={require('../assets/shelter.jpg')} style={{
              resizeMode: 'cover',
              width: 190,
              height: 150,
              marginLeft: 5

            }} />
            <Text style={{ marginLeft: 5 }}>
              Oron Road By Shelter Afrique Uyo, Akwa Ibom
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        // marginTop:20

      }}>
        <View style={{
          width: 200,
          height: 220,
          //  backgroundColor:'red',

        }}>
          <TouchableOpacity onPress={()=> navigation.navigate('hotel')}>
            <Image source={require('../assets/hotel.jpg')} style={{
              resizeMode: 'cover',
              width: 190,
              height: 150,
              marginLeft: 5

            }} />
            <Text style={{ marginLeft: 5 }}>
              Nwaniba Road By  Le-meridian Hotel Junction Uyo, Akwa Ibom
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width: 200,
          height: 220,
          // backgroundColor:'red',

        }}>
          <TouchableOpacity onPress={()=>  navigation.navigate('way')}>
            <Image source={require('../assets/ibb.jpg')} style={{
              resizeMode: 'cover',
              width: 190,
              height: 150,
              marginLeft: 5

            }} />
            <Text style={{ marginLeft: 10 }}>
              Aka Road By Ibbway Uyo, Akwa Ibom
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    minWidth: '100%',
    minHeight: '100%'
  }
})