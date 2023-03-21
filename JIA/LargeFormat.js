import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function LargeFormat({ navigation }) {
    return (
        <View>
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
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Backu')}>
                        <Image source={require('../assets/2222.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Airport Road Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})