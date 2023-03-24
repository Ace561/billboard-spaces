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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/5555.jpg?alt=media&token=c4a63a7f-bdcc-4adc-bc87-cfcc6f24cb34'}} style={{
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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/itam.png?alt=media&token=f81618f9-44ca-484e-8929-a6fcf6d0aa08'}} style={{
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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/oron.jpg?alt=media&token=350b3e8b-2551-40e6-a59e-72d30e853551'}} style={{
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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/afaha.jpg?alt=media&token=44fd895e-1e5b-4e30-8709-5ea0a326002d'}} style={{
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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/towel.jpg?alt=media&token=d12aaea6-b483-4867-a91b-6139a22005cc'}} style={{
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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/shelter.jpg?alt=media&token=9a01020e-7051-4d5c-b43e-a78be1dcda41'}} style={{
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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/hotel.jpg?alt=media&token=db1b99c6-225b-4f8f-a306-d7d3ed36303f'}} style={{
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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ibb.jpg?alt=media&token=5cd84b49-ea17-4da6-bd46-b40f558dcc27'}} style={{
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