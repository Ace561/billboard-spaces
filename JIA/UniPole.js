import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function UniPole({ navigation }) {
    return (
        <ScrollView>
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
                    <TouchableOpacity onPress={()=> navigation.navigate('Akar')}>
                        <Image source={require('../assets/akaRoad.jpg')} style={{
                            resizeMode: 'contain',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />

                        <Text style={{ marginLeft: 5 }}>
                            Abak Road By Fedral Secretariat After Plaza Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 180,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('abak')}>
                        <Image source={require('../assets/abak.jpg')} style={{
                            resizeMode: 'contain',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />

                        <Text>
                            Abak Uyo Road After Ekom Iman Flyover (Obasanjo Road) Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Ferd')}>
                        <Image source={require('../assets/kk.jpg')} style={{
                            resizeMode: 'contain',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />

                        <Text style={{ marginLeft: 5 }}>
                            Abak Road By Fedral Secretariat After Plaza Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: 180,
                    height: 220,
                    //  backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Ikot')}>
                        <Image source={require('../assets/ikot.jpg')} style={{
                            resizeMode: 'contain',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 5 }}>
                            Ikot Ekpene Road By Forte Oil After Ibom Plaza Uyo, Akwa Ibom         </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
          flexDirection: 'row',
          marginTop: 20
        }}>
          <View style={{
            width: 200,
            height: 220,
            // backgroundColor:'red',

          }}>
            <TouchableOpacity onPress={()=> navigation.navigate('Back')}>
              <Image source={require('../assets/111.jpg')} style={{
                resizeMode: 'cover',
                width: 190,
                height: 150,
                marginLeft: 5

              }} />
              <Text style={{ marginLeft: 10 }}>
                Itam After Health Center Uyo, Akwa Ibom
              </Text>
            </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})