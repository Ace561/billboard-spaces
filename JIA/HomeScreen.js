import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{
        // backgroundColor: 'red',
        width: '100%',
        // height: 15,
        // justifyContent: 'center',
        flexDirection: 'row'
      }}>
        <Text style={{
          marginTop: 15, 
          fontSize: 23, marginLeft: 20,
          fontStyle: 'italic', color: '#416FDF'
        }}>BILLBOARD</Text>
        <Text style={{
           marginTop: 15,
           fontSize: 23, fontStyle: 'italic' }}> SPACES</Text>

      </View>
      <ScrollView style={{
        backgroundColor: '#ffffff',
        width: '100%',
        height: 699.9
      }}>
        <View style={{
          // alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 12,
          // backgroundColor:'red',
          width:360,
          height: 140
        }}>
          <TouchableOpacity  onPress={() => navigation.navigate('sign_up')}>
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ass.png?alt=media&token=f76f317e-9e69-4d39-9c78-96a746a56621'}} style={{
            resizeMode: 'contain',
            width: 350,
            height: 200,
          }} />
          </TouchableOpacity>
          
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 20,
          backgroundColor:'#a9a9a9'
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

          {/* <View style={{
            // backgroundColor: 'red',
            marginLeft: 180,
            justifyContent: 'center'
          }}>
            <TouchableOpacity>
              <Text style={{
                color: '#416FDF'
              }}>View all</Text>
            </TouchableOpacity>

          </View> */}
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
        <View style={{
          flexDirection: 'row',
          marginTop: 20
        }}>
          <View style={{
            width: 200,
            height: 220,
            // backgroundColor:'red',

          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Back')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/111.jpg?alt=media&token=52f24aed-0a4c-4cf8-b559-8dd68b32191e'}} style={{
                resizeMode: 'cover',
                width: 190,
                height: 150,
                marginLeft: 5
              }} />
              <Text style={{ marginLeft: 10 }}>
                Unipole
              </Text>
              <Text style={{ marginLeft: 10 }}>
                Itam Adjacent Health Center Uyo, Akwa Ibom
              </Text>
            </TouchableOpacity>

          </View>
          <View style={{
            width: 200,
            height: 220,
            // backgroundColor:'red',
            marginLeft: 10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Backu')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/2222.jpg?alt=media&token=1e6dbe4f-c170-4f75-a6cc-2e2c72f522ab'}} style={{
                resizeMode: 'stretch',
                width: 200,
                height: 150,

              }} />
              <Text>
                Large Format
              </Text>
              <Text>
                Airport Road Uyo,  Akw Ibom
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
            <TouchableOpacity onPress={() => navigation.navigate('Aka')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/aka.jpg?alt=media&token=ebfe604b-c7e0-43af-a09c-a2d1d6f3c57a'}} style={{
                resizeMode: 'contain',
                width: 190,
                height: 150,
                marginLeft: 5
              }} />
              <Text style={{ marginLeft: 10 }}>
                48 sheet
              </Text>
              <Text style={{ marginLeft: 10 }}>
                Aka Road before Aka Junction Uyo, Akwa Ibom
              </Text>
            </TouchableOpacity>

          </View>
          <View style={{
            width: 185,
            height: 220,
            // backgroundColor:'red',
            marginLeft: 10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Img6666')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/6666.jpg?alt=media&token=bc0f416b-371e-4c97-9594-d838d743acfb'}} style={{
                resizeMode: 'contain',
                width: 200,
                height: 150

              }} />
              <Text>
                48 sheet
              </Text>
              <Text>
                Calabar Itu Road Befor Health Center Uyo, Akwa Ibom
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
            <TouchableOpacity onPress={() => navigation.navigate('Img5555')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/5555.jpg?alt=media&token=c4a63a7f-bdcc-4adc-bc87-cfcc6f24cb34'}} style={{
                resizeMode: 'cover',
                width: 190,
                height: 150,
                marginLeft: 5

              }} />
              <Text style={{ marginLeft: 10 }}>
                Portrait
              </Text>
              <Text style={{ marginLeft: 10 }}>
                Itam Market Uyo, Akwa Ibom
              </Text>
            </TouchableOpacity>

          </View>
          <View style={{
            width: 200,
            height: 220,
            // backgroundColor:'red',
            marginLeft: 10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Nwaniba')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/nwaniba.jpg?alt=media&token=c15e1eb0-c10d-4985-9629-429463012096'}} style={{
                // resizeMode:'cover',
                width: 200,
                height: 150

              }} />
              <Text>
                48 Sheet
              </Text>
              <Text>
                Nwaniba By Annua Hospital Uyo, Akwa Ibom
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
            // backgroundColor:'red',

          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Itam')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/itam.png?alt=media&token=f81618f9-44ca-484e-8929-a6fcf6d0aa08'}} style={{
                // resizeMode: 'contain',
                width: 200,
                height: 150,
                marginLeft: 5

              }} />
              <Text style={{ marginLeft: 10 }}>
                Portrait
              </Text>
              <Text style={{ marginLeft: 10 }}>
                Itam Junction By Itam Market Uyo, Akwa Ibom
              </Text>
            </TouchableOpacity>

          </View>
          <View style={{
            width: 180,
            height: 220,
            // backgroundColor:'red',
            marginLeft: 10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Oron')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/oron.jpg?alt=media&token=350b3e8b-2551-40e6-a59e-72d30e853551'}} style={{
                resizeMode: 'cover',
                width: 200,
                height: 150

              }} />
              <Text>
                Portrait
              </Text>
              <Text>
                Oron Road By Ntekim Primary School Uyo, Akwa Ibom
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
            // backgroundColor:'red',

          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Oran')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ornRoad.jpg?alt=media&token=e4b3e7b1-834c-4f4b-9aba-14f4090c04d7'}} style={{
                resizeMode: 'cover',
                width: 190,
                height: 150,
                marginLeft: 5

              }} />
              <Text style={{ marginLeft: 10 }}>
                48 Sheet
              </Text>
              <Text style={{ marginLeft: 10 }}>
                Oron Road By Shelter Afrique Uyo, Akwa Ibom
              </Text>
            </TouchableOpacity>

          </View>
          <View style={{
            width: 180,
            height: 220,
            // backgroundColor:'red',
            marginLeft: 10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Itu')}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ituRoad.jpg?alt=media&token=ecf0d7bc-ff5f-461c-a828-85882b20c8ea'}} style={{
                resizeMode: 'cover',
                width: 200,
                height: 150

              }} />
              <Text>
                48 sheet
              </Text>
              <Text>
                Itu Road Junction Uyo, Akwa Ibom
              </Text>

            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    minWidth: '100%',
    minHeight: '100%'

  }
})