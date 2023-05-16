import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Component from './Component'

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
                }}>
                <View style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                    backgroundColor: '#F5F5F5',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontWeight: '500' }}>Akwa Ibom</Text>

                </View>

            </ScrollView>
            <View style={{ marginRight: 16 }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20
                }}>
                    <Component
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/akaRd.jpg?alt=media&token=a0281d39-a635-4803-ab86-0adc86f8762c' }}
                        location="Abak Road By Fedral Secretariat After Plaza Uyo, Akwa Ibom"
                        navigate='Akar'
                    />
                    <Component
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/abak.jpg?alt=media&token=c7cdfc68-f0e6-4969-bc4b-4981e3b66647' }}
                        location="Abak Uyo Road After Ekom Iman Flyover (Obasanjo Road) Uyo, Akwa Ibom"
                        width='90%'
                        navigate='abak'
                        margin={5}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Component
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/kk.jpg?alt=media&token=bfe15f7e-1b8e-4e27-bc6d-a5535eb67be1' }}
                        location="Abak Road By Fedral Secretariat After Plaza Uyo, Akwa Ibom"
                        navigate='Ferd'
                    />
                    <Component
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ikot.jpg?alt=media&token=dcc6b903-a488-464e-baf8-23139493260b' }}
                        location="Ikot Ekpene Road By Forte Oil After Ibom Plaza Uyo, Akwa Ibom"
                        width='90%'
                        navigate='Ikot'
                        margin={5}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Component
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/111.jpg?alt=media&token=52f24aed-0a4c-4cf8-b559-8dd68b32191e' }}
                        location="Itam After Health Center Uyo, Akwa Ibom"
                        navigate='Back'
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})