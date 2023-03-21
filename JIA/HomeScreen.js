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
        height: 90,
        // justifyContent: 'center',
        flexDirection: 'row'
      }}>
        {/* <Image source={require('../assets/billboard1.png')} style={{
          resizeMode: 'contain',
          width: 230,
          marginLeft: 10,
          
        }} /> */}
        <Text style={{
          marginTop: 50, fontSize: 23, marginLeft: 20,
          fontStyle: 'italic', color: '#416FDF'
        }}>BILLBOARD</Text>
        <Text style={{ marginTop: 50, fontSize: 23, fontStyle: 'italic' }}> SPACES</Text>

        {/* <View style={{
          marginTop: 50,
          marginLeft: 110
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Add')}>
            <MaterialIcons name="add-box" size={30} color="#000000" />
          </TouchableOpacity>

        </View> */}
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
            <Image source={require('../assets/ass.png')} style={{
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
              <Image source={require('../assets/111.jpg')} style={{
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
              <Image source={require('../assets/2222.jpg')} style={{
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
              <Image source={require('../assets/aka.jpg')} style={{
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
              <Image source={require('../assets/6666.jpg')} style={{
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
              <Image source={require('../assets/5555.jpg')} style={{
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
              <Image source={require('../assets/nwaniba.jpg')} style={{
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
              <Image source={require('../assets/itam.png')} style={{
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
              <Image source={require('../assets/oron.jpg')} style={{
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
              <Image source={require('../assets/ornRoad.jpg')} style={{
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
              <Image source={require('../assets/ituRoad.jpg')} style={{
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